import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Logo } from "./Brand";
import chipImg from "../assets/chip.png";

const FAQ_ITEMS = [
  {
    id: "01",
    question: "How does the card program work?",
    answer: "Flight Cards let you spend crypto-funded balances instantly with any merchant that accepts VISA, either online or in-person. You can use them to pay, tap, or withdraw cash—making your crypto instantly spendable worldwide.",
    steps: null as string[] | null,
  },
  {
    id: "02",
    question: "How do I order a Flight Card?",
    answer: "You can get started in just 3 simple steps.",
    steps: [
      "Sign up, verify your email, and complete KYC.",
      "Once your KYC is approved, order your card. Cards are shipped to your address. You can activate your physical card directly from your dashboard upon delivery.",
      "Deposit USDT/USDC on BNB Chain into your dashboard wallet and top up your card. Your balance is converted to FIAT instantly and ready to spend.",
    ],
  },
  {
    id: "03",
    question: "Which cryptocurrencies are supported?",
    answer: "You can deposit USDT/USDC on BNB Chain into your account and top up your card directly.",
    steps: null as string[] | null,
  },
];

export function LandingPage({
  onGetStarted,
}: {
  onGetStarted?: () => void;
} = {}) {
  const handleGetStarted = () => onGetStarted?.();
  const [faqIndex, setFaqIndex] = useState(0);

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
                desc="Freeze your card, view transaction history, and update your PIN from a single dashboard—whenever you need to."
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
                title="USDT/USDC on BNB"
                desc="We bridge the gap between cryptocurrency and traditional payments, allowing you to spend your USDT/USDC anywhere VISA is accepted worldwide."
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

      {/* Call to Action – fintech / neon */}
      <section className="py-32 px-8 relative">
        {/* Section arka plan: hafif mor mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#990FFA]/10 blur-[120px] rounded-full" />
        </div>

        <div
          className="max-w-7xl mx-auto rounded-[40px] p-16 md:p-24 text-center text-white relative overflow-hidden
            bg-gradient-to-b from-[#1A1A2E] to-[#12121A]
            border border-[#990FFA]/30
            shadow-[0_0_60px_-12px_rgba(153,15,250,0.35),inset_0_1px_0_0_rgba(255,255,255,0.05)]
            md:transition-all md:duration-300 md:hover:border-[#990FFA]/50 md:hover:shadow-[0_0_80px_-12px_rgba(153,15,250,0.45),inset_0_1px_0_0_rgba(255,255,255,0.08)] md:hover:scale-[1.01]"
        >
          {/* Neon gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/15 via-[#990FFA]/5 to-transparent pointer-events-none rounded-[40px]" />
          {/* Hafif grid doku (isteğe bağlı) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[40px]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          {/* Background logo */}
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
              className="bg-[#990FFA] text-white px-12 py-5 rounded-xl text-xl font-bold
                transition-all duration-300 active:scale-95
                shadow-[0_0_30px_-5px_rgba(153,15,250,0.5)]
                md:hover:bg-[#a83aff] md:hover:shadow-[0_0_40px_-5px_rgba(153,15,250,0.6)] md:hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FAQ – Slider */}
      <section className="py-24 px-8 border-t border-neutral-800 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">FAQ</h2>
          </div>

          <div className="relative">
            {/* Slider container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${faqIndex * 100}%)` }}
              >
                {FAQ_ITEMS.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-1 flex justify-center">
                    <div className="w-full max-w-2xl rounded-2xl border border-neutral-800 bg-[#1A1A1A] p-8 md:p-10 relative overflow-hidden hover:border-neutral-700 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#990FFA]/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
                      <div className="relative">
                        <span className="text-[#990FFA] text-xs font-semibold tracking-widest uppercase">{item.id}</span>
                        <h3 className="text-xl font-bold text-white mt-2 mb-4">{item.question}</h3>
                        <p className="text-neutral-400 leading-relaxed text-[15px] mb-5">{item.answer}</p>
                        {item.steps && (
                          <ol className="space-y-4 list-none">
                            {item.steps.map((step, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#990FFA]/20 text-[#990FFA] text-xs font-bold flex items-center justify-center">
                                  {i + 1}
                                </span>
                                <span className="text-neutral-400 leading-relaxed text-[15px]">{step}</span>
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                type="button"
                onClick={() => setFaqIndex((i) => (i === 0 ? FAQ_ITEMS.length - 1 : i - 1))}
                className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                aria-label="Previous question"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {FAQ_ITEMS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFaqIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === faqIndex ? "w-8 bg-[#990FFA]" : "w-2 bg-neutral-600 hover:bg-neutral-500"
                      }`}
                    aria-label={`Go to question ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setFaqIndex((i) => (i === FAQ_ITEMS.length - 1 ? 0 : i + 1))}
                className="p-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                aria-label="Next question"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer – px-6 ile yatay boşluk, içerik ortada */}
      <footer className="relative z-0 border-t border-white/10 bg-black px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2 flex flex-col items-start">
              <a className="inline-block mb-6" href="/">
                <Logo className="h-9 w-auto object-contain" />
              </a>
              <p className="text-base text-gray-400 leading-relaxed mb-6">
                A secure way to spend your crypto globally—deposit, manage, and pay with the assets you hold.              </p>
            </div>
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
              <nav className="flex flex-col gap-4">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Media Kit
                </a>
              </nav>
            </div>
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:support@flightdebit.com" className="text-base text-gray-400 transition-colors duration-300 hover:text-white">
                support@flightdebit.com
                </a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
              <nav className="flex flex-col gap-4">
                <a className="text-base text-gray-400 transition-colors duration-300 hover:text-white" href="/legal#cookies-legal">
                  Cookies and Legal Notice
                </a>
                <a className="text-base text-gray-400 transition-colors duration-300 hover:text-white" href="/legal#information-security">
                  Information Security
                </a>
                <a className="text-base text-gray-400 transition-colors duration-300 hover:text-white" href="/legal#privacy-policy">
                  Privacy Policy
                </a>
                <a className="text-base text-gray-400 transition-colors duration-300 hover:text-white" href="/legal#user-agreement">
                  User Agreement
                </a>
              </nav>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-gray-500">© 2026 Flight Debit. All rights reserved.</p>
            </div>
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
          {/* Chip */}
          <img src={chipImg} alt="" className="w-10 h-10 rounded-lg object-cover" />
          <Logo className="h-[25px] w-auto" />
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
    <div className="space-y-6">
      <h5 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">{title}</h5>
      <nav className="flex flex-col gap-3">
        {links.map((link) =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.label}
              className="text-sm text-neutral-400 hover:text-white transition-colors text-left"
            >
              {link.label}
            </button>
          )
        )}
      </nav>
    </div>
  );
}
