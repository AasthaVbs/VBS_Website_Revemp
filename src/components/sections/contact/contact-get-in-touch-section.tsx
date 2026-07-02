import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import getInTouchImg from "@/assets/images/image 56.png";
import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { ClientOnlyZohoContactForm } from "@/components/zoho/client-only-zoho-contact-form";
import { contactGetInTouchDescription } from "@/constants/contact-content";

/**
 * Contact page only — image left, form right (Figma).
 * Does not modify the shared GetInTouchSection used on home / MEP.
 */
export function ContactGetInTouchSection() {
  return (
    <section id="get-in-touch" className="vbs-get-in-touch-section vbs-contact-page-get-in-touch bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="grid items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-[30px]">
        <div className="relative order-1 min-h-[380px] overflow-hidden rounded-[20px] bg-[#111111] shadow-[0_4px_10px_rgba(0,0,0,0.15)] sm:min-h-[480px] lg:order-1 lg:min-h-[680px]">
          <Image
            src={getInTouchImg}
            alt="Contact support representative"
            fill
            className="object-cover object-center lg:object-[72%_35%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.2)_0%,rgba(17,17,17,0.85)_55%,#111111_100%)] lg:bg-[linear-gradient(90deg,#111111_0%,#111111_35%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.15)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex max-w-[320px] flex-col gap-5 text-white sm:bottom-10 sm:left-10 sm:gap-8">
            <div className="inline-flex items-center gap-2.5">
              <Phone className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal">+1 (409) 800-6601</span>
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal">contact@virtualbuildingstudio.com</span>
            </div>
            <div className="inline-flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-[16px] font-normal lowercase">
                712 wilcrest drive 1097 houston, tx 77042 us
              </span>
            </div>
          </div>
        </div>

        <div className="order-2 flex min-w-0 flex-col gap-6 lg:order-2 lg:min-h-[680px] lg:gap-[30px]">
          <SectionIntro
            tag="Contact Us"
            title={
              <>
                Get in <span className="text-accent font-light">Touch</span>
              </>
            }
            description={contactGetInTouchDescription}
            titleClassName="text-section max-w-[528px] normal-case"
            descriptionClassName="max-w-[435px] capitalize text-[#808080]"
          />

          <div className="vbs-contact-zoho-wrap vbs-contact-page-zoho-wrap w-full">
            <ClientOnlyZohoContactForm visibleHeightCap={null} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
