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
    <div className="min-h-screen w-full text-slate-100">
      {/* Mobile topbar (height ~56px) */}
      <MobileTopbar active={active} onOpen={() => setMobileOpen(true)} />

      {/* This block becomes full height */}
      <div className="h-[calc(100vh-56px)] md:h-screen w-full px-3 py-4 sm:px-6 sm:py-6">
        <div className="grid h-full w-full gap-4 md:grid-cols-[320px_1fr] md:gap-6">
          {/* Desktop sidebar */}
          <div className="hidden h-full md:block">
            <Sidebar active={active} onSelect={handleSelect} />
          </div>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                className="absolute inset-0 bg-black/60"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu overlay"
              />
              <div className="absolute left-0 top-0 h-full w-[84%] max-w-xs bg-slate-900 p-4 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-semibold tracking-wide text-slate-200">
                    MENU
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>

                <Sidebar active={active} onSelect={handleSelect} />
              </div>
            </div>
          )}

          {/* Right content */}
          <ContentPanel active={active} />
        </div>
      </div>
    </div>
  );
}
