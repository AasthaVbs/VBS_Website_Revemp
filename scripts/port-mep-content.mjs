import fs from "fs";

const src = new URL(
  "../../virtual-building-studio/src/constants/vbs-mep-engineers-content.js",
  import.meta.url,
);
const dest = new URL("../src/constants/mep-engineers-content.ts", import.meta.url);

let content = fs.readFileSync(src, "utf8");
content = content
  .replace('from "./vbs-navigation"', 'from "@/constants/navigation"')
  .replace('from "./vbs-service-why-choose-icons"', 'from "@/constants/service-why-choose-icons"');
content = `import type { StatItem } from "@/constants/shared-sections";\n\n${content}`;
content = content.replace(
  "export const mepStatsStrip = [",
  "export const mepStatsStrip: StatItem[] = [",
);
fs.writeFileSync(dest, content);
console.log("Wrote", dest.pathname);
