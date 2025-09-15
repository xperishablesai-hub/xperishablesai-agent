import React from "react";
import Logo from "./Logo";

const FuturisticNavbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-[#0a0f1c] to-[#10182a] border-b border-cyan-900/40 shadow-[0_2px_24px_0_rgba(0,255,255,0.08)]">
    <div className="flex items-center gap-4">
      <Logo size={48} />
      <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_#00f0ff]">
        Xperishables
      </span>
    </div>
    <div className="flex items-center gap-6">
      {/* Placeholder for future nav actions */}
    </div>
  </nav>
);

export default FuturisticNavbar;