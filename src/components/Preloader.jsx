export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-slate-950 text-slate-100">
      <div className="flex flex-col items-center gap-4">
        <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-white/5">
          <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-40" />
          <span className="text-2xl font-bold tracking-wide">SM</span>
        </div>

        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-[slide_1.1s_ease-in-out_infinite] rounded-full bg-white/40" />
        </div>

        <p className="text-xs text-slate-400">Loading portfolio...</p>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(150%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
    </div>
  );
}
