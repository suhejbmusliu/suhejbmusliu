import { projects } from "../data/projects";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiVercel,
} from "react-icons/si";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const techIcons = {
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
  react: SiReact,
  node: SiNodedotjs,
  express: SiExpress,
  postgres: SiPostgresql,
  prisma: SiPrisma,
  jwt: SiJsonwebtokens,
  vercel: SiVercel,
};

function IconBtn({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl
                 border border-white/10 bg-white/5
                 transition hover:bg-white/10 hover:scale-105"
    >
      <Icon className="text-lg text-slate-100" />
    </a>
  );
}

function ProjectCard({ p }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      
      {/* Title */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold">{p.title}</h3>
        {p.featured && (
          <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-slate-300">{p.desc}</p>

      {/* Status */}
      {p.status && (
        <p className="mt-2 text-xs text-slate-400">
          Status: {p.status}
        </p>
      )}

      {/* Tech icons */}
      <div className="mt-4 flex flex-wrap gap-3">
        {p.tech.map((key) => {
          const Icon = techIcons[key];
          return Icon ? (
            <div
              key={key}
              title={key.toUpperCase()}
              className="grid h-9 w-9 place-items-center rounded-lg
                         border border-white/10 bg-white/5"
            >
              <Icon className="text-lg text-slate-200" />
            </div>
          ) : null;
        })}
      </div>

      {/* Action icons */}
      <div className="mt-5 flex gap-3">
        {p.live && (
          <IconBtn
            href={p.live}
            label="Live Demo"
            Icon={FiExternalLink}
          />
        )}

        {p.code && (
          <IconBtn
            href={p.code}
            label="View Code"
            Icon={FiGithub}
          />
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <h2 className="text-xl font-semibold md:text-2xl">Projects</h2>
      <p className="mt-2 text-slate-300">
        Some real-world projects I’ve built and deployed.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </div>
  );
}
