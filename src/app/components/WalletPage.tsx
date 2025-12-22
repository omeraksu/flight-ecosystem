import React from "react";
import { DashboardLayout } from "./DashboardLayout";
import { Plus, Send, Download, Repeat, TrendingUp, TrendingDown } from "lucide-react";
import { FormButton } from "./forms/FormButton";

// Pure data: Mock transactions
const TRANSACTIONS = [
  { id: "1", type: "send", amount: "-$250.00", currency: "USD", to: "Alex Thompson", date: "2025-12-22 10:30", status: "completed" },
  { id: "2", type: "receive", amount: "+$1,420.00", currency: "USD", from: "Sarah Chen", date: "2025-12-22 09:15", status: "completed" },
  { id: "3", type: "swap", amount: "-0.05 BTC", currency: "BTC", to: "1,420 USDT", date: "2025-12-21 18:45", status: "completed" },
  { id: "4", type: "send", amount: "-$75.50", currency: "USD", to: "John Doe", date: "2025-12-21 14:20", status: "pending" },
];

// Pure component: Stat Card
const StatCard = ({ 
  title, 
  value, 
  change, 
  trend 
}: { 
  title: string; 
  value: string; 
  change: string; 
  trend: "up" | "down";
}) => (
  <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm">
    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">{title}</p>
    <h3 className="text-3xl font-bold tracking-tight mb-2">{value}</h3>
    <div className={`flex items-center gap-2 text-sm font-bold ${trend === "up" ? "text-[#00FFCD]" : "text-[#D4183D]"}`}>
      {trend === "up" ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
      <span>{change}</span>
    </div>
  </div>
);

// Pure component: Quick Action
const QuickAction = ({ 
  icon, 
  label, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col items-center gap-3 
      hover:border-[#FF4500] hover:shadow-lg transition-all group"
  >
    <div className="size-12 bg-neutral-100 rounded-xl flex items-center justify-center 
      text-neutral-600 group-hover:bg-[#FF4500] group-hover:text-white transition-all">
      {icon}
    </div>
    <span className="text-sm font-bold text-neutral-700 group-hover:text-[#FF4500] transition-all">
      {label}
    </span>
  </button>
);

// Pure component: Transaction Row
const TransactionRow = ({ 
  transaction 
}: { 
  transaction: typeof TRANSACTIONS[0];
}) => {
  const getIcon = () => {
    switch (transaction.type) {
      case "send": return <Send size={20} className="text-[#FF4500]" />;
      case "receive": return <Download size={20} className="text-[#00FFCD]" />;
      case "swap": return <Repeat size={20} className="text-neutral-600" />;
      default: return null;
    }
  };

  const isPositive = transaction.amount.startsWith("+");

  return (
    <tr className="hover:bg-neutral-50/30 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-neutral-100 rounded-xl flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <p className="font-bold text-sm">{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</p>
            <p className="text-xs text-neutral-400">
              {transaction.type === "send" || transaction.type === "swap" ? `To: ${transaction.to}` : `From: ${transaction.from}`}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm font-medium text-neutral-600">{transaction.date}</p>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold
          ${transaction.status === "completed" ? "bg-[#00FFCD]/10 text-[#00FFCD]" : "bg-yellow-100 text-yellow-700"}`}>
          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <p className={`font-bold ${isPositive ? "text-[#00FFCD]" : "text-neutral-900"}`}>
          {transaction.amount}
        </p>
        <p className="text-xs text-neutral-400">{transaction.currency}</p>
      </td>
    </tr>
  );
};

// Main component
export function WalletPage() {
  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <DashboardLayout headerTitle="Wallet">
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Balance"
          value="$46,250.00"
          change="+3.2% this month"
          trend="up"
        />
        <StatCard
          title="Available"
          value="$42,800.00"
          change="+5.1% this month"
          trend="up"
        />
        <StatCard
          title="Pending"
          value="$3,450.00"
          change="-1.2% this month"
          trend="down"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <QuickAction
          icon={<Send size={24} />}
          label="Send Money"
          onClick={() => handleQuickAction("send")}
        />
        <QuickAction
          icon={<Download size={24} />}
          label="Receive"
          onClick={() => handleQuickAction("receive")}
        />
        <QuickAction
          icon={<Repeat size={24} />}
          label="Swap"
          onClick={() => handleQuickAction("swap")}
        />
        <QuickAction
          icon={<Plus size={24} />}
          label="Add Funds"
          onClick={() => handleQuickAction("add")}
        />
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between">
          <h4 className="text-lg font-bold">Recent Transactions</h4>
          <FormButton variant="ghost" className="text-sm">
            View All
          </FormButton>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50/50 text-left text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                <th className="px-6 py-4">Transaction</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {TRANSACTIONS.map((tx) => (
                <TransactionRow key={tx.id} transaction={tx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
