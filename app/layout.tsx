import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduardo Ezponda",
  description:
    "Data Scientist and value investor. Portfolio of projects in ML, DS, and value investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <Nav />
        <div className="flex-1">{children}</div>
        <footer className="bg-surface border-t border-outline-variant mt-xl">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-lg max-w-7xl mx-auto gap-md">
            <div className="text-title-md text-on-surface">Eduardo Ezponda</div>
            <div className="text-body-md text-secondary text-center">
              © 2025 Eduardo Ezponda. Built with precision.
            </div>
            <div className="flex items-center gap-lg">
              <a
                href="https://github.com/eduezponda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors text-body-md"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-ezponda-igea-104538230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors text-body-md"
              >
                LinkedIn
              </a>
              <a
                href="mailto:eduardoezpondaigea@gmail.com"
                className="text-secondary hover:text-primary transition-colors text-body-md"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
