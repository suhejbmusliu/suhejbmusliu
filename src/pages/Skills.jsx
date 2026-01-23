import { skillGroups } from "../data/skills";

function SkillRow({ name, level, Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/30">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
            <Icon className="text-base text-slate-100" />
          </div>
          <span className="text-sm text-slate-200">{name}</span>
        </div>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-white/40 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
      <p className="mt-2 text-slate-300">
        A quick overview of the technologies I use most often.
      </p>

      <div className="mt-6 grid gap-6">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-slate-200">
              {group.title}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((s) => (
                <SkillRow
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  Icon={s.icon}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
