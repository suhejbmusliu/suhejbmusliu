import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileTopbar from "./MobileTopbar";
import ContentPanel from "./ContentPanel";

export default function AppShell() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-[100dvh] w-full text-slate-100">
      <MobileTopbar active={active} onOpen={() => setMobileOpen(true)} />

      {/* Use dvh (fixes iPhone height issues) */}
      <div className="min-h-[calc(100dvh-56px)] w-full px-3 py-4 sm:px-6 sm:py-6">
        <div className="grid w-full gap-4 md:grid-cols-[320px_1fr] md:gap-6">
          <div className="hidden md:block">
            <Sidebar active={active} onSelect={handleSelect} />
          </div>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                className="absolute inset-0 bg-black/70"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu overlay"
              />

              {/* Drawer panel with safe-area + scrolling */}
              <div
                className="absolute left-0 top-0 h-[100dvh] w-[86%] max-w-xs
                           bg-slate-950/95 backdrop-blur
                           border-r border-white/10 shadow-2xl
                           overflow-y-auto
                           pt-[env(safe-area-inset-top)]
                           pb-[env(safe-area-inset-bottom)]"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-slate-950/95 border-b border-white/10">
                  <div className="text-sm font-semibold tracking-wide text-slate-200">
                    MENU
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>

                <div className="p-4">
                  <Sidebar active={active} onSelect={handleSelect} />
                </div>
              </div>
            </div>
          )}

          <ContentPanel active={active} />
        </div>
      </div>
    </div>
  );
}
