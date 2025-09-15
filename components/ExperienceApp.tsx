'use client';
import { useState } from 'react';
import GetAccess from './GetAccess';
import Inbox from './Inbox';
import Agents from './Agents';
import KnowledgeBase from './KnowledgeBase';
import Analytics from './Analytics';
import Settings from './Settings';

const TABS = [
  { key: 'inbox', label: 'Inbox', component: Inbox },
  { key: 'agents', label: 'Agents', component: Agents },
  { key: 'kb', label: 'Knowledge Base', component: KnowledgeBase },
  { key: 'analytics', label: 'Analytics', component: Analytics },
  { key: 'settings', label: 'Settings', component: Settings }
];

export default function ExperienceApp({ paywalled, experienceId }: { paywalled?: boolean; experienceId: string }) {
  const [tab, setTab] = useState('inbox');
  if (paywalled) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10182a] to-[#0a0f1c] text-white">
        <div className="rounded-2xl bg-[#10182a]/80 border border-cyan-900/40 shadow-[0_4px_32px_0_rgba(0,255,255,0.10)] p-10 flex flex-col items-center animate-fade-in">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_#00f0ff]">
            Unlock Support & AI Agents
          </h2>
          <p className="text-cyan-100/80 mb-6 text-center max-w-md">
            Get instant access to next-gen support and AI features. Purchase a plan to unlock the full experience.
          </p>
          <GetAccess planId={process.env.NEXT_PUBLIC_STARTER_PLAN_ID!} experienceId={experienceId} />
        </div>
      </div>
    );
  }
  const CurrentTab = TABS.find(t => t.key === tab)?.component ?? Inbox;
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0f1c] via-[#10182a] to-[#0a0f1c] text-white font-sans">
      <nav className="flex gap-4 border-b border-cyan-900/40 p-4 bg-[#10182a]/80 shadow-[0_2px_24px_0_rgba(0,255,255,0.08)]">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200
              ${
                tab === t.key
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 text-[#0a0f1c] shadow-[0_0_16px_#00f0ff] scale-105'
                  : 'bg-[#0a0f1c]/60 text-cyan-100 hover:bg-cyan-900/30 hover:shadow-[0_0_8px_#00f0ff55]'
              }`}
            onClick={() => setTab(t.key)}
            style={{ letterSpacing: '0.04em' }}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main className="flex-1 p-8 flex flex-col items-center justify-center">
        <CurrentTab />
      </main>
    </div>
  );
}