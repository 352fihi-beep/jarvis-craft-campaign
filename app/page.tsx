"use client";

import { useState } from "react";
import BotSidebar from "@/components/BotSidebar";
import ChatView from "@/components/ChatView";
import ThreeVisuals from "@/components/ThreeVisuals";

const BOTS = [
  { id: "jarvis", name: "Jarvis", role: "Chief of Staff", color: "#60a5fa" },
  { id: "scout", name: "Scout", role: "Researcher", color: "#34d399" },
  { id: "quill", name: "Quill", role: "Writer", color: "#fbbf24" },
  { id: "pixel", name: "Pixel", role: "3D Designer", color: "#f472b6" },
  { id: "relay", name: "Relay", role: "Inbox Manager", color: "#a78bfa" },
];

export default function Home() {
  const [mode, setMode] = useState<"simple" | "3d">("simple");
  const [activeBot, setActiveBot] = useState(BOTS[0]);
  const [messages, setMessages] = useState<any[]>([
    { from: "system", text: "Welcome to Jarvis HQ. What do you want the team to work on?" },
  ]);

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-[#E7E9EA]">
      <BotSidebar bots={BOTS} active={activeBot} onSelect={setActiveBot} />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          <div>
            <h1 className="text-lg font-semibold">{activeBot.name}</h1>
            <p className="text-xs text-[#71767B]">{activeBot.role}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setMode("simple")}
              className={`px-3 py-1 rounded-full text-sm ${
                mode === "simple" ? "bg-white text-black" : "bg-white/10"
              }`}
            >
              Simple
            </button>
            <button
              onClick={() => setMode("3d")}
              className={`px-3 py-1 rounded-full text-sm ${
                mode === "3d" ? "bg-white text-black" : "bg-white/10"
              }`}
            >
              3D Visuals
            </button>
          </div>
        </header>
        <div className="flex-1 relative overflow-hidden">
          {mode === "3d" && <ThreeVisuals active={messages.length} color={activeBot.color} />}
          <ChatView
            messages={messages}
            onSend={(text) =>
              setMessages((m) => [
                ...m,
                { from: "user", text },
                { from: "bot", text: `${activeBot.name} is on it. (demo reply)`, bot: activeBot.name },
              ])
            }
          />
        </div>
      </div>
    </div>
  );
}
