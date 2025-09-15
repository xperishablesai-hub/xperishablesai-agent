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
  return <button onClick={buy} disabled={busy} className="px-4 py-2 bg-blue-600 text-white rounded">{busy ? 'Loading...' : 'Get Access'}</button>;
}