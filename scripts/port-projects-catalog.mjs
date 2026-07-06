import fs from "fs";

const src = new URL(
  "../../virtual-building-studio/src/constants/vbs-projects-catalog-content.js",
  import.meta.url,
);
const dest = new URL("../src/constants/projects-catalog-content.ts", import.meta.url);

fs.copyFileSync(src, dest);
console.log("Wrote", dest.pathname);
