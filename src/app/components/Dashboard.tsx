import React, { useState } from "react";
import { 
  Send, 
  Download, 
  Repeat, 
  Plus,
  ChevronRight,
  Activity,
  CreditCard
} from "lucide-react";
import { DashboardLayout } from "./DashboardLayout";
import { 
  AreaChart, 
  Area, 
  Tooltip, 
  ResponsiveContainer,
  XAxis
} from "recharts";
import { Logo, COLORS } from "./Brand";

const MOCK_DATA = [
  { name: '00:00', value: 42000 },
  { name: '04:00', value: 43500 },
  { name: '08:00', value: 41000 },
  { name: '12:00', value: 45000 },
  { name: '16:00', value: 44200 },
  { name: '20:00', value: 46800 },
  { name: '23:59', value: 46250 },
];

const TRANSACTIONS = [
  { id: '1', name: 'Global Node Reward', date: 'Dec 22, 14:20', amount: '+$240.50', status: 'Success', icon: <Activity size={18} /> },
  { id: '2', name: 'Smart Card Payment', date: 'Dec 22, 11:45', amount: '-$12.00', status: 'Success', icon: <CreditCard size={18} /> },
  { id: '3', name: 'Wallet Bridge', date: 'Dec 21, 18:30', amount: '+$5,000.00', status: 'Success', icon: <Download size={18} /> },
  { id: '4', name: 'Personal Transfer', date: 'Dec 21, 09:15', amount: '-$450.00', status: 'Success', icon: <Send size={18} /> },
];

export function Dashboard({ onLogout }: { onLogout: () => void }) {
  // onLogout prop is technically unused in this refactor as Layout handles it, but keeping signature for now or we can update App.tsx too.
  // Ideally, DashboardLayout handles logout.
  
  return (
    <DashboardLayout>
         {/* Global Stats */}
         <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 bg-white rounded-3xl p-10 border border-[#E5E7EB] shadow-sm relative overflow-hidden group">
               <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between h-full gap-8">
                  <div className="flex-1">
                     <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Total Net Equity</p>
                     <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">$46,250.00</h3>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-[#00FFCD] font-bold">
                           <Plus size={16} />
                           <span>$1,420.00</span>
                        </div>
                        <span className="text-neutral-400 text-sm font-medium">Profit Today</span>
                     </div>
                  </div>
                  
                  <div className="w-full md:w-[350px] h-40">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_DATA}>
                           <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#FF4500" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#FF4500" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
                           <Area type="monotone" dataKey="value" stroke="#FF4500" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Logo light className="scale-[3] origin-top-right" />
               </div>
            </div>

            <div className="bg-[#330C00] rounded-3xl p-10 text-white shadow-xl shadow-[#330C00]/10 flex flex-col justify-between">
               <div>
                  <h4 className="text-xl font-bold mb-2">Security Checklist</h4>
                  <p className="text-white/40 text-sm mb-8">Maintain your node integrity.</p>
                  
                  <div className="space-y-4">
                     <SecurityItem label="Email Verification" active />
                     <SecurityItem label="2FA Authentication" active />
                     <SecurityItem label="Identity KYC" active />
                     <SecurityItem label="Node Encryption" />
                  </div>
               </div>
               <button className="w-full mt-8 py-3 bg-[#FF4500] rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                  Complete Security
               </button>
            </div>
         </div>

         {/* Quick Actions Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <ActionCard icon={<Send size={24} />} label="Send Assets" color="bg-[#FFEE8F]" />
            <ActionCard icon={<Download size={24} />} label="Receive" color="bg-[#FBB1FF]" />
            <ActionCard icon={<Repeat size={24} />} label="Swap Nodes" color="bg-[#00FFCD]" />
            <ActionCard icon={<Plus size={24} />} label="Add Liquidity" color="bg-white border border-[#E5E7EB]" />
         </div>

         {/* Recent Ledger */}
         <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-[#E5E7EB] flex items-center justify-between">
               <h4 className="text-lg font-bold">Recent History</h4>
               <button className="text-sm font-bold text-[#FF4500] hover:underline flex items-center gap-2">View Global Ledger <ChevronRight size={16} /></button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full">
                  <thead>
                     <tr className="bg-neutral-50/50 text-left text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        <th className="px-8 py-4">Transaction</th>
                        <th className="px-8 py-4">Execution Time</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4 text-right">Volume</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB]">
                     {TRANSACTIONS.map((tx) => (
                        <tr key={tx.id} className="hover:bg-neutral-50/30 transition-colors">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div className="size-10 bg-neutral-100 rounded-xl flex items-center justify-center text-[#330C00]">{tx.icon}</div>
                                 <span className="font-bold text-sm">{tx.name}</span>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-sm font-medium text-neutral-400">{tx.date}</td>
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                 <div className="size-1.5 bg-[#00FFCD] rounded-full" />
                                 <span className="text-xs font-bold text-neutral-500">{tx.status}</span>
                              </div>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <span className={`font-bold ${tx.amount.startsWith('+') ? 'text-[#00FFCD]' : 'text-black'}`}>
                                 {tx.amount}
                              </span>
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

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
        active 
          ? 'bg-[#00FFCD] text-[#330C00] shadow-lg shadow-[#00FFCD]/10 scale-[1.02]' 
          : 'text-neutral-400 hover:text-black hover:bg-neutral-50'
      }`}
    >
      <div className={`${active ? 'scale-110' : ''} transition-transform`}>{icon}</div>
      <span className="font-bold tracking-tight">{label}</span>
      {active && <div className="ml-auto size-1.5 bg-[#330C00] rounded-full" />}
    </button>
  );
}

function ActionCard({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <div className={`${color} p-8 rounded-2xl flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer shadow-sm`}>
       <div className="size-12 bg-white/20 rounded-full flex items-center justify-center text-black/80">{icon}</div>
       <span className="font-bold text-sm text-center">{label}</span>
    </div>
  );
}

function SecurityItem({ label, active }: { label: string, active?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5">
       <span className="text-sm font-medium text-white/60">{label}</span>
       <div className={`size-4 rounded-full border-2 ${active ? 'bg-[#00FFCD] border-[#00FFCD]' : 'border-white/20'} flex items-center justify-center`}>
          {active && <div className="size-1.5 bg-[#330C00] rounded-full" />}
       </div>
    </div>
  );
}
