import React from "react";
import FuturisticNavbar from "@/components/FuturisticNavbar";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#10182a] to-[#0a0f1c] text-white font-sans">
      <FuturisticNavbar />
      <main className="flex flex-col items-center justify-center flex-1 py-24 px-4">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_#00f0ff]">
          Welcome to Xperishables Support & AI Agents
        </h1>
        <p className="max-w-xl text-lg text-cyan-100/80 mb-10 text-center">
          Experience next-gen support with AI agents, real-time helpdesk, and a luxurious, minimal interface.
        </p>
        <div className="rounded-2xl bg-[#10182a]/80 border border-cyan-900/40 shadow-[0_4px_32px_0_rgba(0,255,255,0.10)] p-10 flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="w-32 h-32 mb-6 rounded-xl shadow-[0_0_32px_#00f0ff]" />
          <span className="text-xl font-semibold text-cyan-200 mb-2">Get started by logging in or exploring the app features.</span>
        </div>
      </main>
    </div>
  );
}