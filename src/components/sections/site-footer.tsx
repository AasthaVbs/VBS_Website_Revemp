import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import footerBgImg from "@/assets/images/BG Image Footer 1.png";
import { PageContainer } from "@/components/layout/page-container";
import { VBS_FOOTER_URLS } from "@/constants/navigation";

const footerSocialLinks = [
  { label: "Twitter", href: "#", icon: "/icons/social/twitter.svg" },
  { label: "Instagram", href: "#", icon: "/icons/social/instagram.svg" },
  { label: "Facebook", href: "#", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", href: "#", icon: "/icons/social/linkedin.svg" },
  { label: "YouTube", href: "#", icon: "/icons/social/youtube.svg" },
] as const;

const quickLinks = [
  { label: "Our Capabilities", href: VBS_FOOTER_URLS.capabilities },
  { label: "Engagement Model", href: VBS_FOOTER_URLS.dedicatedTeam },
  { label: "About us", href: VBS_FOOTER_URLS.aboutUs },
  { label: "Leadership Team", href: VBS_FOOTER_URLS.leadershipTeam },
  { label: "Careers", href: VBS_FOOTER_URLS.careers },
  { label: "Life at VBS", href: VBS_FOOTER_URLS.lifeAtVbs },
] as const;

const resourceLinks = [
  { label: "Blog", href: VBS_FOOTER_URLS.blog },
  { label: "Case Studies", href: VBS_FOOTER_URLS.projects },
  { label: "Whitepapers", href: VBS_FOOTER_URLS.whitepaper },
  { label: "Webinar", href: VBS_FOOTER_URLS.webinar },
  { label: "Testimonials", href: VBS_FOOTER_URLS.testimonials },
  { label: "Portfolio", href: VBS_FOOTER_URLS.projects },
  { label: "News", href: VBS_FOOTER_URLS.bimResources },
] as const;

const legalLinks = [
  { label: "Privacy policy", href: VBS_FOOTER_URLS.privacyPolicy },
  { label: "Terms & Conditions", href: VBS_FOOTER_URLS.termsOfUse },
  { label: "Cookie policy", href: VBS_FOOTER_URLS.cookiePolicy },
] as const;

const officeLocations = [
  { label: "Texas", showPin: true },
  { label: "New Jersey", showBullet: true },
  { label: "India", showBullet: true },
] as const;

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="vbs-site-footer__link inline-flex pb-1 text-[16px] font-normal capitalize leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
      >
        {label}
      </Link>
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="vbs-site-footer relative overflow-hidden bg-[#111111] text-[#CBCCCD]">
      <Image
        src={footerBgImg}
        alt=""
        fill
        className="vbs-site-footer__bg pointer-events-none object-cover object-center"
        sizes="100vw"
        priority={false}
        aria-hidden
      />

      <PageContainer className="vbs-site-footer__container relative z-[1] flex flex-col gap-8">
        <div className="vbs-site-footer__main flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-start lg:gap-5">
          <div className="vbs-site-footer__brand flex max-w-[374px] flex-col items-start gap-5">
            <Link href="/" className="inline-flex shrink-0" aria-label="Virtual Building Studio home">
              <Image
                src="/logos/logo.svg"
                alt="Virtual Building Studio"
                width={301}
                height={64}
                className="vbs-site-footer__logo h-[64px] w-auto max-w-[301px]"
              />
            </Link>
            <p className="vbs-site-footer__brand-copy max-w-[374px] text-[16px] font-normal leading-6 text-[#CBCCCD]">
              Always at the forefront, Virtual Building Studio leads the AEC industry with its
              innovative solution.
            </p>
            <div className="vbs-site-footer__socials flex max-w-[360px] flex-wrap content-center items-center gap-3">
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

          <div className="vbs-site-footer__link-columns flex w-full flex-row gap-4 sm:gap-6 lg:contents">
            <div className="vbs-site-footer__column vbs-site-footer__column--quick-links flex min-w-0 flex-1 flex-col items-start gap-4 sm:max-w-[160px] sm:flex-none">
              <h4 className="vbs-site-footer__column-title text-[24px] font-normal capitalize leading-tight text-[#CBCCCD]">
                Quick Links
              </h4>
              <ul className="vbs-site-footer__link-list flex flex-col items-start gap-3">
                {quickLinks.map((item) => (
                  <FooterLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>

            <div className="vbs-site-footer__column vbs-site-footer__column--resources flex min-w-0 flex-1 flex-col items-start gap-4 sm:max-w-[160px] sm:flex-none">
              <h4 className="vbs-site-footer__column-title w-full text-[24px] font-normal capitalize leading-tight text-[#CBCCCD]">
                Resources
              </h4>
              <ul className="vbs-site-footer__link-list flex flex-col items-start gap-3">
                {resourceLinks.map((item) => (
                  <FooterLink key={item.label} label={item.label} href={item.href} />
                ))}
              </ul>
            </div>
          </div>

          <div className="vbs-site-footer__contact flex w-full max-w-[316px] flex-col items-start gap-3">
            <Image
              src="/icons/circle-flags_us.svg"
              alt="United States"
              width={30}
              height={30}
              className="h-[30px] w-[30px] shrink-0"
            />
            <p className="vbs-site-footer__address text-[16px] font-normal capitalize leading-6 text-[#CBCCCD]">
              <span className="vbs-site-footer__address-line1 block">
                1004, 5605 N MacArthur Blvd #1000
              </span>
              <span className="vbs-site-footer__address-line2 block">Irving, TX 75038, USA</span>
            </p>
            <a
              href="tel:+14098006601"
              className="inline-flex items-center gap-2.5 text-[16px] font-normal capitalize leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
            >
              <Phone className="h-5 w-5 shrink-0 text-[#CBCCCD]" strokeWidth={1.2} aria-hidden />
              +1 (409) 800-6601
            </a>
            <a
              href="mailto:contact@virtualbuildingstudio.com"
              className="inline-flex items-center gap-2.5 text-[16px] font-normal lowercase leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#CBCCCD]" strokeWidth={1.2} aria-hidden />
              contact@virtualbuildingstudio.com
            </a>
            <div className="vbs-site-footer__locations">
              <ul className="vbs-site-footer__location-list">
                {officeLocations.map((location) => (
                  <li
                    key={location.label}
                    className={
                      location.showPin
                        ? "vbs-site-footer__location-item vbs-site-footer__location-item--primary"
                        : "vbs-site-footer__location-item vbs-site-footer__location-item--bullet"
                    }
                  >
                    {location.showPin ? (
                      <MapPin
                        className="vbs-site-footer__location-icon h-5 w-5 shrink-0 text-[#CBCCCD]"
                        strokeWidth={1.2}
                        aria-hidden
                      />
                    ) : (
                      <span className="vbs-site-footer__location-bullet" aria-hidden>
                        •
                      </span>
                    )}
                    <span className="text-[16px] font-normal capitalize leading-6 text-[#CBCCCD]">
                      {location.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="vbs-site-footer__bottom flex w-full flex-col items-start justify-between gap-4 border-t border-[#808080] py-5 md:flex-row md:items-center lg:py-6">
          <p className="text-[16px] font-normal capitalize leading-6 text-[#CBCCCD]">
            ©2026 Virtual Building Studio Inc.
          </p>
          <div className="vbs-site-footer__legal flex flex-wrap items-center gap-10 lg:gap-[40px]">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[16px] font-normal capitalize leading-6 text-[#CBCCCD] transition-opacity hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>

      <div className="vbs-site-footer__strip relative z-[1] flex h-1 w-full items-stretch">
        <span className="h-full flex-1 bg-[#D70416]" />
        <span className="h-full flex-1 bg-[#42AA32]" />
        <span className="h-full flex-1 bg-[#F0B300]" />
        <span className="h-full flex-1 bg-[#2299D6]" />
      </div>
    </footer>
  );
}
