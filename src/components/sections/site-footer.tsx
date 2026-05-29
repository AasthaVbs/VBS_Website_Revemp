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

const quickLinks = [
  "Our Capabilities",
  "Engagement Model",
  "About us",
  "Leadership Team",
  "Careers",
  "Life at VBS",
] as const;

const resourceLinks = [
  "Case Studies",
  "Portfolio",
  "Testimonials",
  "Blog",
  "Webinar",
  "Whitepapers",
  "News",
] as const;

const legalLinks = ["Privacy policy", "Terms & Conditions", "Cookie policy"] as const;

function FooterLink({ label }: { label: string }) {
  return (
    <li className="pb-1.5">
      <a
        href="#"
        className="text-[16px] font-normal leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
      >
        {label}
      </a>
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] pt-[100px] text-[#CBCCCD]">
      <PageContainer className="flex flex-col gap-12">
        {/* Main row — Figma 1440px, space-between */}
        <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-start lg:gap-6">
          {/* Brand column — gap 30 */}
          <div className="flex max-w-[409px] flex-col items-start gap-[30px]">
            <div className="rounded-[7.22px] bg-white p-[14.43px] outline outline-[6px] outline-white/20">
              <Image
                src="/logos/logo.svg"
                alt="Virtual Building Studio"
                width={215}
                height={41}
                className="h-[41px] w-[215px]"
              />
            </div>
            <p className="max-w-[409px] text-[16px] font-normal leading-6 text-[#CBCCCD]">
              Always at the forefront, Virtual Building Studio leads the architecture industry with
              its innovative solution.
            </p>
            <div className="flex max-w-[360px] flex-wrap content-center items-center gap-[30px]">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full transition-opacity hover:opacity-80"
                >
                  <Image src={social.icon} alt="" width={24} height={24} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — heading gap 20, links gap 16 */}
          <div className="flex flex-col items-start gap-5">
            <h4 className="text-[24px] font-normal leading-tight text-[#CBCCCD]">
              Quick Links
            </h4>
            <ul className="flex flex-col items-start gap-4">
              {quickLinks.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </div>

          {/* Resources — width 160 */}
          <div className="flex w-full max-w-[160px] flex-col items-start gap-5">
            <h4 className="w-full text-[24px] font-normal leading-tight text-[#CBCCCD]">
              Resources
            </h4>
            <ul className="flex flex-col items-start gap-4">
              {resourceLinks.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </div>

          {/* Contact — width 250, gap 16 */}
          <div className="flex w-full max-w-[250px] flex-col items-start gap-4">
            <Image
              src="/icons/circle-flags_us.svg"
              alt="United States"
              width={30}
              height={30}
              className="h-[30px] w-[30px] shrink-0"
            />
            <p className="text-[16px] font-normal leading-6 text-[#CBCCCD]">
              712 Wilcrest Drive 1097
              <br />
              Houston, TX 77042 US
            </p>
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-5 w-5 items-center justify-center">
                <Phone className="h-[14px] w-[14px] text-[#CBCCCD]" strokeWidth={1.2} />
              </span>
              <span className="text-[16px] font-normal leading-6 text-[#CBCCCD]">
                +1 (409) 800-6601
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar — py 30, border #808080, legal gap 40 */}
        <div className="flex w-full flex-col items-start justify-between gap-5 border-t border-[#808080] py-[30px] md:flex-row md:items-center">
          <p className="text-[16px] font-normal leading-6 text-[#CBCCCD]">
            ©2026 Virtual Building Studio Inc.
          </p>
          <div className="flex flex-wrap items-center gap-10 lg:gap-[40px]">
            {legalLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] font-normal leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>

      {/* Theme strip — Figma 4px, exact brand colors */}
      <div className="flex h-1 w-full items-stretch">
        <span className="h-full flex-1 bg-[#D70416]" />
        <span className="h-full flex-1 bg-[#42AA32]" />
        <span className="h-full flex-1 bg-[#2299D6]" />
        <span className="h-full flex-1 bg-[#F0B300]" />
      </div>
    </footer>
  );
}
