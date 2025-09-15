import React from "react";

const Logo = ({ size = 56 }: { size?: number }) => (
  <img
    src="/logo.png"
    alt="App Logo"
    width={size}
    height={size}
    className="rounded-xl shadow-lg"
    style={{
      filter: "drop-shadow(0 0 24px #00f0ff)",
      background: "rgba(0,0,0,0.6)",
      objectFit: "contain",
    }}
  />
);

export default Logo;