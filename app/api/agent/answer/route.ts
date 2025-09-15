import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // In production, check entitlement, rate limits, etc.
  const { message } = await req.json();
  return NextResponse.json({
    answer: "This is a stubbed AI answer.",
    confidence: 0.95,
    sources: [{ id: "kb_stub", title: "Sample KB Doc" }]
  });
}