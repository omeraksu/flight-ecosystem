import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  
  
  Wallet, 
  User, 
  CreditCard, 
  History, 
  FileText, 
  Users, 
  Headphones, 
  
  LogOut,
  Bell,
  
} from "lucide-react";
import { Logo } from "./Brand";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerAction?: React.ReactNode;
}

export function DashboardLayout({ children, headerTitle = "Dashboard", headerAction }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("Session terminated.");
    navigate("/");
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/dashboard" },    
    { icon: <Wallet size={20} />, label: "Wallet", path: "/wallet" },
    { icon: <User size={20} />, label: "My Account", path: "/profile" },
    { icon: <CreditCard size={20} />, label: "Physical Cards", path: "/physicalcard" },
    { icon: <FileText size={20} />, label: "KYC/KYB", path: "/kyc" },
    { icon: <Users size={20} />, label: "Referral", path: "/referral" },
    { icon: <History size={20} />, label: "History", path: "/deposithistory" },
    { icon: <Headphones size={20} />, label: "Support", path: "/support" },
  ];

  return (
    <div className="flex min-h-screen bg-white font-['Inter',sans-serif] text-black">
      {/* Product Sidebar */}
      <aside className="w-72 border-r border-[#E5E7EB] flex flex-col fixed h-full z-20 bg-white">
        <div className="p-8">
          <Logo light />
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-[#00FFCD] text-[#330C00] shadow-lg shadow-[#00FFCD]/10 font-bold' 
                    : 'text-neutral-500 hover:text-black hover:bg-neutral-50 font-medium'
                }`}
              >
                <div className={`${isActive ? 'scale-110' : ''} transition-transform`}>{item.icon}</div>
                <span className="tracking-tight text-sm">{item.label}</span>
                {isActive && <div className="ml-auto size-1.5 bg-[#330C00] rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#E5E7EB]">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-neutral-400 hover:text-[#FF4500] transition-all rounded-xl hover:bg-red-50"
          >
            <LogOut size={20} />
            <span className="font-bold text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 bg-[#F9FAFB] min-h-screen">
        <header className="sticky top-0 z-10 bg-[#F9FAFB]/95 backdrop-blur-sm border-b border-[#E5E7EB] px-12 py-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">{headerTitle}</h2>
              {/* Optional verified badge or other header elements can go here */}
           </div>
           
           <div className="flex items-center gap-6">
             {headerAction}
              
              <div className="flex items-center gap-4">
                 <button className="p-3 bg-white border border-[#E5E7EB] rounded-xl text-neutral-400 hover:text-[#FF4500] transition-colors relative shadow-sm">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 size-2 bg-[#FF4500] rounded-full border-2 border-white" />
                 </button>
                 
                 <div className="flex items-center gap-4 pl-4 border-l border-[#E5E7EB]">
                    <div className="text-right hidden md:block">
                       <p className="text-sm font-bold text-gray-900">Alex Thompson</p>
                       <p className="text-[10px] font-bold text-[#FF4500]">Verified</p>
                    </div>
                    <div className="size-10 bg-neutral-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                       <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                    </div>
                 </div>
              </div>
           </div>
        </header>

        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
