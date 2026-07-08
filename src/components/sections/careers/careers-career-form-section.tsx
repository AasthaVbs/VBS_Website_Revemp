import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { careersFormSectionCopy } from "@/constants/careers-content";

/** "No Current Openings?" — same Figma Get in Touch layout as Contact / About. */
export function CareersCareerFormSection() {
  const copy = careersFormSectionCopy;

  return (
    <GetInTouchSection
      sectionId="career-form"
      sectionClassName="scroll-mt-24 vbs-careers-career-form"
      tag={copy.tag}
      titleLead={copy.titleLead}
      titleAccent={copy.titleAccent}
      description={copy.description}
      titleClassName="text-section vbs-careers-career-form__title capitalize"
      descriptionClassName="max-w-[435px] capitalize text-[#808080]"
    />
  );
}
