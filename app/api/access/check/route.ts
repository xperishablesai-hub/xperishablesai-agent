import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId, experienceId } = await req.json();
  // For dev, always grant access if userId is present and not 'paywalled'.
  const hasAccess = !!userId && userId !== 'paywalled';
  return NextResponse.json({ hasAccess });
}