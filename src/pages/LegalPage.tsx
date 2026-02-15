import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Brand";
import {
  userAgreement,
  privacyPolicy,
  informationSecurity,
  cookiesLegal,
} from "../content/legalContent";

const LEGAL_SECTIONS = [
  { id: "user-agreement", title: "User Agreement", content: userAgreement },
  { id: "privacy-policy", title: "Privacy Policy", content: privacyPolicy },
  { id: "information-security", title: "Information Security", content: informationSecurity },
  { id: "cookies-legal", title: "Cookies & Legal Notices", content: cookiesLegal },
] as const;

export function LegalPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] font-['Onest',sans-serif] text-white selection:bg-[#990FFA] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-[#1A1A1A]/90 backdrop-blur-xl border-b border-neutral-800">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <Link
          to="/"
          className="text-sm font-bold tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">Legal</h1>
        <p className="text-neutral-400 mb-16">
          User Agreement, Privacy Policy, Information Security, and Cookies & Legal Notices.
        </p>

        <nav className="mb-16 flex flex-wrap gap-4">
          {LEGAL_SECTIONS.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {title}
            </a>
          ))}
        </nav>

        {LEGAL_SECTIONS.map(({ id, title, content }) => (
          <section key={id} id={id} className="scroll-mt-28 mb-20">
            <h2 className="text-2xl font-bold mb-6 text-neutral-300">{title}</h2>
            <div className="legal-content max-w-none text-neutral-300 leading-relaxed whitespace-pre-wrap">
              {content}
            </div>
          </section>
        ))}
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
        <Link to="/" className="hover:text-neutral-300 transition-colors">
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}
