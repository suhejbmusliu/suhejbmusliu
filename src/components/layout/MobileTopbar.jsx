import { navLinks } from "../../data/navLinks";

export default function MobileTopbar({ active, onOpen }) {
  const current = navLinks.find((l) => l.id === active)?.label || "Section";

  return (
    <div className="sticky top-0 z-40 md:hidden">
      <div
        className="h-14 flex items-center justify-between px-4
                   bg-slate-950/95 backdrop-blur
                   border-b border-white/10"
      >
        <button
          onClick={onOpen}
          className="rounded-lg px-3 py-2 text-base font-semibold text-slate-100 hover:bg-white/10"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="text-base font-semibold text-slate-100">{current}</div>

        <div className="w-10" />
      </div>
    </div>
  );
}
