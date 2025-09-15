'use client';
import { useState } from 'react';
import { useIframeSdk } from '@whop/react';
import { createCheckoutSession } from '@/app/actions/createCheckoutSession';

export default function GetAccess({ planId, experienceId }:{ planId:string; experienceId:string }) {
  const iframeSdk = useIframeSdk();
  const [busy, setBusy] = useState(false);

  async function buy() {
    setBusy(true);
    const { checkoutSession } = await createCheckoutSession(planId, experienceId);
    await iframeSdk.inAppPurchase(checkoutSession);
    setBusy(false);
  }
  return (
    <button
      onClick={buy}
      disabled={busy}
      className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200
        bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300
        text-[#0a0f1c] shadow-[0_0_24px_#00f0ff55]
        hover:shadow-[0_0_48px_#00f0ff99] hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-cyan-400
        disabled:opacity-60 disabled:cursor-not-allowed`}
      style={{ letterSpacing: '0.05em' }}
    >
      {busy ? 'Loading...' : 'Get Access'}
    </button>
  );
}