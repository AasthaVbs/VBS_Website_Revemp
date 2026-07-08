import { GetInTouchFormPanel } from "@/components/sections/get-in-touch/get-in-touch-form-panel";
import { GetInTouchInfoContacts } from "@/components/sections/get-in-touch/get-in-touch-info-contacts";
import { GetInTouchSectionLayout } from "@/components/sections/get-in-touch/get-in-touch-section-layout";
import { SectionIntro } from "@/components/sections/section-primitives";
import { contactGetInTouchDescription } from "@/constants/contact-content";
import { cn } from "@/lib/utils";

const defaultDescription =
  "Let's discuss your requirements and see how our expertise can help on your next project.";

export function GetInTouchSection({
  description = contactGetInTouchDescription ?? defaultDescription,
  sectionId = "contact",
  sectionClassName = "",
  className,
  tag = "Contact Us",
  titleLead = "Get in ",
  titleAccent = "Touch",
  titleClassName = "text-section max-w-[528px] normal-case",
  descriptionClassName = "max-w-[435px] capitalize text-[#808080]",
}: {
  description?: string;
  sectionId?: string;
  sectionClassName?: string;
  className?: string;
  tag?: string;
  titleLead?: string;
  titleAccent?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  const sectionClasses = cn("vbs-get-in-touch-section", sectionClassName, className);

  return (
    <section id={sectionId} className={sectionClasses}>
      <GetInTouchSectionLayout
        info={
          <>
            <div className="vbs-get-in-touch__info-head">
              <SectionIntro
                tag={tag}
                title={
                  <>
                    {titleLead}
                    <strong className="text-accent font-light">{titleAccent}</strong>
                  </>
                }
                description={description}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
              />
            </div>
            <GetInTouchInfoContacts />
          </>
        }
        form={<GetInTouchFormPanel />}
      />
    </section>
  );
}
