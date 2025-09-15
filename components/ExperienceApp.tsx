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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Unlock Support & AI Agents</h2>
        <GetAccess planId={process.env.NEXT_PUBLIC_STARTER_PLAN_ID!} experienceId={experienceId} />
      </div>
    );
  }
  const CurrentTab = TABS.find(t => t.key === tab)?.component ?? Inbox;
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex gap-4 border-b p-4">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`px-3 py-2 rounded ${tab === t.key ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main className="flex-1 p-6">
        <CurrentTab />
      </main>
    </div>
  );
}