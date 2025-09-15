import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const whopSecret = process.env.WHOP_WEBHOOK_SECRET;
  const signature = req.headers.get('x-whop-signature');
  // In production, verify signature.
  const event = await req.json();
  // Log event for now.
  console.log('Received webhook event:', event);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  // For test pings.
  return NextResponse.json({ ok: true });
}