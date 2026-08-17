import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { aiaTeamCopy, aiaTeamMembers } from "@/constants/aia-conference-events-content";

export function AiaTeamSection() {
  return (
    <section className="aia-team bg-white py-12 lg:py-[100px]">
      <PageContainer className="aia-team__inner">
        <div className="aia-team__intro">
          <div className="aia-team__headline">
            <SectionTag label={aiaTeamCopy.tag} />
            <h2 className="text-section capitalize">
              {aiaTeamCopy.titleLead}
              <span className="text-accent font-light">{aiaTeamCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="m-0 max-w-[534px] text-[16px] font-normal leading-6 text-[#808080]">
            {aiaTeamCopy.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-5">
          <div className="aia-team__grid">
            {aiaTeamMembers.map((member) => (
              <article key={member.name} className="vbs-leadership-team__card group">
                <div className="vbs-leadership-team__card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="vbs-leadership-team__card-photo"
                    loading="lazy"
                  />
                </div>
                <div className="vbs-leadership-team__card-body">
                  <div className="vbs-leadership-team__card-content">
                    <div className="vbs-leadership-team__card-copy">
                      <h3 className="vbs-leadership-team__card-name">{member.name}</h3>
                      <p className="vbs-leadership-team__card-role">{member.role}</p>
                    </div>
                    <div className="vbs-leadership-team__card-footer">
                      <Link href={member.viewMoreHref} className="vbs-leadership-team__view-more">
                        <span>View More</span>
                        <ChevronRight
                          className="vbs-leadership-team__view-more-chevron"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </Link>
                      <a
                        href={member.linkedinHref}
                        className="vbs-leadership-team__linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/icons/social/linkedin-leadership-gray.svg"
                          alt=""
                          className="vbs-leadership-team__linkedin-icon vbs-leadership-team__linkedin-icon--default"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/icons/social/linkedin-leadership-colored.svg"
                          alt=""
                          className="vbs-leadership-team__linkedin-icon vbs-leadership-team__linkedin-icon--hover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="aia-callout">
            <p className="aia-callout__text">{aiaTeamCopy.note}</p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
