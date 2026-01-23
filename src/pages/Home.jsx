import { profile } from "../data/profile";
import profileImg from "../assets/profile.jpg";

import {
  FiDownload,
  FiMail,
  FiLayout,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function IconBtn({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5
                 transition hover:bg-white/10"
    >
      <Icon className="text-lg text-slate-100" />
    </a>
  );
}

function ServiceCard({ title, desc, Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10">
          <Icon className="text-lg" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Top grid */}
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* Left image card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img
              src={profileImg}
              alt={profile.name}
              className="h-[260px] w-full object-cover"
            />
          </div>
        </div>

        {/* Right about card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-sm leading-relaxed text-slate-200">
            <span className="font-semibold">My name is {profile.name}</span>, a
            Junior Software Developer with a strong foundation in web
            development and hands-on experience building real-world projects
            using HTML, CSS, JavaScript, React, and Node.js. Highly motivated,
            fast learner, and eager to grow professionally in a team
            environment. Interested in developing clean, responsive, and
            user-friendly applications while continuously improving technical
            and problem-solving skills.
          </p>

          {/* Icon row */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <IconBtn
              href={profile.links.cv}
              label="View CV"
              Icon={FiDownload}
            />
            <IconBtn
              href={"mailto:" + profile.email}
              label="Email"
              Icon={FiMail}
            />
            <IconBtn
              href={profile.links.linkedin}
              label="LinkedIn"
              Icon={FaLinkedin}
            />
            <IconBtn
              href={profile.links.github}
              label="GitHub"
              Icon={FaGithub}
            />
          </div>

          {/* Little tags row (optional like screenshot) */}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Software Engineer", "Full-Stack Developer", "UI / Figma"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* What I do */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <h2 className="text-lg font-semibold">What I do</h2>
        <p className="mt-1 text-sm text-slate-300">
          A few things I can help you build.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ServiceCard
            title="Responsive Websites"
            desc="Layouts that look great on mobile, tablet, and desktop."
            Icon={FiSmartphone}
          />
          <ServiceCard
            title="React Interfaces"
            desc="Reusable components, smooth UI, and clean structure."
            Icon={FiLayout}
          />
          <ServiceCard
            title="APIs & Backend (Junior)"
            desc="Basic REST APIs with Node/Express and simple authentication."
            Icon={FiServer}
          />
        </div>
      </div>
    </div>
  );
}
