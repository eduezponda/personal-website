import Link from "next/link";
import { notFound } from "next/navigation";
import { zriveModules } from "@/lib/zrive";

export function generateStaticParams() {
  return zriveModules.map((m) => ({ id: String(m.number) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const module = zriveModules.find((m) => String(m.number) === id);
  if (!module) notFound();
  return {
    title: `${module.title} | Zrive DS Course | Eduardo Ezponda`,
  };
}

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const module = zriveModules.find((m) => String(m.number) === id);
  if (!module) notFound();

  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-xs mb-md text-secondary">
        <Link
          href="/projects"
          className="text-label-sm uppercase tracking-widest hover:text-primary transition-colors"
        >
          Projects
        </Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <Link
          href="/projects/zrive"
          className="text-label-sm uppercase tracking-widest hover:text-primary transition-colors"
        >
          Zrive
        </Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-label-sm uppercase tracking-widest text-primary">
          Module {String(module.number).padStart(2, "0")}
        </span>
      </nav>

      {/* Header */}
      <section className="mb-xl">
        <div className="flex items-center gap-sm mb-sm">
          <span className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold shrink-0">
            {String(module.number).padStart(2, "0")}
          </span>
        </div>
        <h1 className="text-hero-lg text-on-surface mb-md">{module.title}</h1>
        <div className="flex flex-wrap gap-xs">
          {module.skills.map((skill) => (
            <span
              key={skill}
              className="text-label-sm text-secondary bg-surface-container rounded px-sm py-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Full description */}
      <section className="mb-xl">
        <p className="text-body-lg text-secondary leading-relaxed max-w-3xl">
          {module.summary}
        </p>
      </section>

      {/* Highlights */}
      {module.highlights.length > 0 && (
        <section className="mb-xl">
          <h2 className="text-label-sm uppercase tracking-widest text-primary mb-md">
            Highlights
          </h2>
          <ul className="flex flex-col gap-sm">
            {module.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-sm text-body-md text-secondary"
              >
                <span className="material-symbols-outlined text-primary text-[16px] mt-[3px] shrink-0">
                  arrow_forward
                </span>
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* System design image */}
      {module.image && (
        <section className="mb-xl">
          <h2 className="text-label-sm uppercase tracking-widest text-primary mb-md">
            System Design
          </h2>
          <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={module.image}
              alt={`System design diagram for ${module.title}`}
              className="w-full"
            />
          </div>
        </section>
      )}

      {/* PDF resources */}
      {module.pdfs && module.pdfs.length > 0 && (
        <section className="mb-xl">
          <h2 className="text-label-sm uppercase tracking-widest text-primary mb-md">
            PDF Resources
          </h2>
          <div className="flex flex-wrap gap-sm">
            {module.pdfs.map((pdf) => (
              <a
                key={pdf.url}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs text-body-md text-secondary border border-outline-variant rounded-lg px-md py-xs hover:border-outline hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  picture_as_pdf
                </span>
                {pdf.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <Link
        href="/projects/zrive"
        className="inline-flex items-center gap-xs text-body-md text-secondary hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        Back to Zrive
      </Link>
    </main>
  );
}
