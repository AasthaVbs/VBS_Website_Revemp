import fs from "fs";

const src =
  "C:/Projects/Websites/VBS_WEB/virtual-building-studio/src/constants/vbs-resource-catalog-content.js";
const dest =
  "C:/Projects/Websites/VBS_WEB/virtual-building-studio-main/src/constants/resource-catalog-content.ts";

let content = fs.readFileSync(src, "utf8");
content = content
  .replace("./vbs-resources-page-content", "@/constants/resources-page-content")
  .replace("./vbs-projects-catalog-content", "@/constants/projects-catalog-content")
  .replace("./vbs-client-success-stories", "@/constants/client-success-stories-content");
fs.writeFileSync(dest, content);
console.log("done");
