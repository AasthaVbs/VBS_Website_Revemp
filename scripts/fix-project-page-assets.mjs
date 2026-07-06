import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dirs = [
  path.join(root, "src", "components", "vbs", "projects", "pages"),
  path.join(root, "src", "components", "vbs", "projects", "hvac-case"),
];

function fixFile(filePath) {
  let code = fs.readFileSync(filePath, "utf8");

  code = code.replace(/\r\n/g, "\n");
  code = code.replace(/^import Seo from.*\n/gm, "");
  code = code.replace(/^import \{[^}]*Meta[^}]*\} from.*metaData.*\n/gm, "");
  code = code.replace(/export const Head = \(\) => \([\s\S]*?\);\s*\n/g, "");
  code = code.replace(/^import Header from.*\n/gm, "");
  code = code.replace(/^import Footer from.*\n/gm, "");
  code = code.replace(/^import Contact from.*\n/gm, "");
  code = code.replace(/<div className="light-header">\s*<\/div>\s*/g, "");
  code = code.replace(/<Header \/>\s*/g, "");
  code = code.replace(/<Footer \/>\s*/g, "");
  code = code.replace(/<Contact[^/]*\/>\s*/g, "");

  fs.writeFileSync(filePath, code, "utf8");
}

for (const dir of dirs) {
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".tsx")) continue;
    fixFile(path.join(dir, file));
    console.log("fixed", file);
  }
}
