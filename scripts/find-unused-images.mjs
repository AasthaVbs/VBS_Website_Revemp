import fs from "fs";
import path from "path";

const root = process.cwd();
const imageExts = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".avif"]);

const NEVER_DELETE = new Set([
  "app/favicon.ico",
  "app/icon.ico",
  "app/apple-icon.png",
]);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".git") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (imageExts.has(path.extname(ent.name).toLowerCase())) files.push(p);
  }
  return files;
}

function readTextFiles(dir, files = []) {
  const textExts = new Set([
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".scss",
    ".json",
    ".md",
    ".mdx",
    ".html",
    ".mjs",
  ]);
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".git") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) readTextFiles(p, files);
    else if (textExts.has(path.extname(ent.name).toLowerCase())) files.push(p);
  }
  return files;
}

const images = walk(root);
const textFiles = readTextFiles(root);
const corpus = textFiles
  .map((f) => {
    try {
      return fs.readFileSync(f, "utf8");
    } catch {
      return "";
    }
  })
  .join("\n");

function referenceVariants(filePath) {
  const rel = path.relative(root, filePath).replace(/\\/g, "/");
  const pub = rel.startsWith("public/")
    ? `/${rel.slice("public/".length)}`
    : null;
  const variants = new Set([rel]);

  if (pub) {
    variants.add(pub);
    variants.add(pub.replace(/^\//, ""));
    variants.add(rel.replace(/^public\//, ""));
    variants.add(encodeURI(pub));
    variants.add(pub.replace(/ /g, "%20"));
    variants.add(
      pub
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/"),
    );
  }

  if (rel.startsWith("src/assets/")) {
    const assetPath = `@/${rel.slice("src/".length)}`;
    variants.add(assetPath);
    variants.add(assetPath.replace(/\.[^.]+$/, ""));
    variants.add(`from "${assetPath}"`);
    variants.add(`from '${assetPath}'`);
  }

  // Hash-named Figma export files (e.g. 9fbffdc39ebeef6a....png)
  const hashStem = path.basename(filePath, path.extname(filePath));
  if (/^[a-f0-9]{20,}$/i.test(hashStem)) {
    variants.add(hashStem);
  }

  return [...variants].filter(Boolean);
}

const unused = [];
const used = [];

for (const img of images) {
  const rel = path.relative(root, img).replace(/\\/g, "/");
  if (NEVER_DELETE.has(rel)) {
    used.push(rel);
    continue;
  }

  const isUsed = referenceVariants(img).some((c) => corpus.includes(c));
  if (isUsed) used.push(rel);
  else unused.push(rel);
}

const outFile = path.join(root, "scripts", "unused-images.txt");
fs.writeFileSync(outFile, unused.sort().join("\n"), "utf8");

console.log(`TOTAL: ${images.length}`);
console.log(`USED: ${used.length}`);
console.log(`UNUSED: ${unused.length}`);
console.log(`Wrote list to ${outFile}`);
