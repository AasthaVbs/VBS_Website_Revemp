import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Derive image alt text from the source filename (without extension / content hash). */
export function altFromImageSrc(src: string | { src: string }): string {
  const path = typeof src === "string" ? src : src.src;
  const file = decodeURIComponent(path.split("/").pop()?.split("?")[0] ?? "");
  const withoutExt = file.replace(/\.[a-z0-9]+$/i, "");
  // Next/webpack content hash: name.abc123def or name_abc123
  const withoutHash = withoutExt
    .replace(/\.[a-f0-9]{6,}$/i, "")
    .replace(/_[a-f0-9]{6,}$/i, "");
  return withoutHash || "image";
}
