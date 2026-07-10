"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import linkedinDefaultIcon from "@/assets/images/Social Media.svg";
import {
  leadershipMembersByTab,
  leadershipTeamSectionCopy,
  leadershipTeamTabs,
  type LeadershipMember,
  type LeadershipTabId,
} from "@/constants/leadership-content";
import { cn } from "@/lib/utils";

const TEAM_ROW_SIZE = 3;
const TEAM_FIRST_ROW_SIZE = 2;

function chunkTeamMembers(members: LeadershipMember[]): LeadershipMember[][] {
  if (members.length === 0) return [];

  const rows: LeadershipMember[][] = [members.slice(0, TEAM_FIRST_ROW_SIZE)];

  for (let index = TEAM_FIRST_ROW_SIZE; index < members.length; index += TEAM_ROW_SIZE) {
    rows.push(members.slice(index, index + TEAM_ROW_SIZE));
  }

  return rows;
}

/** Figma node 1985:31535 — Leadership Our Team */
export function LeadershipTeamSection() {
  const [activeTab, setActiveTab] = useState<LeadershipTabId>("operations");
  const members = leadershipMembersByTab[activeTab];
  const memberRows = chunkTeamMembers(members);

  return (
    <section className="vbs-leadership-team bg-white py-12 lg:py-[100px]">
      <PageContainer className="vbs-leadership-team__inner">
        <div className="vbs-leadership-team__header">
          <div className="vbs-leadership-team__title-block">
            <SectionTag label={leadershipTeamSectionCopy.tag} />
            <h2 className="text-section vbs-leadership-team__title capitalize">
              {leadershipTeamSectionCopy.titleLead}
              <span className="text-accent font-light">{leadershipTeamSectionCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-leadership-team__desc">{leadershipTeamSectionCopy.description}</p>
        </div>

        <div className="vbs-leadership-team__body">
          <div className="vbs-leadership-team__tabs" role="tablist" aria-label="Leadership team groups">
            {leadershipTeamTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "vbs-leadership-team__tab",
                    isActive ? "vbs-leadership-team__tab--active" : "vbs-leadership-team__tab--inactive",
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="vbs-leadership-team__rows" role="tabpanel">
            {memberRows.map((row, rowIndex) => (
              <div
                key={`${activeTab}-row-${rowIndex}`}
                className={cn(
                  "vbs-leadership-team__row",
                  rowIndex === 0 && "vbs-leadership-team__row--first",
                )}
              >
                {row.map((member) => (
                  <LeadershipMemberCard key={member.id} member={member} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function LeadershipMemberCard({ member }: { member: LeadershipMember }) {
  return (
    <article
      className={cn(
        "vbs-leadership-team__card group",
        member.featured && "vbs-leadership-team__card--featured",
      )}
    >
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
            <button type="button" className="vbs-leadership-team__view-more">
              <span>View More</span>
              <ChevronRight className="vbs-leadership-team__view-more-chevron" strokeWidth={1.5} aria-hidden />
            </button>

            {member.linkedinHref ? (
              <a
                href={member.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="vbs-leadership-team__linkedin"
                aria-label={`${member.name} on LinkedIn`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={linkedinDefaultIcon.src}
                  alt=""
                  className="vbs-leadership-team__linkedin-icon vbs-leadership-team__linkedin-icon--default"
                  width={34}
                  height={34}
                  aria-hidden
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon/linkedin.png"
                  alt=""
                  className="vbs-leadership-team__linkedin-icon vbs-leadership-team__linkedin-icon--hover"
                  width={34}
                  height={34}
                  aria-hidden
                />
              </a>
            ) : (
              <span className="vbs-leadership-team__linkedin" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={linkedinDefaultIcon.src}
                  alt=""
                  className="vbs-leadership-team__linkedin-icon"
                  width={34}
                  height={34}
                  aria-hidden
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
