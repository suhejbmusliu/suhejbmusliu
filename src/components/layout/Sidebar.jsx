import { navLinks } from "../../data/navLinks";
import { profile } from "../../data/profile";

import {
  FiHome,
  FiUser,
  FiFolder,
  FiBarChart2,
  FiMail,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navIcons = {
  home: FiHome,
  about: FiUser,
  projects: FiFolder,
  skills: FiBarChart2,
  contact: FiMail,
};

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      
      {/* Profile */}
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 font-bold">
          {profile.initials}
        </div>
        <div>
          <div className="text-sm font-semibold leading-tight">
            {profile.name}
          </div>
          <div className="text-xs text-slate-400">
            {profile.role}
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-slate-300">
        {profile.summary}
      </p>

      {/* SOCIAL LINKS (BIGGER) */}
      <div className="mb-7 flex flex-wrap gap-3">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl
                     border border-white/10 bg-white/5
                     px-4 py-2 text-sm font-medium
                     transition hover:bg-white/10"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl
                     border border-white/10 bg-white/5
                     px-4 py-2 text-sm font-medium
                     transition hover:bg-white/10"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>

        <a
          href={"mailto:" + profile.email}
          className="inline-flex items-center gap-2 rounded-xl
                     border border-white/10 bg-white/5
                     px-4 py-2 text-sm font-medium
                     transition hover:bg-white/10"
        >
          <FiMail className="text-lg" />
          Email
        </a>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-1">
        {navLinks.map((item) => {
          const Icon = navIcons[item.id];
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={[
                "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <Icon className="text-lg opacity-90" />
              {item.label}

              {isActive && (
                <span className="ml-auto h-2 w-2 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-400">
        {profile.location}
      </div>
    </aside>
  );
}
