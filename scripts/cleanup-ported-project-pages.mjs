import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const targets = [
  path.join(root, "src", "components", "vbs", "projects", "pages"),
  path.join(root, "src", "components", "vbs", "projects", "hvac-case"),
];

function cleanup(code) {
  let next = code;

  next = next.replace(
    /import\s+(\w+)\s+from\s+["'](?:\.\.\/)+static\/(image|icon)\/([^"']+)["'];?/g,
    'const $1 = "/$2/$3";',
  );

  next = next.replace(/^import Seo from.*\n/gm, "");
  next = next.replace(/^import \{[^}]*Meta[^}]*\} from.*metaData.*\n/gm, "");
  next = next.replace(/export const Head = \(\) => \([\s\S]*?\);\s*\n/g, "");

  next = next.replace(/^import Header from.*\n/gm, "");
  next = next.replace(/^import Footer from.*\n/gm, "");
  next = next.replace(/^import Contact from.*\n/gm, "");
  next = next.replace(/^import BookMeetingCta from.*\n/gm, "");

  next = next.replace(/<div className="light-header">\s*<Header \/>\s*<\/div>\s*/g, "");
  next = next.replace(/<Header \/>\s*/g, "");
  next = next.replace(/<Footer \/>\s*/g, "");
  next = next.replace(/<Contact[^/]*\/>\s*/g, "");
  next = next.replace(/<BookMeetingCta[^/]*\/>\s*/g, "");

  next = next.replace(/href=['"]\/contact-us\/?['"]/g, 'href="/contact"');

  next = next.replace(
    /const ([a-zA-Z0-9_-]+)\.([a-zA-Z0-9_-]+) = (["']\/(?:image|icon)\/[^"']+["']);/g,
    "const $1_$2 = $3;",
  );

  return next;
}

for (const dir of targets) {
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".tsx")) continue;
    const filePath = path.join(dir, file);
    const cleaned = cleanup(fs.readFileSync(filePath, "utf8"));
    fs.writeFileSync(filePath, cleaned, "utf8");
    console.log("cleaned", file);
  }
}
