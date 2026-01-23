import { navLinks } from "../../data/navLinks";

export default function MobileTopbar({ active, onOpen }) {
  const current = navLinks.find((l) => l.id === active)?.label || "Section";

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={onOpen}
          className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/10"
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="text-sm font-semibold text-slate-200">{current}</div>

        <div className="w-10" />
      </div>
    </div>
  );
}
