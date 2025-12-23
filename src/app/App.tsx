import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { AddCardPage } from "./components/AddCardPage";
import { WalletPage } from "./components/WalletPage";
import { ProfilePage } from "./components/ProfilePage";
import { KYCPage } from "./components/KYCPage";
import { ReferralPage } from "./components/ReferralPage";
import { DepositHistoryPage } from "./components/DepositHistoryPage";
import { SupportPage } from "./components/SupportPage";
import { Toaster, toast } from "sonner";

function AppRoutes() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    toast.success("Identity Verified. Entering Flight Terminal.");
    navigate("/app");
  };

  const handleLogout = () => {
    toast.info("Session terminated.");
    navigate("/");
  };

  const handleAdminAccess = () => {
    toast.info("Opening Secure Admin Terminal...");
    navigate("/admin");
  };

  const handleExitAdmin = () => {
    navigate("/");
  };

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage 
              onGetStarted={handleGetStarted} 
              onAdminAccess={handleAdminAccess} 
            />
          } 
        />
        <Route 
          path="/app" 
          element={<Dashboard onLogout={handleLogout} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard onLogout={handleLogout} />} 
        />
        <Route 
          path="/card" 
          element={<AddCardPage />} 
        />
        <Route 
          path="/wallet" 
          element={<WalletPage />} 
        />
        <Route 
          path="/profile" 
          element={<ProfilePage />} 
        />
        <Route 
          path="/physicalcard" 
          element={<AddCardPage />} 
        />
        <Route 
          path="/kyc" 
          element={<KYCPage />} 
        />
        <Route 
          path="/referral" 
          element={<ReferralPage />} 
        />
        <Route 
          path="/deposithistory" 
          element={<DepositHistoryPage />} 
        />
        <Route 
          path="/support" 
          element={<SupportPage />} 
        />
        <Route 
          path="/admin" 
          element={<AdminDashboard onExit={handleExitAdmin} />} 
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}