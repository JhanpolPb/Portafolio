import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "..." : str;
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  PHP: "#777BB4",
  "C#": "#178600",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  HTML: "#E34C26",
  CSS: "#1572B6",
  Shell: "#89E051",
  Dockerfile: "#384D54",
};
