import { Mail, MapPin, Phone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchFormPanel } from "@/components/sections/get-in-touch/get-in-touch-form-panel";
import { SectionIntro } from "@/components/sections/section-primitives";
import {
  contactGetInTouchDescription,
  contactGetInTouchDetails,
} from "@/constants/contact-content";
import { cn } from "@/lib/utils";

export function GetInTouchSection({
  description = contactGetInTouchDescription,
  sectionId = "contact",
  className,
}: {
  description?: string;
  sectionId?: string;
  className?: string;
}) {
  const { phone, phoneHref, email, emailHref, addressLine1, addressLine2 } =
    contactGetInTouchDetails;

  return (
    <section
      id={sectionId}
      className={cn("vbs-get-in-touch-section bg-[#FAFAFA]", className)}
    >
      <PageContainer className="vbs-get-in-touch__layout">
        <div className="vbs-get-in-touch__info-col">
          <div className="vbs-get-in-touch__info-head">
            <SectionIntro
              tag="Contact Us"
              title={
                <>
                  <span className="font-medium text-[#111111]">Get </span>
                  <span className="font-medium lowercase text-[#111111]">i</span>
                  <span className="font-medium text-[#111111]">n </span>
                  <span className="text-accent font-light">Touch</span>
                </>
              }
              description={description}
              titleClassName="text-section max-w-[528px] normal-case"
              descriptionClassName="max-w-[435px] text-[16px] font-normal leading-6 text-[#808080]"
            />
          </div>

          <div className="vbs-get-in-touch__info-contacts">
            <a href={phoneHref} className="vbs-get-in-touch__info-contact">
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span className="lowercase">{phone}</span>
            </a>
            <a href={emailHref} className="vbs-get-in-touch__info-contact">
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              <span className="lowercase">{email}</span>
            </a>
            <div className="vbs-get-in-touch__info-contact vbs-get-in-touch__info-contact--address">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
              <span>
                <span className="vbs-get-in-touch__address-line1">{addressLine1}</span>
                <span className="vbs-get-in-touch__address-line2">{addressLine2}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="vbs-get-in-touch__form-col">
          <GetInTouchFormPanel />
        </div>
      </PageContainer>
    </section>
  );
}
