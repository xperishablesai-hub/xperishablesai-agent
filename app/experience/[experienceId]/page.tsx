import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import ExperienceApp from '@/components/ExperienceApp';
import { getCurrentUserFromHeaders, checkAccessToExperience } from '@/lib/whop';

export default async function Page({ params }: { params: { experienceId: string } }) {
  const h = await headers();
  const user = await getCurrentUserFromHeaders(h);
  if (!user) return notFound();

  const hasAccess = await checkAccessToExperience(user.id, params.experienceId);
  if (!hasAccess) return <ExperienceApp paywalled experienceId={params.experienceId} />;
  return <ExperienceApp experienceId={params.experienceId} />;
}