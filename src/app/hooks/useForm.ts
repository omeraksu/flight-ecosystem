import { useState, useCallback } from "react";
import { ValidatorFn } from "./useValidation";

export interface FieldConfig {
  initialValue: any;
  validators?: ValidatorFn[];
}

export interface FormConfig {
  [key: string]: FieldConfig;
}

export interface FormState {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

interface UseFormReturn<T extends FormState> {
  values: T;
  errors: FormErrors;
  touched: Record<string, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleBlur: (name: string) => () => void;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string | undefined) => void;
  validateField: (name: string) => string | undefined;
  validateForm: () => boolean;
  handleSubmit: (onSubmit: (values: T) => void | Promise<void>) => (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export function useForm<T extends FormState>(config: FormConfig): UseFormReturn<T> {
  // Initial state extraction (pure function)
  const getInitialValues = (config: FormConfig): FormState =>
    Object.entries(config).reduce(
      (acc, [key, { initialValue }]) => ({ ...acc, [key]: initialValue }),
      {}
    );

  const [values, setValues] = useState<T>(getInitialValues(config) as T);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field (pure function)
  const validateField = useCallback(
    (name: string): string | undefined => {
      const fieldConfig = config[name];
      if (!fieldConfig?.validators) return undefined;

      const value = values[name];
      for (const validator of fieldConfig.validators) {
        const error = validator(value);
        if (error) return error;
      }
      return undefined;
    },
    [config, values]
  );

  // Validate entire form (pure function)
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(config).forEach((name) => {
      const error = validateField(name);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [config, validateField]);

  // Handle field change
  const handleChange = useCallback(
    (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setValues((prev) => ({ ...prev, [name]: newValue }));
      
      // Clear error on change
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  // Handle field blur
  const handleBlur = useCallback(
    (name: string) => () => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  // Set field value programmatically
  const setFieldValue = useCallback((name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Set field error programmatically
  const setFieldError = useCallback((name: string, error: string | undefined) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    (onSubmit: (values: T) => void | Promise<void>) =>
      async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Mark all fields as touched
        const allTouched = Object.keys(config).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {}
        );
        setTouched(allTouched);

        // Validate
        if (!validateForm()) {
          return;
        }

        // Submit
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } catch (error) {
          console.error("Form submission error:", error);
        } finally {
          setIsSubmitting(false);
        }
      },
    [config, values, validateForm]
  );

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setValues(getInitialValues(config) as T);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [config]);

  // Check if form is valid
  const isValid = Object.values(errors).every((error) => !error);

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    validateField,
    validateForm,
    handleSubmit,
    resetForm,
  };
}
