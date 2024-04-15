import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        resolve(reader.result.split(",")[1]); // Split off the base64 prefix
      } else {
        reject(new Error("Failed to read the file as base64."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

export const baseURL = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}/`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
  : `http://localhost:${process.env.PORT ?? 3000}/`;
