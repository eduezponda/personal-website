import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24 md:py-32">
        {/* Label */}
        <p className="text-label text-accent mb-6">Data Science · Value Investing</p>

        {/* Headline */}
        <h1 className="text-display text-on-surface max-w-3xl mb-6">
          Eduardo<br />Ezponda
        </h1>

        {/* Bio */}
        <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Data Scientist at Management Solutions. I build ML models, design APIs,
          and think carefully about businesses worth owning.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-surface font-medium text-sm hover:bg-accent-muted transition-colors"
          >
            View projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-outline-variant text-on-surface-variant text-sm hover:border-outline hover:text-on-surface transition-colors"
          >
            Read the blog
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/eduezponda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-ezponda-igea-104538230/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:eduardoezpondaigea@gmail.com"
            aria-label="Email"
            className="text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
