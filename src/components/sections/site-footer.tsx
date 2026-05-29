import Image from "next/image";
import { Phone } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";

const footerSocialLinks = [
  { label: "Twitter", href: "#", icon: "/icons/social/twitter.svg" },
  { label: "Instagram", href: "#", icon: "/icons/social/instagram.svg" },
  { label: "Facebook", href: "#", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", href: "#", icon: "/icons/social/linkedin.svg" },
  { label: "YouTube", href: "#", icon: "/icons/social/youtube.svg" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] pt-[100px] text-[#CBCCCD]">
      <PageContainer className="space-y-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-6">
            <Image
              src="/logos/logo.svg"
              alt="Virtual Building Studio"
              width={215}
              height={41}
              className="rounded bg-white p-2"
            />
            <p className="max-w-[409px] text-[16px] text-[#CBCCCD]">
              Always at the forefront, Virtual Building Studio leads the architecture industry with
              its innovative solution.
            </p>
            <div className="flex items-center gap-4">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#CBCCCD]/30 transition-colors hover:border-[#CBCCCD]"
                >
                  <Image src={social.icon} alt="" width={18} height={18} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[24px] font-normal capitalize text-[#CBCCCD]">Quick Links</h4>
            <ul className="mt-5 space-y-4 text-[16px]">
              {[
                "Our Capabilities",
                "Engagement Model",
                "About us",
                "Leadership Team",
                "Careers",
                "Life at VBS",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[24px] font-normal capitalize text-[#CBCCCD]">Resources</h4>
            <ul className="mt-5 space-y-4 text-[16px]">
              {[
                "Case Studies",
                "Portfolio",
                "Testimonials",
                "Blog",
                "Webinar",
                "Whitepapers",
                "News",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Image
              src="/icons/circle-flags_us.svg"
              alt="United States"
              width={30}
              height={30}
              className="shrink-0"
            />
            <p className="text-[16px] text-[#CBCCCD]">712 Wilcrest Drive 1097 Houston, TX 77042 US</p>
            <div className="inline-flex items-center gap-2.5 text-[16px]">
              <Phone className="h-5 w-5 text-[#CBCCCD]" />
              +1 (409) 800-6601
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-[#808080] py-[30px] text-[16px] md:flex-row md:items-center">
          <p>©2026 Virtual Building Studio Inc.</p>
          <div className="flex flex-wrap items-center gap-8">
            <span>Privacy policy</span>
            <span>Terms & Conditions</span>
            <span>Cookie policy</span>
          </div>
        </div>
      </PageContainer>

      <div className="flex h-1 w-full items-center">
        <span className="h-full flex-1 bg-vbs-red" />
        <span className="h-full flex-1 bg-vbs-green" />
        <span className="h-full flex-1 bg-vbs-blue" />
        <span className="h-full flex-1 bg-vbs-yellow" />
      </div>
    </footer>
  );
}
