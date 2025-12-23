import React, { useState } from "react";
import { DashboardLayout } from "./DashboardLayout";
import { 
  ShieldCheck, 
  ChevronRight, 
  Camera, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  FileCheck,
  User,
  Scan
} from "lucide-react";
import { toast } from "sonner";

export function KYCPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      if (step < 4) {
        setStep(step + 1);
      } else {
        toast.success("KYC data submitted successfully!");
      }
    }, 800);
  };

  return (
    <DashboardLayout headerTitle="Identity Verification">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-[#330C00] rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                 <ShieldCheck size={32} className="text-[#00FFCD]" />
                 <h2 className="text-2xl font-bold">Blockpass Identity Verification</h2>
              </div>
              <p className="opacity-80 max-w-xl">
                Complete your KYC to unlock full platform features. We use bank-grade security and encryption to protect your personal data in compliance with global regulations.
              </p>
           </div>
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={200} />
           </div>
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center justify-between px-8 mb-12">
           {[
              { id: 1, label: 'Identity', icon: User },
              { id: 2, label: 'Documents', icon: FileCheck },
              { id: 3, label: 'Liveness', icon: Scan },
              { id: 4, label: 'Review', icon: CheckCircle2 },
           ].map((s) => (
             <div key={s.id} className="flex flex-col items-center gap-2 relative">
                <div className={`size-12 rounded-full border-2 flex items-center justify-center transition-all ${
                   step >= s.id 
                    ? 'bg-[#00FFCD] border-[#00FFCD] text-[#330C00]' 
                    : 'bg-white border-neutral-200 text-neutral-300'
                }`}>
                   <s.icon size={20} className={step >= s.id ? 'stroke-current' : ''} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                   step >= s.id ? 'text-black' : 'text-neutral-300'
                }`}>
                   {s.label}
                </span>
                {/* Connector Line */}
                {s.id !== 4 && (
                   <div className={`absolute top-6 left-full w-[calc(100vw/6)] h-0.5 -translate-y-1/2 -z-10 ${
                     step > s.id ? 'bg-[#00FFCD]' : 'bg-neutral-100'
                   }`} />
                )}
             </div>
           ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-8 min-h-[400px]">
           
           {step === 1 && (
             <div className="animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-xl font-bold mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                   <InputField label="First Name" placeholder="e.g. Alex" />
                   <InputField label="Last Name" placeholder="e.g. Thompson" />
                   <InputField label="Email Address" placeholder="alex@example.com" type="email" />
                   <InputField label="Date of Birth" placeholder="DD/MM/YYYY" />
                   <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Country of Residence</label>
                      <select className="w-full h-12 rounded-xl border border-neutral-200 px-4 font-medium bg-white focus:outline-none focus:border-[#00FFCD] transition-colors">
                         <option>United States</option>
                         <option>United Kingdom</option>
                         <option>Germany</option>
                         <option>Japan</option>
                      </select>
                   </div>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-xl font-bold mb-6">Document Upload</h3>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-[#00FFCD] hover:bg-[#00FFCD]/5 transition-all cursor-pointer group">
                      <div className="size-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <Upload size={24} className="text-neutral-400" />
                      </div>
                      <h4 className="font-bold mb-1">Passport Front</h4>
                      <p className="text-xs text-neutral-400">JPG, PNG or PDF (Max 5MB)</p>
                   </div>
                   <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-[#00FFCD] hover:bg-[#00FFCD]/5 transition-all cursor-pointer group">
                      <div className="size-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <Upload size={24} className="text-neutral-400" />
                      </div>
                      <h4 className="font-bold mb-1">Proof of Address</h4>
                      <p className="text-xs text-neutral-400">Utility Bill or Bank Statement</p>
                   </div>
                </div>
                
                <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                   <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                   <p className="text-sm text-amber-800">Ensure all documents are clear, legible, and all four corners are visible. Glare or blur may cause delays.</p>
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="animate-in fade-in slide-in-from-bottom-4 text-center max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-2">Liveness Check</h3>
                <p className="text-neutral-500 mb-8">We need to verify that you are a real person. Please look into the camera and follow the instructions.</p>
                
                <div className="relative aspect-square bg-neutral-900 rounded-full overflow-hidden mb-8 mx-auto w-64 ring-4 ring-neutral-100">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Camera size={48} className="text-white/20" />
                   </div>
                   {/* Simulated Scanning effect */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FFCD]/20 to-transparent animate-scan" style={{ animationDuration: '3s' }} />
                </div>
                
                <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm">Enable Camera</button>
             </div>
           )}

           {step === 4 && (
             <div className="animate-in fade-in slide-in-from-bottom-4 text-center py-8">
                <div className="size-20 bg-[#00FFCD] rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 size={40} className="text-[#330C00]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Verification Submitted</h3>
                <p className="text-neutral-500 max-w-md mx-auto mb-8">
                   Thank you for completing the KYC process. Our team will review your documents within 24-48 hours. You will be notified via email once approved.
                </p>
                
                <div className="bg-neutral-50 rounded-xl p-4 max-w-md mx-auto text-left">
                   <h5 className="font-bold text-sm mb-4 border-b border-neutral-200 pb-2">Status Summary</h5>
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-500">Reference ID</span>
                      <span className="font-mono text-sm font-bold">BP-8839201</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-500">Current Status</span>
                      <span className="text-xs font-bold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">PENDING REVIEW</span>
                   </div>
                </div>
             </div>
           )}

           {/* Actions */}
           <div className="mt-12 flex items-center justify-between border-t border-neutral-100 pt-8">
              {step > 1 && step < 4 ? (
                 <button 
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 font-bold text-neutral-500 hover:text-black transition-colors"
                 >
                    Back
                 </button>
              ) : <div />}
              
              {step < 4 && (
                 <button 
                  onClick={handleNext}
                  disabled={loading}
                  className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50"
                 >
                    {loading ? 'Processing...' : step === 3 ? 'Finish Verification' : 'Continue'}
                    {!loading && <ChevronRight size={18} />}
                 </button>
              )}
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
   return (
      <div>
         <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">{label}</label>
         <input 
            type={type}
            placeholder={placeholder} 
            className="w-full h-12 rounded-xl border border-neutral-200 px-4 font-medium placeholder:text-neutral-300 focus:outline-none focus:border-[#00FFCD] transition-colors"
         />
      </div>
   );
}
