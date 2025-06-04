import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(
  name: string | undefined,
  maxInitials: number = 2,
): string {
  if (!name || typeof name !== "string") {
    return "";
  }

  return name
    .trim()
    .split(" ")
    .filter((word) => word.length > 0)
    .slice(0, maxInitials)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}
