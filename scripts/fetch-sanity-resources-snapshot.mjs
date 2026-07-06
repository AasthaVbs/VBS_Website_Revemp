import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const gatsbyEnvPath = path.resolve(root, "..", "virtual-building-studio", ".env.development");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const env = {
  ...loadEnvFile(path.join(root, ".env.local")),
  ...loadEnvFile(path.join(root, ".env")),
  ...loadEnvFile(gatsbyEnvPath),
  ...process.env,
};

const projectId =
  env.NEXT_PUBLIC_SANITY_PROJECT_ID || env.GATSBY_SANITY_PROJECT_ID;
const dataset =
  env.NEXT_PUBLIC_SANITY_DATASET || env.GATSBY_SANITY_DATASET || "production";
const token = env.SANITY_READ_TOKEN || env.GATSBY_SANITY_READ_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing Sanity credentials. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_READ_TOKEN in .env.local",
  );
  process.exit(1);
}

const query = encodeURIComponent(`{
  "posts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "_id": _id,
    title,
    publishedAt,
    "slug": slug.current,
    categories[]->{ "_id": _id, title },
    tags,
    featuredImage {
      asset->{
        url,
        originalFilename
      }
    },
    "body": body
  },
  "webinars": *[_type == "webinar" && defined(slug.current)] | order(eventDate desc) {
    "_id": _id,
    "slug": slug.current,
    eventDate,
    title,
    "body": body,
    bannerImage { asset->{ url } },
    youtubeThumbnail { asset->{ url } },
    upcomingImage { asset->{ url } }
  }
}`);

const url = `https://${projectId}.api.sanity.io/v2023-05-03/data/query/${dataset}?query=${query}`;

const response = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

if (!response.ok) {
  console.error("Sanity fetch failed:", response.status, await response.text());
  process.exit(1);
}

const payload = await response.json();
const snapshot = {
  fetchedAt: new Date().toISOString(),
  posts: payload.result?.posts ?? [],
  webinars: payload.result?.webinars ?? [],
};

const outPath = path.join(root, "src", "data", "sanity-resources-snapshot.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

console.log(
  `Wrote ${snapshot.posts.length} posts and ${snapshot.webinars.length} webinars to ${path.relative(root, outPath)}`,
);
