"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-surface/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-7xl mx-auto h-16">
        <Link
          href="/"
          className="text-title-lg font-bold text-on-surface tracking-tight hover:text-primary transition-colors"
        >
          Eduardo Ezponda
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-lg">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-title-md transition-colors ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:eduardoezpondaigea@gmail.com"
            className="bg-primary-container text-on-primary-container px-md py-xs rounded-lg text-title-md hover:opacity-90 transition-all active:scale-95"
          >
            Contact
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-outline-variant bg-surface-container-low px-margin-desktop py-sm">
          <div className="flex flex-col gap-sm">
            {links.map(({ href, label }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-title-md transition-colors ${
                    active
                      ? "text-primary font-bold"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="mailto:eduardoezpondaigea@gmail.com"
              className="bg-primary-container text-on-primary-container px-md py-xs rounded-lg text-title-md text-center hover:opacity-90 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
