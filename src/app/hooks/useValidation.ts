// Pure validation functions
export type ValidatorFn = (value: any) => string | undefined;

// Composable validators
export const required = (message = "This field is required"): ValidatorFn => 
  (value) => !value || value.trim() === "" ? message : undefined;

export const minLength = (min: number, message?: string): ValidatorFn =>
  (value) => value && value.length < min 
    ? message || `Minimum ${min} characters required` 
    : undefined;

export const maxLength = (max: number, message?: string): ValidatorFn =>
  (value) => value && value.length > max 
    ? message || `Maximum ${max} characters allowed` 
    : undefined;

export const email = (message = "Invalid email address"): ValidatorFn =>
  (value) => {
    if (!value) return undefined;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value) ? message : undefined;
  };

export const pattern = (regex: RegExp, message: string): ValidatorFn =>
  (value) => value && !regex.test(value) ? message : undefined;

export const numeric = (message = "Must be a number"): ValidatorFn =>
  (value) => value && isNaN(Number(value)) ? message : undefined;

export const alphanumeric = (message = "Only letters and numbers allowed"): ValidatorFn =>
  (value) => {
    if (!value) return undefined;
    const alphanumericRegex = /^[a-zA-Z0-9\s-]+$/;
    return !alphanumericRegex.test(value) ? message : undefined;
  };

// Compose multiple validators
export const compose = (...validators: ValidatorFn[]): ValidatorFn =>
  (value) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return undefined;
  };
