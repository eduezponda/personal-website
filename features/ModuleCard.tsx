import type { ZriveModule } from "@/lib/zrive";

export function ModuleCard({ module }: { module: ZriveModule }) {
  return (
    <div className="border border-outline-variant rounded-lg bg-surface-low p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-label text-accent border border-accent/30 rounded px-2 py-0.5">
          Module {module.number}
        </span>
      </div>
      <h3 className="text-base font-semibold text-on-surface mb-2">
        {module.title}
      </h3>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
        {module.summary}
      </p>
      <ul className="flex flex-col gap-1 mb-4">
        {module.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-on-surface-variant">
            <span className="text-accent mt-0.5 shrink-0">→</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {module.skills.map((skill) => (
          <span
            key={skill}
            className="text-label text-on-surface-variant bg-surface-container-high rounded px-2 py-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
