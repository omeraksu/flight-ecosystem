import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  Search, 
  Filter, 
  Download 
} from "lucide-react";

const HISTORY_DATA = [
  { id: 'TX-99382', type: 'Deposit', asset: 'USDC', amount: '+5,000.00', status: 'Completed', date: 'Dec 22, 2024 at 14:20' },
  { id: 'TX-99381', type: 'Withdrawal', asset: 'ETH', amount: '-1.45', status: 'Completed', date: 'Dec 21, 2024 at 09:15' },
  { id: 'TX-99380', type: 'Reward', asset: 'FLT', amount: '+240.50', status: 'Completed', date: 'Dec 20, 2024 at 18:30' },
  { id: 'TX-99379', type: 'Deposit', asset: 'USDC', amount: '+10,000.00', status: 'Completed', date: 'Dec 19, 2024 at 11:45' },
  { id: 'TX-99378', type: 'Withdrawal', asset: 'USDC', amount: '-450.00', status: 'Pending', date: 'Dec 18, 2024 at 16:20' },
  { id: 'TX-99377', type: 'Deposit', asset: 'BTC', amount: '+0.054', status: 'Completed', date: 'Dec 18, 2024 at 10:00' },
];

export function DepositHistoryPage() {
  return (
    <DashboardLayout headerTitle="Transaction History">
       {/* Filters */}
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
             <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
             <input 
                type="text" 
                placeholder="Search transaction ID or asset..." 
                className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#FF4500] transition-colors"
             />
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm font-bold text-neutral-600 hover:bg-neutral-50 transition-colors">
                <Filter size={18} />
                Filters
             </button>
             <button className="flex items-center gap-2 px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm font-bold text-neutral-600 hover:bg-neutral-50 transition-colors">
                <Download size={18} />
                Export CSV
             </button>
          </div>
       </div>

       {/* Table */}
       <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
             <table className="w-full">
                <thead>
                   <tr className="bg-neutral-50/50 text-left text-[10px] font-bold text-neutral-400 uppercase tracking-widest border-b border-[#E5E7EB]">
                      <th className="px-8 py-4">Transaction ID</th>
                      <th className="px-8 py-4">Type</th>
                      <th className="px-8 py-4">Asset</th>
                      <th className="px-8 py-4">Amount</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4 text-right">Status</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                   {HISTORY_DATA.map((tx) => (
                      <tr key={tx.id} className="hover:bg-neutral-50/30 transition-colors">
                         <td className="px-8 py-6 font-mono text-xs text-neutral-500">{tx.id}</td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                               <div className={`size-8 rounded-full flex items-center justify-center ${
                                  tx.type === 'Deposit' || tx.type === 'Reward' 
                                    ? 'bg-[#00FFCD]/20 text-[#008f72]' 
                                    : 'bg-neutral-100 text-neutral-500'
                               }`}>
                                  {tx.type === 'Deposit' || tx.type === 'Reward' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                               </div>
                               <span className="font-bold text-sm">{tx.type}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 font-bold text-sm">{tx.asset}</td>
                         <td className="px-8 py-6 font-bold text-sm">
                            <span className={tx.amount.startsWith('+') ? 'text-[#00BFA5]' : 'text-neutral-900'}>
                               {tx.amount}
                            </span>
                         </td>
                         <td className="px-8 py-6 text-sm text-neutral-500">{tx.date}</td>
                         <td className="px-8 py-6 text-right">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                               tx.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                            }`}>
                               {tx.status}
                            </span>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-[#E5E7EB] flex items-center justify-between text-sm text-neutral-500">
             <span>Showing 1-6 of 24 transactions</span>
             <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-neutral-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg hover:bg-neutral-50">Next</button>
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
}
