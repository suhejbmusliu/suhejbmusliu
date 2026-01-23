import { useEffect, useState } from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Contact from "../../pages/Contact";

export default function ContentPanel({ active }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 220);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <main className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur overflow-auto text-base">

      <div
        className={[
          "transition-all duration-700 ease-in-out",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        {active === "home" && <Home />}
        {active === "about" && <About />}
        {active === "projects" && <Projects />}
        {active === "skills" && <Skills />}
        {active === "contact" && <Contact />}
      </div>
    </main>
  );
}
