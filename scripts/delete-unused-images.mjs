import fs from "fs";
import path from "path";

const root = process.cwd();
const listFile = path.join(root, "scripts", "unused-images.txt");

if (!fs.existsSync(listFile)) {
  console.error("Run find-unused-images.mjs first.");
  process.exit(1);
}

const files = fs
  .readFileSync(listFile, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

let deleted = 0;
let failed = 0;

for (const rel of files) {
  const full = path.join(root, rel);
  try {
    fs.rmSync(full, { force: true });
    deleted += 1;
  } catch (error) {
    failed += 1;
    console.error(`Failed to delete ${rel}:`, error.message);
  }
}

console.log(`Deleted: ${deleted}`);
console.log(`Failed: ${failed}`);
