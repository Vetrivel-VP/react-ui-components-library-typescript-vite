import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally combine CSS class names
 * while intelligently resolving Tailwind CSS class conflicts.
 *
 * - Uses `clsx` to handle conditional, array, and object-based class names.
 * - Uses `tailwind-merge` to remove conflicting Tailwind utility classes
 *   (e.g., `p-2` vs `p-4`, `bg-red-500` vs `bg-blue-500`).
 

 * 🔹 (...inputs: ClassValue[])
 * ...inputs → rest operator
 * Accepts any number of arguments
 * Each argument must be a valid clsx class value
 
 * This ensures clean, predictable, and maintainable `className` strings
 * across the application.
 *
 * @param inputs - Any number of class values supported by `clsx`
 * @returns A merged and conflict-free className string
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
