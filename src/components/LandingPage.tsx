import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Logo } from "./Brand";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LandingPage({
  onGetStarted,
}: {
  onGetStarted?: () => void;
} = {}) {
  const handleGetStarted = () => onGetStarted?.();

  return (
    <div className="bg-black min-h-screen font-['Onest',sans-serif] text-white selection:bg-[#990FFA] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-black/90 backdrop-blur-xl border-b border-neutral-800">
        <Logo />
        <button
          onClick={handleGetStarted}
          className="bg-[#990FFA] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#880FE8] transition-all active:scale-95"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.0] mb-8">
          Spend your crypto. <br />
          <span className="text-[#990FFA]">No conversion.</span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-medium mb-12 leading-relaxed">
          Fund your card with crypto and spend it directly—globally, securely, and without converting to fiat. Flight Debit keeps you in control.
        </p>

        <button
          onClick={handleGetStarted}
          className="bg-[#990FFA] text-white px-10 py-4 rounded-lg text-lg font-bold flex items-center gap-4 hover:bg-[#880FE8] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#990FFA]/20"
        >
          Get Started
          <ArrowUpRight size={20} />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <p className="text-center text-2xl font-medium text-neutral-400 mb-20 italic">Built for trust and control.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-[40px] border border-neutral-800 bg-[#1A1A1A] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/5 via-transparent to-transparent pointer-events-none rounded-[40px]" />
            <div className="relative z-10">
              <FeatureItem
                title="Crypto-Powered Spending"
                desc="Fund your card with crypto. Spend it directly where you need it, without converting to fiat—keeping you in control of your assets."
              />
            </div>
          </div>
          <div className="rounded-[40px] border border-neutral-800 bg-[#1A1A1A] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/5 via-transparent to-transparent pointer-events-none rounded-[40px]" />
            <div className="relative z-10">
              <FeatureItem
                title="Security You Can Trust"
                desc="Bank-grade security and robust infrastructure. Your funds and data are protected with the same standards trusted by leading financial institutions."
              />
            </div>
          </div>
          <div className="rounded-[40px] border border-neutral-800 bg-[#1A1A1A] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/5 via-transparent to-transparent pointer-events-none rounded-[40px]" />
            <div className="relative z-10">
              <FeatureItem
                title="Full Control in One Place"
                desc="Manage limits, freeze your card, view transaction history, and update your PIN from a single dashboard—whenever you need to."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Control Section */}
      <section className="py-32 bg-black border-y border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your card. Your control.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <ControlCard
                color="bg-[#1A1A1A]"
                title="Limit management"
                desc="Set and adjust spending limits so you stay in control of how and where your card is used."
              />
              <ControlCard
                color="bg-[#1A1A1A]"
                title="Freeze your card"
                desc="Turn spending on or off in an instant. Freeze your card anytime from the dashboard for extra peace of mind."
              />
              <ControlCard
                color="bg-[#1A1A1A]"
                title="Transaction history"
                desc="See every transaction in one place. Full visibility over your spending and card activity."
              />
            </div>

            <div className="relative flex justify-center items-center min-h-[340px]">
              <div className="relative flex justify-center items-center gap-4 flex-wrap">
                <CardPreview
                  cardNumber="4921 8402 7152 3847"
                  className="rotate-[-8deg] hover:rotate-[-4deg] transition-transform"
                />
                <CardPreview
                  cardNumber="0287 7237 9272 1023"
                  className="z-10 scale-105 shadow-2xl hover:scale-110 transition-transform"
                />
                <CardPreview
                  cardNumber="5532 2192 1028 6612"
                  className="rotate-[8deg] hover:rotate-[4deg] transition-transform"
                />
              </div>
              <div className="absolute -z-10 top-1/2 -left-20 w-64 h-64 bg-[#990FFA]/20 blur-3xl rounded-full" />
              <div className="absolute -z-10 bottom-1/2 -right-20 w-64 h-64 bg-[#990FFA]/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-[40px] p-16 md:p-24 text-center text-white relative overflow-hidden border border-neutral-800 bg-[#1A1A1A]">
          {/* Subtle purple glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/5 via-transparent to-transparent pointer-events-none" />
          {/* Background logo – çapraz, soluk görünüm */}
          <div
            className="absolute top-16 right-0 p-12 flex items-center justify-center pointer-events-none opacity-20"
            aria-hidden
          >
            <Logo
              light
              className="scale-[4] md:scale-[5] origin-top-right rotate-12"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-2xl mx-auto leading-tight">
              Ready to spend your crypto <br /> with confidence?
            </h2>
            <button
              onClick={handleGetStarted}
              className="bg-[#990FFA] text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-[#880FE8] transition-all active:scale-95 shadow-lg shadow-[#990FFA]/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-16">
          <div>
            <Logo className="mb-8" />
            <p className="text-neutral-400 max-w-xs font-medium mb-8">
              Flight Debit by Ziyuno. A secure way to spend your crypto globally—deposit, manage, and pay with the assets you hold.
            </p>
          </div>
          <div className="md:shrink-0">
          <FooterCol
            title="Legal"
            links={[
              { label: "User Agreement", href: "/legal#user-agreement" },
              { label: "Privacy Policy", href: "/legal#privacy-policy" },
              { label: "Information Security", href: "/legal#information-security" },
              { label: "Cookies & Legal Notices", href: "/legal#cookies-legal" },
            ]}
          />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-neutral-500">© 2026 Flight Debit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="X">
              <XIcon size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CardPreview({ cardNumber, className = "" }: { cardNumber: string; className?: string }) {
  const lastFour = cardNumber.replace(/\s/g, "").slice(-4);
  const masked = `•••• •••• •••• ${lastFour}`;
  return (
    <div
      className={`relative w-[280px] h-[176px] rounded-2xl overflow-hidden shadow-xl ${className}`}
      style={{ backgroundColor: "#282C3F" }}
    >
      {/* Subtle circular pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-black/20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-black/15 translate-y-1/2 translate-x-1/3" />

      <div className="relative p-5 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          {/* Chip / logo placeholder */}
          <div className="w-10 h-10 rounded-lg bg-white/10" />
          <span className="bg-[#22C55E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            ACTIVE
          </span>
        </div>

        <p className="text-white font-mono text-base tracking-[0.2em]">{masked}</p>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-neutral-400 text-[10px] uppercase tracking-wider mb-0.5">EXPIRES</p>
            <p className="text-white font-medium text-sm">05/2030</p>
          </div>
          <div className="text-right">
            <p className="text-neutral-400 text-[10px] uppercase tracking-wider mb-0.5">CVV</p>
            <p className="text-white font-medium text-sm">•••</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-lg text-neutral-400 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ControlCard({ color, title, desc }: { color: string; title: string; desc: string }) {
  return (
    <div className={`${color} p-12 rounded-xl flex flex-col gap-6 hover:scale-[1.02] transition-transform cursor-pointer border border-neutral-700/50`}>
      <h4 className="text-4xl font-bold tracking-tight text-white">{title}</h4>
      <p className="text-2xl font-medium text-neutral-300">{desc}</p>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href?: string }>;
}) {
  return (
    <div className="space-y-8">
      <h5 className="font-bold text-lg tracking-tight text-white">{title}</h5>
      <div className="flex flex-col gap-4">
        {links.map((link) =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-400 hover:text-[#990FFA] transition-colors text-left font-medium"
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.label}
              className="text-neutral-400 hover:text-[#990FFA] transition-colors text-left font-medium"
            >
              {link.label}
            </button>
          )
        )}
      </div>
    </div>
  );
}
