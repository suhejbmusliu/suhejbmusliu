import { education, certification } from "../data/education";

function InfoCard({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-slate-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <h2 className="text-xl font-semibold md:text-2xl">About Me</h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-300 max-w-3xl">
          I am a junior software developer with a strong foundation in web
          development and hands-on experience building real-world projects using
          React, JavaScript, and Node.js. I enjoy turning ideas into functional,
          user-friendly applications, with a focus on clean UI, responsive
          design, and well-structured code.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-300 max-w-3xl">
          Through my projects, I have gained practical experience working with
          modern frontend tools, basic backend logic, and RESTful APIs, while
          continuously improving my problem-solving and debugging skills. I pay
          attention to usability and performance, and I try to write code that
          is clear, maintainable, and easy to extend.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-300 max-w-3xl">
          I enjoy working on practical projects, learning new technologies, and
          challenging myself to grow with each task. I am motivated to develop
          my skills further in a professional team environment, where I can
          contribute, learn from others, and gain real-world experience as a
          software developer
        </p>
      </div>

      {/* Education + Certification */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <InfoCard title="Education">
          <p className="text-sm font-medium text-slate-100">
            {education.degree}
          </p>
          <p className="mt-1 text-sm text-slate-300">{education.university}</p>
          <p className="mt-2 text-xs text-slate-400">
            Status: {education.status}
          </p>
          <p className="mt-1 text-xs text-slate-400">{education.period}</p>
        </InfoCard>

        {/* Certification */}
        <InfoCard title="Certification">
          <p className="text-sm font-medium text-slate-100">
            {certification.title}
          </p>
          <p className="mt-1 text-sm text-slate-300">
            {certification.provider}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Date of Achievement: {certification.date}
          </p>
        </InfoCard>
      </div>
    </div>
  );
}
