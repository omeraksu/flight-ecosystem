import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Gift, Copy, Users, Share2, Mail } from "lucide-react";
import { toast } from "sonner";

export function ReferralPage() {
  const referralCode = "ALEX-992-FLIGHT";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Referral code copied to clipboard!");
  };

  return (
    <DashboardLayout headerTitle="Referral Program">
       <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Card */}
          <div className="lg:col-span-2 bg-[#00FFCD] rounded-3xl p-10 relative overflow-hidden text-[#330C00]">
             <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-6">
                   <Gift size={14} />
                   <span>EARN 50 USDC PER INVITE</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">
                   Invite friends,<br/>earn crypto together.
                </h3>
                <p className="font-medium opacity-80 mb-8 max-w-sm">
                   Share your unique link. When your friends verify their identity and node status, you both get rewarded.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                   <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center justify-between border border-[#330C00]/10">
                      <span className="font-mono font-bold tracking-widest">{referralCode}</span>
                      <button onClick={handleCopy} className="p-2 hover:bg-[#330C00]/5 rounded-lg transition-colors">
                         <Copy size={18} />
                      </button>
                   </div>
                   <button className="bg-[#330C00] text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <Share2 size={18} />
                      Share Link
                   </button>
                </div>
             </div>
             
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 origin-center translate-x-12 -translate-y-4">
                <Gift size={300} />
             </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB] flex flex-col justify-center">
             <div className="text-center mb-8">
                <div className="size-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                   <Users size={32} />
                </div>
                <h4 className="text-3xl font-bold tracking-tight mb-2">12</h4>
                <p className="text-neutral-400 font-medium text-sm">Friends Invited</p>
             </div>
             <div className="bg-neutral-50 rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-sm font-bold text-neutral-500">Total Earned</span>
                </div>
                <h3 className="text-2xl font-bold text-[#FF4500]">$600.00 USDC</h3>
             </div>
          </div>
       </div>

       {/* Check Invites */}
       <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden">
          <div className="p-8 border-b border-[#E5E7EB]">
             <h4 className="font-bold text-lg">Your Invites</h4>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full">
                <thead>
                   <tr className="bg-neutral-50/50 text-left text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      <th className="px-8 py-4">User</th>
                      <th className="px-8 py-4">Date Invited</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4 text-right">Reward</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                   {[
                      { email: "m***@gmail.com", date: "Dec 20, 2024", status: "Verified", reward: "$50.00" },
                      { email: "j***@proton.me", date: "Dec 18, 2024", status: "Pending KYC", reward: "$0.00" },
                      { email: "s***@icloud.com", date: "Dec 15, 2024", status: "Verified", reward: "$50.00" },
                   ].map((invite, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/30 transition-colors">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                               <div className="size-8 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400">
                                  <Mail size={14} />
                               </div>
                               <span className="font-bold text-sm">{invite.email}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-sm text-neutral-500">{invite.date}</td>
                         <td className="px-8 py-6">
                            <span className={`text-xs font-bold px-2 py-1 rounded ${
                               invite.status === 'Verified' ? 'bg-[#00FFCD]/20 text-[#008f72]' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                               {invite.status.toUpperCase()}
                            </span>
                         </td>
                         <td className="px-8 py-6 text-right font-bold">
                            {invite.reward}
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </DashboardLayout>
  );
}
