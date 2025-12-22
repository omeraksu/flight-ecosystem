import React, { useState } from "react";
import { DashboardLayout } from "./DashboardLayout";
import { FormInput } from "./forms/FormInput";
import { FormButton } from "./forms/FormButton";
import { FormTextarea } from "./forms/FormTextarea";
import { useForm } from "../hooks/useForm";
import { required, email, minLength } from "../hooks/useValidation";
import { User, Mail, Phone, MapPin, Shield, Bell } from "lucide-react";
import { toast } from "sonner";

// Pure data: KYC status levels
const KYCLevels = {
  UNVERIFIED: { label: "Unverified", color: "bg-neutral-200 text-neutral-600" },
  BASIC: { label: "Basic", color: "bg-yellow-100 text-yellow-700" },
  VERIFIED: { label: "Verified", color: "bg-[#00FFCD]/10 text-[#00FFCD]" },
} as const;

// Pure component: Info Card
const InfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
    <div className="size-10 bg-white rounded-lg flex items-center justify-center text-[#FF4500]">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">
        {title}
      </p>
      <p className="text-sm font-bold text-neutral-900">{value}</p>
    </div>
  </div>
);

// Pure component: Setting Toggle
const SettingToggle = ({
  icon,
  title,
  description,
  enabled,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) => (
  <div className="flex items-center justify-between p-4 hover:bg-neutral-50 rounded-xl transition-colors">
    <div className="flex items-start gap-4">
      <div className="size-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600">
        {icon}
      </div>
      <div>
        <p className="font-bold text-sm text-neutral-900">{title}</p>
        <p className="text-xs text-neutral-500 mt-1">{description}</p>
      </div>
    </div>
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        ${enabled ? "bg-[#FF4500]" : "bg-neutral-300"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${enabled ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  </div>
);

// Form configuration
const profileFormConfig = {
  displayName: {
    initialValue: "Alex Thompson",
    validators: [required(), minLength(2)],
  },
  email: {
    initialValue: "alex.thompson@example.com",
    validators: [required(), email()],
  },
  phone: {
    initialValue: "+1 (555) 123-4567",
    validators: [required()],
  },
  bio: {
    initialValue: "Crypto enthusiast and early adopter of blockchain technology.",
    validators: [minLength(10)],
  },
};

export function ProfilePage() {
  const form = useForm(profileFormConfig);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsAlerts: false,
    twoFactor: true,
  });

  const handleProfileUpdate = (values: typeof form.values) => {
    console.log("Profile updated:", values);
    toast.success("Profile updated successfully!");
  };

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    toast.info(`${key} ${settings[key] ? "disabled" : "enabled"}`);
  };

  return (
    <DashboardLayout headerTitle="My Profile">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <div className="size-24 bg-neutral-200 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Alex Thompson</h3>
              <p className="text-sm text-neutral-500 mb-4">
                alex.thompson@example.com
              </p>
              <span
                className={`px-4 py-1 rounded-full text-xs font-bold ${KYCLevels.VERIFIED.color}`}
              >
                {KYCLevels.VERIFIED.label}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-6 space-y-3">
            <h4 className="font-bold mb-4">Contact Information</h4>
            <InfoCard
              icon={<Mail size={16} />}
              title="Email"
              value="alex.thompson@example.com"
            />
            <InfoCard
              icon={<Phone size={16} />}
              title="Phone"
              value="+1 (555) 123-4567"
            />
            <InfoCard
              icon={<MapPin size={16} />}
              title="Location"
              value="New York, USA"
            />
          </div>
        </div>

        {/* Right Column: Edit Profile & Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Edit Profile Form */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-8">
            <h4 className="text-lg font-bold mb-6">Edit Profile</h4>
            <form onSubmit={form.handleSubmit(handleProfileUpdate)} className="space-y-6">
              <FormInput
                label="Display Name"
                type="text"
                required
                value={form.values.displayName}
                onChange={form.handleChange("displayName")}
                onBlur={form.handleBlur("displayName")}
                error={form.touched.displayName ? form.errors.displayName : undefined}
              />

              <FormInput
                label="Email Address"
                type="email"
                required
                value={form.values.email}
                onChange={form.handleChange("email")}
                onBlur={form.handleBlur("email")}
                error={form.touched.email ? form.errors.email : undefined}
              />

              <FormInput
                label="Phone Number"
                type="text"
                required
                value={form.values.phone}
                onChange={form.handleChange("phone")}
                onBlur={form.handleBlur("phone")}
                error={form.touched.phone ? form.errors.phone : undefined}
              />

              <FormTextarea
                label="Bio"
                rows={4}
                value={form.values.bio}
                onChange={form.handleChange("bio")}
                onBlur={form.handleBlur("bio")}
                error={form.touched.bio ? form.errors.bio : undefined}
                helperText="Tell us a bit about yourself"
              />

              <div className="flex gap-4">
                <FormButton type="submit" loading={form.isSubmitting}>
                  Save Changes
                </FormButton>
                <FormButton
                  type="button"
                  variant="secondary"
                  onClick={() => form.resetForm()}
                >
                  Cancel
                </FormButton>
              </div>
            </form>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-8">
            <h4 className="text-lg font-bold mb-6">Notification Settings</h4>
            <div className="space-y-2">
              <SettingToggle
                icon={<Mail size={20} />}
                title="Email Notifications"
                description="Receive email updates about your account activity"
                enabled={settings.emailNotifications}
                onToggle={() => toggleSetting("emailNotifications")}
              />
              <SettingToggle
                icon={<Bell size={20} />}
                title="SMS Alerts"
                description="Get text messages for important transactions"
                enabled={settings.smsAlerts}
                onToggle={() => toggleSetting("smsAlerts")}
              />
              <SettingToggle
                icon={<Shield size={20} />}
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
                enabled={settings.twoFactor}
                onToggle={() => toggleSetting("twoFactor")}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
