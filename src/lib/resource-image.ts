import { FIGMA_RESOURCE_IMAGES } from "@/constants/resource-figma-assets";

export const RESOURCE_FEED_FALLBACK_IMAGE = FIGMA_RESOURCE_IMAGES[0];

function encodePathSegment(segment: string) {
  if (!segment) return segment;
  try {
    return encodeURIComponent(decodeURIComponent(segment));
  } catch {
    return encodeURIComponent(segment);
  }
}

/** Encode each path segment so spaces and special chars resolve under /public. */
export function encodeLocalAssetPath(path: string) {
  const [pathname, search = ""] = path.split("?");
  const encodedPath = pathname
    .split("/")
    .map((segment) => encodePathSegment(segment))
    .join("/");

  return search ? `${encodedPath}?${search}` : encodedPath;
}

/** Prefer raw local paths (Gatsby parity); encode only when requested. */
export function normalizeResourceImageSrc(image: string, { encode = false } = {}) {
  if (!image) return RESOURCE_FEED_FALLBACK_IMAGE;
  if (image.startsWith("http") || image.startsWith("data:")) return image;
  if (!image.startsWith("/")) return image;

  return encode ? encodeLocalAssetPath(image) : image;
}

export function getResourceFeedFallbackImage(index = 0) {
  return FIGMA_RESOURCE_IMAGES[index % FIGMA_RESOURCE_IMAGES.length];
}

/** Alternate URL strategies when a local /image asset 404s in dev or prod. */
export function getResourceImageFallbackCandidates(src: string) {
  const candidates = new Set<string>();

  if (!src) return [];

  candidates.add(src);

  if (src.includes("%")) {
    try {
      candidates.add(decodeURI(src));
    } catch {
      // ignore invalid URI encoding
    }
  }

  if (src.startsWith("/")) {
    candidates.add(encodeLocalAssetPath(src));
  }

  return Array.from(candidates).filter(Boolean);
}
