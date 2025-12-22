// Pure utility functions for form data transformation

/**
 * Transform form data to API format
 */
export const transformToApiFormat = <T extends Record<string, any>>(
  data: T,
  transformations: Partial<Record<keyof T, (value: any) => any>> = {}
): Record<string, any> => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    const transform = transformations[key as keyof T];
    return {
      ...acc,
      [key]: transform ? transform(value) : value,
    };
  }, {});
};

/**
 * Remove empty fields from form data
 */
export const removeEmptyFields = <T extends Record<string, any>>(data: T): Partial<T> => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (value !== "" && value !== null && value !== undefined) {
      return { ...acc, [key]: value };
    }
    return acc;
  }, {} as Partial<T>);
};

/**
 * Trim all string fields
 */
export const trimStringFields = <T extends Record<string, any>>(data: T): T => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: typeof value === "string" ? value.trim() : value,
    };
  }, {} as T);
};

/**
 * Convert form data to query string
 */
export const toQueryString = (data: Record<string, any>): string => {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, String(value));
    }
  });
  return params.toString();
};

/**
 * Deep clone object (immutability helper)
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const mergeObjects = <T extends Record<string, any>>(...objects: Partial<T>[]): Partial<T> => {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {} as Partial<T>);
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");
  return cleaned;
};

/**
 * Format postal code
 */
export const formatPostalCode = (value: string): string => {
  return value.toUpperCase().replace(/\s+/g, "");
};
