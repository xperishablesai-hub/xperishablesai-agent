import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // In production, call Whop API or your backend.
  const { planId, experienceId } = await req.json();
  // Return a stubbed checkoutSession object.
  return NextResponse.json({
    checkoutSession: {
      id: 'stub_checkout_session',
      planId,
      experienceId,
      url: 'https://whop.com/checkout/stub'
    }
  });
}