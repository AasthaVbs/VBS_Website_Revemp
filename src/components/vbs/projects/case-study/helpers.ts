import overviewLodIcon from "@/assets/images/Capa_1.svg";
import overviewAreaIcon from "@/assets/images/svg2433.svg";
import overviewLocationIcon from "@/assets/images/svg3447.svg";
import overviewManpowerIcon from "@/assets/images/svg1113.svg";

export const overviewChipIcons = {
  lod: overviewLodIcon,
  area: overviewAreaIcon,
  location: overviewLocationIcon,
  manpower: overviewManpowerIcon,
};

export function toExecutionSteps(labels: string[]): { number: string; title: string; text: string }[] {
  return labels.map((title, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    text: title,
  }));
}
