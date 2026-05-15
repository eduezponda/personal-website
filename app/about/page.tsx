import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { timeline, certifications, skills } from "@/lib/cv";

export const metadata = {
  title: "About — Eduardo Ezponda",
  description: "CV, timeline, skills and certifications for Eduardo Ezponda.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      {/* Header */}
      <div className="mb-16">
        <p className="text-label text-accent mb-3">About me</p>
        <h1 className="text-section-title text-on-surface mb-4">
          Data Scientist &amp; Value Investor
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">
          I build ML models that go to production and think about businesses
          worth owning. Computer Science grad from UPNA, Erasmus+ at Laurea
          (Helsinki), now at Management Solutions working with BBVA.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/eduezponda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface border border-outline-variant hover:border-outline rounded-md px-4 py-2 transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-ezponda-igea-104538230/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface border border-outline-variant hover:border-outline rounded-md px-4 py-2 transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href="mailto:eduardoezpondaigea@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface border border-outline-variant hover:border-outline rounded-md px-4 py-2 transition-colors"
          >
            <Mail size={16} /> eduardoezpondaigea@gmail.com
          </a>
          <a
            href="/docs/CV_Eduardo_Ezponda_Igea.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant border border-outline-variant rounded-md px-4 py-2 hover:border-outline hover:text-on-surface transition-colors"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>

      <hr className="border-outline-variant mb-16" />

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-label text-accent mb-8">Experience &amp; Education</h2>
        <ol className="relative border-l border-outline-variant ml-3 flex flex-col gap-10">
          {timeline.map((item) => (
            <li key={item.period} className="pl-8 relative">
              {/* dot */}
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-muted border-2 border-surface" />
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <span className="text-label text-outline">{item.period}</span>
                <span className="text-sm text-on-surface-variant">{item.location}</span>
              </div>
              <h3 className="text-base font-semibold text-on-surface">
                {item.role}{" "}
                <span className="font-normal text-accent">@ {item.org}</span>
              </h3>
              <p className="mt-1 text-sm text-on-surface-variant leading-relaxed max-w-xl">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label text-on-surface-variant border border-outline-variant rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <hr className="border-outline-variant mb-16" />

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-label text-accent mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-on-surface mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-label text-on-surface-variant bg-surface-container rounded px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-outline-variant mb-16" />

      {/* Certifications */}
      <section>
        <h2 className="text-label text-accent mb-8">Certifications</h2>
        <div className="flex flex-col gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-outline-variant rounded-lg px-5 py-4 bg-surface-low"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <span className="text-sm font-semibold text-on-surface">
                  {cert.name}
                </span>
                <span className="text-label text-outline">{cert.issuer}</span>
              </div>
              <p className="text-sm text-on-surface-variant">{cert.focus}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
