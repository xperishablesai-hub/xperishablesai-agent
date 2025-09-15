'use client';
import { WhopIframeSdkProvider } from '@whop/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WhopIframeSdkProvider appId={process.env.NEXT_PUBLIC_WHOP_APP_ID!}>
      {children}
    </WhopIframeSdkProvider>
  );
}