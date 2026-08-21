/** Sanity env — supports Gatsby (`GATSBY_*`) and Next (`NEXT_PUBLIC_*`) prefixes. */

function readEnv(key: string): string | undefined {
  const gatsbyKey = `GATSBY_${key}`;
  const nextKey = `NEXT_PUBLIC_${key}`;
  const studioKey = `SANITY_STUDIO_${key}`;

  return (
    process.env[gatsbyKey] ||
    process.env[nextKey] ||
    process.env[studioKey] ||
    process.env[key]
  );
}

export const sanityProjectId = readEnv("SANITY_PROJECT_ID") || "rog08jar";
export const sanityDataset = readEnv("SANITY_DATASET") || "production";
export const sanityApiVersion = "2023-05-03";
export const sanityReadToken = readEnv("SANITY_READ_TOKEN");
export const sanityPreviewSecret =
  readEnv("SANITY_PREVIEW_SECRET") || readEnv("PREVIEW_SECRET");

export function hasSanityReadToken() {
  return Boolean(sanityReadToken);
}

export function hasSanityCredentials() {
  return Boolean(sanityProjectId && sanityReadToken);
}
