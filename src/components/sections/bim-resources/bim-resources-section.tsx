import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { BimResourcesDownloadForm } from "@/components/sections/bim-resources/bim-resources-download-form";
import {
  bimResourcesContent,
  type BimResourcePageContent,
} from "@/constants/bim-resources-content";

import "@/styles/vbs-bim-resources.scss";

/** Figma node 4344:54318 — BIM Resources download layout */
export function BimResourcesSection({
  content = bimResourcesContent,
}: {
  content?: BimResourcePageContent;
}) {
  const {
    title,
    description,
    heroImage,
    heroImageAlt,
    highlightsHeading,
    highlights,
    closing,
    additionalHeading,
    relatedLinks,
  } = content;

  return (
    <section
      className="bim-resources-section bg-white py-8 sm:py-10 lg:py-[60px]"
      aria-labelledby="bim-resources-title"
    >
      <PageContainer className="!px-3">
        <div className="bim-resources__layout flex flex-col items-stretch gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-[30px]">
          <div className="flex min-w-0 flex-1 flex-col gap-6 sm:gap-8 lg:gap-[30px]">
            <div className="bim-resources__hero relative aspect-[1010/640] w-full overflow-hidden rounded-[16px] bg-[#f5f5f5] sm:rounded-[21px] lg:h-[640px] lg:aspect-auto">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                priority
                unoptimized={typeof heroImage === "string"}
                sizes="(max-width: 1024px) calc(100vw - 24px), 1010px"
                className="object-cover object-center"
              />
            </div>

            <div className="flex w-full flex-col gap-6 sm:gap-8 lg:gap-[30px]">
              <div className="flex flex-col gap-4 sm:gap-5">
                <h1 id="bim-resources-title" className="bim-resources__title">
                  {title}
                </h1>
                <p className="bim-resources__body">{description}</p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-5">
                {highlightsHeading ? (
                  <h2 className="bim-resources__section-heading">{highlightsHeading}</h2>
                ) : null}

                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="bim-resources__highlight-title">{item.title}</h3>
                    <p className="bim-resources__body">{item.body}</p>
                    {item.extraBody ? <p className="bim-resources__body">{item.extraBody}</p> : null}
                  </div>
                ))}

                {closing ? <p className="bim-resources__body">{closing}</p> : null}
              </div>

              <div className="flex flex-col gap-4 sm:gap-5">
                <h2 className="bim-resources__section-heading">{additionalHeading}</h2>
                <div className="bim-resources__related-grid grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  {relatedLinks.map((link) => (
                    <Link
                      key={`${link.href}-${link.title}`}
                      href={link.href}
                      className="flex min-w-0 flex-col items-start justify-center gap-2.5 rounded-[10px] border border-[#2299D6] border-l-4 bg-[rgba(34,153,214,0.06)] p-4 sm:p-5 no-underline transition-opacity hover:opacity-90"
                    >
                      <span className="bim-resources__related-label">{link.label}</span>
                      <span className="bim-resources__related-title">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bim-resources__sidebar w-full shrink-0 lg:w-[400px] lg:max-w-[400px]">
            <BimResourcesDownloadForm content={content} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
