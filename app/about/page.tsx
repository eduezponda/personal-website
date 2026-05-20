import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { timeline, education, certifications, skills } from "@/lib/cv";

export const metadata = {
  title: "About | Eduardo Ezponda",
  description: "CV, timeline, skills and certifications for Eduardo Ezponda.",
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        {/* Left sticky column */}
        <aside className="md:col-span-5 lg:col-span-4">
          <div className="sticky top-[88px] h-fit space-y-lg">
            <div className="space-y-sm">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border border-outline-variant">
                <Image
                  src="/profile.jpg"
                  alt="Eduardo Ezponda"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="space-y-base">
                <h1 className="text-hero-lg-mobile md:text-hero-sidebar text-on-surface tracking-tighter">
                  Eduardo Ezponda
                </h1>
                <p className="text-title-md text-primary">
                  Data Scientist · Value Investor
                </p>
              </div>
              <div className="flex items-center gap-xs text-secondary text-body-md">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                <span>Madrid, Spain</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-md">
              <a
                href="https://github.com/eduezponda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-all flex items-center gap-xs"
              >
                <GithubIcon size={16} />
                <span className="text-label-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-ezponda-igea-104538230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-all flex items-center gap-xs"
              >
                <LinkedinIcon size={16} />
                <span className="text-label-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:eduardoezpondaigea@gmail.com"
                className="text-secondary hover:text-primary transition-all flex items-center gap-xs"
              >
                <Mail size={16} />
                <span className="text-label-sm">Email</span>
              </a>
            </div>

            {/* CV download */}
            <a
              href="/docs/CV_Eduardo_Ezponda_Igea.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-xl py-sm bg-surface-container-lowest border border-outline-variant text-on-surface text-title-md rounded hover:bg-surface-container-low transition-all flex items-center justify-center gap-xs"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </aside>

        {/* Right scrollable column */}
        <section className="md:col-span-7 lg:col-span-8 space-y-xl">
          {/* Bio */}
          <article className="space-y-md">
            <h2 className="text-title-lg border-b border-outline-variant pb-base w-fit">
              About
            </h2>
            <div className="space-y-sm text-secondary text-body-lg leading-relaxed max-w-2xl">
              <p>
                I&apos;m a Data Scientist at Management Solutions, building ML
                pipelines and scoring models for BBVA. I care about code that
                works in production, not just notebooks.
              </p>
              <p>
                I completed the{" "}
                <span className="text-on-surface font-semibold">
                  Zrive Applied Data Science
                </span>{" "}
                programme (6 end-to-end modules) and a collaborative churn
                prediction project with Komorebi. Outside of data science, I
                pursue{" "}
                <span className="text-on-surface font-semibold">
                  value investing
                </span>{" "}
                as a systematic research practice, combining financial analysis
                with the same rigour I apply to ML.
              </p>
            </div>
          </article>

          {/* Experience timeline */}
          <section className="space-y-md">
            <h2 className="text-title-lg border-b border-outline-variant pb-base w-fit">
              Experience
            </h2>
            <div className="relative border-l border-outline-variant ml-xs space-y-lg py-xs">
              {timeline.map((item, i) => (
                <div key={item.period + item.org} className="relative pl-lg group">
                  <div
                    className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border-4 border-surface transition-all ${
                      i === 0
                        ? "bg-primary ring-2 ring-outline-variant group-hover:ring-primary/50"
                        : "bg-outline group-hover:bg-primary"
                    }`}
                  />
                  <span
                    className={`text-label-sm uppercase tracking-widest ${
                      i === 0 ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item.period}
                  </span>
                  <h3 className="text-title-md text-on-surface">{item.role}</h3>
                  <p className="text-body-md text-secondary">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.org}
                    </a>
                    {" · "}{item.location}
                  </p>
                  <p className="text-body-md text-secondary mt-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-md">
            <h2 className="text-title-lg border-b border-outline-variant pb-base w-fit">
              Education
            </h2>
            <div className="relative border-l border-outline-variant ml-xs space-y-lg py-xs">
              {education.map((edu) => (
                <div key={edu.period + edu.org} className="relative pl-lg group">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border-4 border-surface bg-outline group-hover:bg-primary transition-all" />
                  <span className="text-label-sm uppercase tracking-widest text-secondary">
                    {edu.period}
                  </span>
                  <h3 className="text-title-md text-on-surface">{edu.degree}</h3>
                  <p className="text-body-md text-secondary">
                    {edu.org} · {edu.location}
                    {edu.gpa ? (
                      <span className="text-primary ml-xs">GPA {edu.gpa}</span>
                    ) : null}
                  </p>
                  <p className="text-body-md text-secondary mt-xs">
                    {edu.description}
                  </p>
                  {edu.highlights.length > 0 && (
                    <ul className="mt-sm space-y-xs">
                      {edu.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-xs text-body-md text-secondary"
                        >
                          <span className="text-primary mt-[3px] shrink-0">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-xs mt-sm">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-sm py-[2px] bg-surface-container text-secondary text-label-sm rounded border border-outline-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-md">
            <h2 className="text-title-lg border-b border-outline-variant pb-base w-fit">
              Skills &amp; Stack
            </h2>
            <div className="flex flex-wrap gap-xs">
              {Object.values(skills)
                .flat()
                .map((skill) => (
                  <span
                    key={skill}
                    className="px-md py-xs bg-surface-container-high text-on-surface text-label-sm rounded-full border border-outline-variant hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-md">
            <h2 className="text-title-lg border-b border-outline-variant pb-base w-fit">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-md bg-surface-container-lowest border border-outline-variant rounded hover:border-outline transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-sm">
                    <div className="h-8 flex items-center">
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        width={80}
                        height={32}
                        className="object-contain object-left max-h-8 w-auto"
                        unoptimized
                      />
                    </div>
                    <h4 className="text-title-md text-on-surface">{cert.name}</h4>
                    <p className="text-label-sm text-secondary">{cert.focus}</p>
                  </div>
                  <div className="flex items-center justify-between mt-md">
                    <span className="text-secondary text-label-sm uppercase tracking-wider">
                      {cert.date}
                    </span>
                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-[4px] text-primary text-label-sm hover:opacity-70 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          open_in_new
                        </span>
                        View
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
