import React, { useState } from "react";
import { 
  LayoutDashboard, 
  RefreshCw, 
  Wallet, 
  CreditCard, 
  History, 
  Users, 
  ShieldAlert, 
  Search, 
  Bell, 
  Settings, 
  LogOut,
  ChevronRight,
  MoreVertical,
  Activity,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Filter
} from "lucide-react";
import { Logo, COLORS } from "./Brand";
import { 
  AreaChart, 
  Area, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from "recharts";

// Mock User Movements Data
const USER_MOVEMENTS = [
  { id: 'M-1', user: 'Alex Thompson', action: 'KYC_SUBMITTED', time: '2025-12-22 14:30:11', location: 'London, UK', risk: 'LOW' },
  { id: 'M-2', user: 'Sarah Chen', action: 'LARGE_WITHDRAWAL', time: '2025-12-22 14:28:05', location: 'Singapore', risk: 'MEDIUM' },
  { id: 'M-3', user: 'Michael Rod', action: 'LOGIN_ATTEMPT', time: '2025-12-22 14:25:44', location: 'New York, US', risk: 'LOW' },
  { id: 'M-4', user: 'Julian Casablancas', action: 'PASSWORD_CHANGE', time: '2025-12-22 14:22:19', location: 'Berlin, DE', risk: 'HIGH' },
  { id: 'M-5', user: 'Fab Moretti', action: 'CARD_FREEZE', time: '2025-12-22 14:18:00', location: 'Paris, FR', risk: 'LOW' },
  { id: 'M-6', user: 'Albert Hammond', action: 'NODE_CONNECTION', time: '2025-12-22 14:15:12', location: 'Tokyo, JP', risk: 'LOW' },
];

const ANALYTICS_DATA = [
  { name: 'Mon', active: 420, tx: 240 },
  { name: 'Tue', active: 580, tx: 310 },
  { name: 'Wed', active: 510, tx: 280 },
  { name: 'Thu', active: 690, tx: 450 },
  { name: 'Fri', active: 720, tx: 520 },
  { name: 'Sat', active: 610, tx: 380 },
  { name: 'Sun', active: 450, tx: 210 },
];

export function AdminDashboard({ onExit }: { onExit: () => void }) {
  const [activeTab, setActiveTab] = useState('movements');

  return (
    <div className="flex min-h-screen bg-[#F5F5F5] font-['Onest',sans-serif] text-black">
      {/* Admin Sidebar */}
      <aside className="w-72 bg-[#330C00] flex flex-col fixed h-full z-20">
        <div className="p-8 border-b border-white/5">
          <Logo />
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40 mt-4 uppercase">Admin Terminal v4.2</p>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
          <AdminSidebarItem 
            icon={<Activity size={20} />} 
            label="Live Movements" 
            active={activeTab === 'movements'} 
            onClick={() => setActiveTab('movements')} 
          />
          <AdminSidebarItem 
            icon={<Users size={20} />} 
            label="User Directory" 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')} 
          />
          <AdminSidebarItem 
            icon={<ShieldAlert size={20} />} 
            label="Risk Alerts" 
            active={activeTab === 'risk'} 
            onClick={() => setActiveTab('risk')} 
          />
          <AdminSidebarItem 
            icon={<History size={20} />} 
            label="Global Ledger" 
            active={activeTab === 'ledger'} 
            onClick={() => setActiveTab('ledger')} 
          />
          <AdminSidebarItem 
            icon={<Globe size={20} />} 
            label="Node Map" 
            active={activeTab === 'nodes'} 
            onClick={() => setActiveTab('nodes')} 
          />
        </nav>

        <div className="p-8 border-t border-white/5">
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-all rounded-xl"
          >
            <LogOut size={20} />
            <span className="font-bold">Exit Terminal</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12">
        <header className="flex items-center justify-between mb-12">
           <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">User Movement Tracking</h2>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <div className="size-2 bg-[#00FFCD] rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-neutral-400">System Monitoring Active</span>
                 </div>
                 <span className="text-xs font-bold text-neutral-300">|</span>
                 <span className="text-xs font-bold text-neutral-400 font-mono">UTC: {new Date().toISOString()}</span>
              </div>
           </div>

           <div className="flex items-center gap-4">
              <button className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors relative">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 size-2 bg-[#ED723D] rounded-full border-2 border-white" />
              </button>
              <div className="flex items-center gap-4 pl-4 border-l border-neutral-200">
                 <div className="text-right">
                    <p className="text-sm font-bold">Admin Root</p>
                    <p className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">Superuser</p>
                 </div>
                 <div className="size-10 bg-[#ED723D] rounded-full flex items-center justify-center font-bold text-white">R</div>
              </div>
           </div>
        </header>

        {/* Global Analytics Preview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
           <AdminStatCard label="Total Active Users" value="12,402" change="+14.2%" up />
           <AdminStatCard label="New Signups (24h)" value="842" change="+8.1%" up />
           <AdminStatCard label="Failed Login Ops" value="21" change="-2.4%" />
           <AdminStatCard label="Total Vol Flows" value="$1.2M" change="+5.4%" up />
        </div>

        {/* Live Tracking Table */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden mb-12">
           <div className="p-8 border-b border-neutral-100 flex items-center justify-between">
              <div>
                 <h3 className="text-xl font-bold mb-1 tracking-tight">Real-Time Activity Stream</h3>
                 <p className="text-sm text-neutral-400 font-medium">Tracking all user events across global nodes.</p>
              </div>
              <div className="flex gap-3">
                 <button className="px-5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-neutral-100 transition-all">
                    <Filter size={16} />
                    Parameters
                 </button>
                 <button className="px-5 py-2.5 bg-[#ED723D] text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all shadow-lg shadow-[#ED723D]/20">
                    Export Audit Log
                 </button>
              </div>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="bg-neutral-50/50 text-left text-[10px] font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-100">
                       <th className="px-8 py-5">Event ID</th>
                       <th className="px-8 py-5">User Participant</th>
                       <th className="px-8 py-5">Activity Action</th>
                       <th className="px-8 py-5">Time Index</th>
                       <th className="px-8 py-5">Origin Node</th>
                       <th className="px-8 py-5">Risk Matrix</th>
                       <th className="px-8 py-5"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-neutral-100">
                    {USER_MOVEMENTS.map((m) => (
                       <tr key={m.id} className="hover:bg-neutral-50/50 transition-colors group">
                          <td className="px-8 py-5 font-mono text-xs text-neutral-400">{m.id}</td>
                          <td className="px-8 py-5">
                             <div className="flex items-center gap-3">
                                <div className="size-8 bg-neutral-100 rounded-lg flex items-center justify-center font-bold text-neutral-400 text-[10px]">{m.user.split(' ').map(n => n[0]).join('')}</div>
                                <span className="text-sm font-bold">{m.user}</span>
                             </div>
                          </td>
                          <td className="px-8 py-5">
                             <span className="text-xs font-bold text-neutral-600 px-3 py-1 bg-neutral-100 rounded-md tracking-tight uppercase">{m.action.replace('_', ' ')}</span>
                          </td>
                          <td className="px-8 py-5 text-xs font-medium text-neutral-400">{m.time}</td>
                          <td className="px-8 py-5">
                             <div className="flex items-center gap-2 text-xs font-bold">
                                <Globe size={14} className="text-neutral-300" />
                                {m.location}
                             </div>
                          </td>
                          <td className="px-8 py-5">
                             <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                                m.risk === 'HIGH' ? 'bg-[#E72A19]/5 text-[#E72A19] border-[#E72A19]/20 shadow-[0_0_8px_rgba(231,42,25,0.1)]' :
                                m.risk === 'MEDIUM' ? 'bg-[#ED723D]/5 text-[#ED723D] border-[#ED723D]/20' :
                                'bg-[#00FFCD]/5 text-[#00FFCD] border-[#00FFCD]/20'
                             }`}>
                                {m.risk} RISK
                             </span>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <button className="text-neutral-300 hover:text-black transition-colors">
                                <MoreVertical size={18} />
                             </button>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
           
           <div className="p-6 bg-neutral-50/30 border-t border-neutral-100 flex justify-between items-center text-xs font-bold text-neutral-400">
              <p>TRACKING 12,402 ACTIVE SESSIONS</p>
              <div className="flex gap-4">
                 <button className="hover:text-black">Previous</button>
                 <span className="text-black">Page 01 of 124</span>
                 <button className="hover:text-black">Next</button>
              </div>
           </div>
        </div>

        {/* Secondary Charts Area */}
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h4 className="text-lg font-bold tracking-tight">Active Usage Index</h4>
                 <select className="bg-transparent text-[10px] font-bold tracking-widest text-neutral-400 uppercase border-none focus:ring-0">
                    <option>Weekly View</option>
                    <option>Monthly View</option>
                 </select>
              </div>
              <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ANALYTICS_DATA}>
                       <defs>
                          <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#ED723D" stopOpacity={0.1}/>
                             <stop offset="95%" stopColor="#ED723D" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <XAxis dataKey="name" stroke="#A3A3A3" fontSize={10} axisLine={false} tickLine={false} />
                       <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                       <Area type="monotone" dataKey="active" stroke="#ED723D" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>

           <div className="bg-[#330C00] p-8 rounded-3xl shadow-sm relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                 <div>
                    <h4 className="text-lg font-bold tracking-tight text-white mb-2">Global Node Integrity</h4>
                    <p className="text-sm text-white/50 mb-8">System reliability across 150+ edge nodes.</p>
                 </div>
                 
                 <div className="space-y-6">
                    <NodeHealthItem label="Europe (LDN-01)" status="99.99%" up />
                    <NodeHealthItem label="North America (NYC-04)" status="99.98%" up />
                    <NodeHealthItem label="Asia-Pacific (TKY-09)" status="98.42%" warning />
                    <NodeHealthItem label="South America (SPO-02)" status="99.99%" up />
                 </div>
                 
                 <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/10 transition-all uppercase tracking-widest">
                    Enter Topology View
                 </button>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Logo className="scale-[4] origin-top-right" />
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

function AdminSidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
        active 
          ? 'bg-[#ED723D] text-white shadow-lg shadow-[#ED723D]/20 scale-[1.02]' 
          : 'text-white/40 hover:text-white hover:bg-white/5'
      }`}
    >
      <div className={`${active ? 'scale-110' : ''} transition-transform`}>{icon}</div>
      <span className="font-bold tracking-tight">{label}</span>
      {active && <div className="ml-auto size-1.5 bg-white rounded-full shadow-[0_0_8px_white]" />}
    </button>
  );
}

function AdminStatCard({ label, value, change, up }: { label: string, value: string, change: string, up?: boolean }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:border-[#ED723D]/40 transition-all cursor-default group">
       <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">{label}</p>
       <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold tracking-tighter group-hover:scale-110 origin-left transition-transform">{value}</h4>
          <div className={`flex items-center gap-1 text-[10px] font-bold ${up ? 'text-[#00FFCD]' : 'text-neutral-400'}`}>
             {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
             {change}
          </div>
       </div>
    </div>
  );
}

function NodeHealthItem({ label, status, up, warning }: { label: string, status: string, up?: boolean, warning?: boolean }) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-xs font-medium text-white/70">{label}</span>
       <div className="flex items-center gap-3">
          <span className={`text-[10px] font-mono font-bold ${warning ? 'text-[#ED723D]' : 'text-[#00FFCD]'}`}>{status}</span>
          <div className={`size-1.5 rounded-full ${warning ? 'bg-[#ED723D]' : 'bg-[#00FFCD]'} shadow-[0_0_8px_currentColor]`} />
       </div>
    </div>
  );
}
