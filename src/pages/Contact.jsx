import { profile } from "../data/profile";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function ContactItem({ Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="text-lg" />
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-300 hover:text-white"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-slate-300">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">Contact</h2>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl">
          If you’re looking for a reliable developer to build or improve your website,
          feel free to reach out. I’m open to freelance work, collaborations,
          and junior developer opportunities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left: message */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h3 className="text-sm font-semibold text-slate-200">
            Let’s work together
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Whether you need a modern website, a React interface, or help with a
            full-stack project, I’m ready to help. I focus on clean design,
            responsiveness, and clear communication throughout the process.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Feel free to contact me using any of the methods on the right.
          </p>

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={"mailto:" + profile.email}
              className="inline-flex items-center gap-2 rounded-xl
                         bg-gradient-to-r from-indigo-500 to-violet-500
                         px-4 py-2 text-sm font-medium text-white
                         transition hover:opacity-90"
            >
              <FiMail />
              Email me
            </a>

            <a
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl
                         border border-white/10 bg-white/5
                         px-4 py-2 text-sm
                         transition hover:bg-white/10"
            >
              <FiDownload />
              View CV
            </a>
          </div>
        </div>

        {/* Right: details */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur space-y-4">
          <ContactItem
            Icon={FiMail}
            label="Email"
            value={profile.email}
            href={"mailto:" + profile.email}
          />

          <ContactItem
            Icon={FiPhone}
            label="Phone"
            value={profile.phone}
            href={"tel:" + profile.phone}
          />

          <ContactItem
            Icon={FiMapPin}
            label="Location"
            value={profile.location}
          />

          <ContactItem
            Icon={FaLinkedin}
            label="LinkedIn"
            value="linkedin.com/in/suhejbmusliu"
            href={profile.links.linkedin}
          />

          <ContactItem
            Icon={FaGithub}
            label="GitHub"
            value="github.com/suhejbmusliu"
            href={profile.links.github}
          />
        </div>
      </div>
    </div>
  );
}
