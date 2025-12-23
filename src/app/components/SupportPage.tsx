import React, { useState } from "react";
import { DashboardLayout } from "./DashboardLayout";
import { MessageSquare, ChevronDown, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export function SupportPage() {
  return (
    <DashboardLayout headerTitle="Help & Support">
      <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
         {/* FAQ Section */}
         <div className="lg:col-span-2 space-y-8">
            <div>
               <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
               <div className="space-y-4">
                  <FAQItem 
                     question="How long does KYC verification take?" 
                     answer="Typically, verification is completed within 24-48 hours. Ensure your documents are clear to avoid delays." 
                  />
                  <FAQItem 
                     question="What are the deposit fees?" 
                     answer="We charge zero fees for crypto deposits. Fiat wire transfers may incur bank charges." 
                  />
                  <FAQItem 
                     question="Can I change my registered email?" 
                     answer="For security reasons, email changes require a manual review ticket submission." 
                  />
                  <FAQItem 
                     question="How do node rewards work?" 
                     answer="Node rewards are distributed daily at 00:00 UTC based on your active uptime contribution." 
                  />
               </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-sm">
               <h3 className="text-xl font-bold mb-6">Send us a message</h3>
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toast.success("Message sent to support team!"); }}>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Subject</label>
                        <select className="w-full h-12 rounded-xl border border-neutral-200 px-4 font-medium bg-white focus:outline-none focus:border-[#FF4500] transition-colors">
                           <option>General Inquiry</option>
                           <option>Technical Issue</option>
                           <option>Billing / Payments</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Priority</label>
                        <select className="w-full h-12 rounded-xl border border-neutral-200 px-4 font-medium bg-white focus:outline-none focus:border-[#FF4500] transition-colors">
                           <option>Normal</option>
                           <option>High</option>
                           <option>Critical</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Message</label>
                     <textarea 
                        className="w-full h-32 rounded-xl border border-neutral-200 p-4 font-medium placeholder:text-neutral-300 focus:outline-none focus:border-[#FF4500] transition-colors resize-none"
                        placeholder="Describe your issue in detail..."
                     ></textarea>
                  </div>
                  <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:opacity-80 transition-opacity w-full md:w-auto">
                     Submit Ticket
                  </button>
               </form>
            </div>
         </div>

         {/* Contact Info Sidebar */}
         <div className="space-y-6">
            <div className="bg-[#FF4500] rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Need urgent help?</h4>
                  <p className="text-white/80 text-sm mb-6">Our priority support team is available 24/7 for premium members.</p>
                  <button className="bg-white text-[#FF4500] px-6 py-3 rounded-xl font-bold w-full hover:bg-neutral-50 transition-colors">
                     Live Chat
                  </button>
               </div>
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare size={120} />
               </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB]">
               <h4 className="font-bold mb-6">Contact Information</h4>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="size-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500">
                        <Mail size={18} />
                     </div>
                     <div>
                        <p className="text-xs text-neutral-400 font-bold uppercase">Email</p>
                        <p className="font-bold text-sm">support@flight.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="size-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500">
                        <Phone size={18} />
                     </div>
                     <div>
                        <p className="text-xs text-neutral-400 font-bold uppercase">Phone</p>
                        <p className="font-bold text-sm">+1 (555) 012-3400</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
         <div className="p-6 flex items-center justify-between">
            <h5 className="font-bold text-sm">{question}</h5>
            <ChevronDown size={20} className={`text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
         </div>
         {isOpen && (
            <div className="px-6 pb-6 text-sm text-neutral-500 animate-in fade-in slide-in-from-top-2">
               {answer}
            </div>
         )}
      </div>
   );
}
