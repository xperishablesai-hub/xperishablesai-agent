import { headers } from 'next/headers';

export async function getCurrentUserFromHeaders(h: Headers) {
  const token = h.get('x-whop-user-token');
  if (!token) return null;
  const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  return { id: payload?.sub as string, role: payload?.role as string };
}

export async function checkAccessToExperience(userId: string, experienceId: string) {
  // In production, this would call your own backend or Whop API.
  const res = await fetch(`${process.env.INTERNAL_API_BASE || ''}/api/access/check`, {
    method: 'POST',
    body: JSON.stringify({ userId, experienceId }),
    headers: { 'content-type': 'application/json' }
  });
  const { hasAccess } = await res.json();
  return !!hasAccess;
}