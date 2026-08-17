const overviewLodIcon = "/image/Capa_1.svg";
const overviewAreaIcon = "/image/svg2433.svg";
const overviewLocationIcon = "/image/svg3447.svg";
const overviewManpowerIcon = "/image/svg1113.svg";

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
