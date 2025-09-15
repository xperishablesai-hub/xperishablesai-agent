import { redirect } from 'next/navigation';

export default function Page() {
  redirect(`/experience/${process.env.NEXT_PUBLIC_EXPERIENCE_ID}`);
}