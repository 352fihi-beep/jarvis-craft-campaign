"use client";

export default function BotSidebar({ bots, active, onSelect }: any) {
  return (
    <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="font-semibold">Jarvis HQ</h2>
        <p className="text-xs text-[#71767B]">Craft Anything Campaign</p>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {bots.map((bot: any) => (
          <button
            key={bot.id}
            onClick={() => onSelect(bot)}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 ${
              active.id === bot.id ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: bot.color }} />
            <div>
              <div className="text-sm font-medium">{bot.name}</div>
              <div className="text-xs text-[#71767B]">{bot.role}</div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
