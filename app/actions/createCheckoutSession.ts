'use server';
export async function createCheckoutSession(planId: string, experienceId: string) {
  const res = await fetch(`${process.env.INTERNAL_API_BASE}/payments/create-checkout`, {
    method: 'POST',
    body: JSON.stringify({ planId, experienceId }),
    headers: { 'content-type': 'application/json' }
  });
  return res.json();
}