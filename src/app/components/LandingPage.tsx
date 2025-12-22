import React from "react";
import { ArrowUpRight, ShieldCheck, Zap, Globe, Plus, ChevronRight, Menu, X, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { Logo, COLORS } from "./Brand";

export function LandingPage({ onGetStarted, onAdminAccess }: { onGetStarted: () => void; onAdminAccess: () => void }) {
  return (
    <div className="bg-white min-h-screen font-['Onest',sans-serif] text-black selection:bg-[#ED723D] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-white/80 backdrop-blur-xl border-b border-neutral-100">
        <Logo light />
        <div className="hidden md:flex items-center gap-12">
          <button className="text-sm font-bold tracking-widest text-black/60 hover:text-black transition-colors">PRODUCTS</button>
          <button className="text-sm font-bold tracking-widest text-black/60 hover:text-black transition-colors">SOLUTIONS</button>
          <button className="text-sm font-bold tracking-widest text-black/60 hover:text-black transition-colors">COMPANY</button>
          <button 
            onClick={onAdminAccess}
            className="text-sm font-bold tracking-widest text-[#ED723D] hover:text-black transition-colors"
          >
            TERMINAL
          </button>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-[#ED723D] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.0] mb-8">
          Financial Velocity <br />
          <span className="text-[#ED723D]">at New Altitudes</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black/60 max-w-3xl font-medium mb-12 leading-relaxed">
          Experience seamless financial movement with engineering clarity. 
          Accelerate your global transactions with the power of Flight.
        </p>

        <button 
          onClick={onGetStarted}
          className="bg-gradient-to-r from-[#E72A19] via-[#DD5A22] to-[#ED723D] text-white px-10 py-4 rounded-lg text-lg font-bold flex items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-[#ED723D]/20 active:scale-95"
        >
          Get Started
          <ArrowUpRight size={20} />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
         <p className="text-center text-2xl font-medium text-black/60 mb-20 italic">Engineered for Stability.</p>
         <div className="grid md:grid-cols-3 gap-16">
            <FeatureItem 
              title="Kinetic Transactions"
              desc="Saturated with speed. Settlements that happen in real-time, matching your business tempo."
            />
            <FeatureItem 
              title="Disciplined Security"
              desc="Precise contours and stable systems. Bank-grade security with engineering clarity."
            />
            <FeatureItem 
              title="Horizon Crossing"
              desc="Turning distance into proximity. Connect across time zones without friction."
            />
         </div>
      </section>

      {/* Control Section */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
         <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Total Control. Zero Friction.</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-6">
                  <ControlCard 
                    color="bg-[#FFEE8F]"
                    title="Digital Asset Management:"
                    desc="A shared stage for collaborative movement."
                  />
                  <ControlCard 
                    color="bg-[#FBB1FF]"
                    title="Smart Cards:"
                    desc="Manage limits and freeze cards instantly."
                  />
                  <ControlCard 
                    color="bg-[#00FFCD]"
                    title="Fluid Transfers:"
                    desc="Send crypto and fiat with a single tap."
                  />
               </div>
               
               <div className="relative flex justify-center">
                  <div className="w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-[#1a1a1a] overflow-hidden shadow-2xl relative">
                     <div className="absolute top-0 w-full h-6 bg-black z-10" />
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />
                     <img 
                       src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=300&auto=format&fit=crop" 
                       alt="App Preview" 
                       className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                        <div className="size-12 bg-[#ED723D] rounded-xl flex items-center justify-center font-bold text-white mb-4">F</div>
                        <p className="text-white font-bold text-xl mb-1">Welcome to Flight</p>
                        <p className="text-white/50 text-xs">Awaiting authorization...</p>
                     </div>
                  </div>
                  {/* Decorative blobs */}
                  <div className="absolute -z-10 top-1/2 -left-20 w-64 h-64 bg-[#ED723D]/10 blur-3xl rounded-full" />
                  <div className="absolute -z-10 bottom-1/2 -right-20 w-64 h-64 bg-[#00FFCD]/10 blur-3xl rounded-full" />
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-8">
         <div className="max-w-7xl mx-auto bg-[#ED723D] rounded-[40px] p-16 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold mb-12">Join the ecosystem that vibrates with <br /> contagious power.</h2>
               <button 
                  onClick={onGetStarted}
                  className="bg-white text-black px-12 py-5 rounded-lg text-xl font-bold hover:bg-neutral-100 transition-all active:scale-95 shadow-lg"
               >
                  Get Started
               </button>
            </div>
            {/* Background design */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Logo className="scale-[5] origin-top-right rotate-12" />
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-neutral-100">
         <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
               <Logo light className="mb-8" />
               <p className="text-black/40 max-w-xs font-medium mb-8">
                  The infrastructure for the next generation of global capital movement. 
                  Engineered with precision.
               </p>
               <div className="flex items-center gap-2 text-black/60 font-medium">
                  <Mail size={16} />
                  <span>info@nodely.pro</span>
               </div>
            </div>
            <FooterCol title="Platform" links={["Personal", "Business", "Enterprise"]} />
            <FooterCol title="Company" links={["About", "Careers", "Contact"]} />
         </div>
         <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium text-black/40">© 2025 Flight Ecosystem. All rights reserved.</p>
            <div className="flex items-center gap-6">
               <button className="text-neutral-400 hover:text-black transition-colors"><Twitter size={20} /></button>
               <button className="text-neutral-400 hover:text-black transition-colors"><Linkedin size={20} /></button>
               <button className="text-neutral-400 hover:text-black transition-colors"><Youtube size={20} /></button>
            </div>
         </div>
      </footer>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center md:text-left">
       <h3 className="text-2xl font-bold mb-4">{title}</h3>
       <p className="text-lg text-black/60 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ControlCard({ color, title, desc }: { color: string; title: string; desc: string }) {
  return (
    <div className={`${color} p-12 rounded-xl flex flex-col gap-6 hover:scale-[1.02] transition-transform cursor-pointer`}>
       <h4 className="text-4xl font-bold tracking-tight">{title}</h4>
       <p className="text-2xl font-medium opacity-80">{desc}</p>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-8">
       <h5 className="font-bold text-lg tracking-tight">{title}</h5>
       <div className="flex flex-col gap-4">
          {links.map(link => (
            <button key={link} className="text-black/60 hover:text-[#ED723D] transition-colors text-left font-medium">{link}</button>
          ))}
       </div>
    </div>
  );
}
