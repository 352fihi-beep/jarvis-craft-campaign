"use client";

import { useState } from "react";

export default function ChatView({ messages, onSend }: any) {
  const [input, setInput] = useState("");

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 1 && (
          <div className="text-center mt-20">
            <div className="text-5xl font-bold tracking-tight">Jarvis</div>
            <p className="text-[#71767B] mt-2">Your AI team is ready</p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["Sort my inbox", "Research a lead", "Write a briefing", "Make a 3D scene"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => onSend(chip)}
                  className="px-4 py-2 rounded-full bg-white/10 text-sm hover:bg-white/20"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m: any, i: number) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                m.from === "user" ? "bg-[#1d9bf0] text-white" : "bg-transparent"
              }`}
            >
              {m.bot && <div className="text-xs text-[#71767B] mb-1">{m.bot}</div>}
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-white/10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              onSend(input);
              setInput("");
            }
          }}
          className="flex items-center bg-[#16181C] rounded-full px-4 py-2 border border-white/10"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Jarvis..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button type="submit" className="ml-2 text-[#1d9bf0]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
