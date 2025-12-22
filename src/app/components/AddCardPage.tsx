import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { DashboardLayout } from "./DashboardLayout";
import { FormInput } from "./forms/FormInput";
import { FormSelect } from "./forms/FormSelect";
import { FormButton } from "./forms/FormButton";
import { FormTextarea } from "./forms/FormTextarea";
import { useForm } from "../hooks/useForm";
import { required, email, compose, minLength, maxLength, alphanumeric } from "../hooks/useValidation";
import { toast } from "sonner";

// Pure data structures
const COUNTRIES = [
  { value: "", label: "Select Country" },
  { value: "AU", label: "Australia" },
  { value: "BD", label: "Bangladesh" },
  { value: "CN", label: "China" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "TR", label: "Turkey" },
  { value: "DE", label: "Germany" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "CA", label: "Canada" },
  { value: "FR", label: "France" },
  { value: "JP", label: "Japan" },
  { value: "IN", label: "India" },
  { value: "KR", label: "South Korea" },
  { value: "BR", label: "Brazil" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "RU", label: "Russia" },
  { value: "SG", label: "Singapore" },
];

const AREA_CODES = [
  { value: "", label: "Select Code" },
  { value: "+61", label: "+61" },
  { value: "+880", label: "+880" },
  { value: "+86", label: "+86" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+90", label: "+90" },
  { value: "+49", label: "+49" },
  { value: "+971", label: "+971" },
  { value: "+33", label: "+33" },
  { value: "+81", label: "+81" },
  { value: "+91", label: "+91" },
  { value: "+82", label: "+82" },
  { value: "+55", label: "+55" },
  { value: "+966", label: "+966" },
  { value: "+7", label: "+7" },
  { value: "+65", label: "+65" },
];

const CARD_TYPES = [
  { value: "mastercard", label: "MasterCard" },
  { value: "visa", label: "Visa", disabled: true },
];

const TOWNS = [
  { value: "", label: "Select Town" },
  { value: "IST", label: "Istanbul" },
  { value: "ANK", label: "Ankara" },
  { value: "NYC", label: "New York" },
  { value: "LDN", label: "London" },
];

// Form configuration (pure object)
const createCardFormConfig = (defaultEmail: string) => ({
  type: {
    initialValue: "mastercard",
    validators: [required()],
  },
  email: {
    initialValue: defaultEmail,
    validators: [required(), email()],
  },
  firstName: {
    initialValue: "",
    validators: [required(), minLength(2), maxLength(50)],
  },
  lastName: {
    initialValue: "",
    validators: [required(), minLength(2), maxLength(50)],
  },
  dob: {
    initialValue: "",
    validators: [required()],
  },
  areaCode: {
    initialValue: "",
    validators: [required()],
  },
  mobile: {
    initialValue: "",
    validators: [required(), minLength(5), maxLength(15)],
  },
  country: {
    initialValue: "TR",
    validators: [required()],
  },
  town: {
    initialValue: "",
    validators: [required()],
  },
  postalCode: {
    initialValue: "",
    validators: [required(), alphanumeric()],
  },
  address: {
    initialValue: "",
    validators: [
      required(),
      compose(
        minLength(2, "Address must be at least 2 characters"),
        maxLength(40, "Address must not exceed 40 characters")
      ),
    ],
  },
});

// Pure component
export function AddCardPage() {
  const form = useForm(createCardFormConfig("omeeraksu@gmail.com"));

  // Pure submit handler
  const handleFormSubmit = (values: typeof form.values) => {
    console.log("Form submitted:", values);
    toast.success("Card details submitted successfully!");
    // Here you would typically make an API call
  };

  return (
    <DashboardLayout
      headerTitle="Add Account Details"
      headerAction={
        <Link
          to="/card"
          className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-[#FF4500] transition-colors"
        >
          <span className="backtxt">Back</span>
          <ChevronRight size={16} />
        </Link>
      }
    >
      <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden p-8">
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
          {/* Card Type */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormSelect
              label="Card Type"
              required
              options={CARD_TYPES}
              value={form.values.type}
              onChange={form.handleChange("type")}
              onBlur={form.handleBlur("type")}
              error={form.touched.type ? form.errors.type : undefined}
            />
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormInput
              label="Email"
              type="email"
              required
              disabled
              value={form.values.email}
              onChange={form.handleChange("email")}
              onBlur={form.handleBlur("email")}
              error={form.touched.email ? form.errors.email : undefined}
            />

            <FormInput
              label="First Name"
              type="text"
              required
              value={form.values.firstName}
              onChange={form.handleChange("firstName")}
              onBlur={form.handleBlur("firstName")}
              error={form.touched.firstName ? form.errors.firstName : undefined}
              placeholder="Enter first name"
            />

            <FormInput
              label="Last Name"
              type="text"
              required
              value={form.values.lastName}
              onChange={form.handleChange("lastName")}
              onBlur={form.handleBlur("lastName")}
              error={form.touched.lastName ? form.errors.lastName : undefined}
              placeholder="Enter last name"
            />
          </div>

          {/* More Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormInput
              label="DOB"
              type="date"
              required
              value={form.values.dob}
              onChange={form.handleChange("dob")}
              onBlur={form.handleBlur("dob")}
              error={form.touched.dob ? form.errors.dob : undefined}
            />

            <FormSelect
              label="Area Code"
              required
              options={AREA_CODES}
              value={form.values.areaCode}
              onChange={form.handleChange("areaCode")}
              onBlur={form.handleBlur("areaCode")}
              error={form.touched.areaCode ? form.errors.areaCode : undefined}
            />

            <FormInput
              label="Mobile No"
              type="text"
              required
              value={form.values.mobile}
              onChange={form.handleChange("mobile")}
              onBlur={form.handleBlur("mobile")}
              error={form.touched.mobile ? form.errors.mobile : undefined}
              placeholder="Enter mobile number"
            />
          </div>

          {/* Address Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormSelect
              label="Country"
              required
              options={COUNTRIES}
              value={form.values.country}
              onChange={form.handleChange("country")}
              onBlur={form.handleBlur("country")}
              error={form.touched.country ? form.errors.country : undefined}
            />

            <FormSelect
              label="Town"
              required
              options={TOWNS}
              value={form.values.town}
              onChange={form.handleChange("town")}
              onBlur={form.handleBlur("town")}
              error={form.touched.town ? form.errors.town : undefined}
            />

            <FormInput
              label="Postal Code"
              type="text"
              required
              value={form.values.postalCode}
              onChange={form.handleChange("postalCode")}
              onBlur={form.handleBlur("postalCode")}
              error={form.touched.postalCode ? form.errors.postalCode : undefined}
              placeholder="Enter postal code"
            />
          </div>

          <FormTextarea
            label="Address"
            required
            rows={3}
            maxLength={40}
            showCharCount
            value={form.values.address}
            onChange={form.handleChange("address")}
            onBlur={form.handleBlur("address")}
            error={form.touched.address ? form.errors.address : undefined}
            helperText="The address can only contain letters, numbers, hyphens, and spaces. It must be between 2 and 40 characters long."
          />

          <div className="flex justify-center pt-4">
            <FormButton type="submit" loading={form.isSubmitting}>
              Submit
            </FormButton>
          </div>
        </form>
      </div>

      <footer className="mt-12 text-center pb-8">
        <p className="text-sm font-medium text-gray-400">
          © 2025 TheXBank. All rights reserved.
        </p>
      </footer>
    </DashboardLayout>
  );
}
