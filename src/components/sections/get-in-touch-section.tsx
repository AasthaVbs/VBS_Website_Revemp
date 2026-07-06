import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import getInTouchImg from "@/assets/images/image 56.png";
import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { ClientOnlyZohoContactForm } from "@/components/zoho/client-only-zoho-contact-form";

export function GetInTouchSection({
  description = "Let's discuss your requirements and see how our expertise can help on your next project.",
  sectionId = "contact",
}: {
  description?: string;
  sectionId?: string;
}) {
  return (
    <section id={sectionId} className="vbs-get-in-touch-section bg-[#FAFAFA]">
      <PageContainer className="vbs-get-in-touch__layout">
        <div className="vbs-get-in-touch__visual-slot">
          <div className="vbs-get-in-touch__visual">
            <Image
              src={getInTouchImg}
              alt="Contact support representative"
              fill
              className="vbs-get-in-touch__visual-img"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            <div className="vbs-get-in-touch__visual-gradient" aria-hidden />
            <div className="vbs-get-in-touch__visual-contacts">
              <div className="vbs-get-in-touch__visual-contact">
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                <span>+1 (409) 800-6601</span>
              </div>
              <div className="vbs-get-in-touch__visual-contact">
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                <span>contact@virtualbuildingstudio.com</span>
              </div>
              <div className="vbs-get-in-touch__visual-contact">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                <span className="lowercase">
                  712 wilcrest drive 1097 houston, tx 77042 us
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="vbs-get-in-touch__form-col">
          <div className="vbs-get-in-touch__intro">
            <SectionIntro
              tag="Contact Us"
              title={
                <>
                  Get in <span className="text-accent font-light">Touch</span>
                </>
              }
              description={description}
              titleClassName="text-section max-w-[528px] normal-case"
              descriptionClassName="max-w-[435px] capitalize text-[#808080]"
            />
          </div>

          <div className="vbs-contact-zoho-wrap w-full">
            <ClientOnlyZohoContactForm />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
