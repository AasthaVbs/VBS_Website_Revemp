"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  leadershipMembersByTab,
  leadershipTeamSectionCopy,
  leadershipTeamTabs,
  type LeadershipMember,
  type LeadershipTabId,
} from "@/constants/leadership-content";
import { cn } from "@/lib/utils";

function groupMembersByRow(members: LeadershipMember[]): LeadershipMember[][] {
  const keyed = new Map<number, LeadershipMember[]>();

  members.forEach((member, index) => {
    const row = member.row ?? Math.floor(index / 3) + 1;
    const list = keyed.get(row) ?? [];
    list.push(member);
    keyed.set(row, list);
  });

  return [...keyed.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, list]) => list);
}

function ViewMoreControl({ member }: { member: LeadershipMember }) {
  const label = "View More";

  if (member.viewMoreHref) {
    return (
      <Link href={member.viewMoreHref} className="vbs-leadership-team__view-more">
        <span>{label}</span>
        <ChevronRight className="vbs-leadership-team__view-more-chevron" strokeWidth={1.5} aria-hidden />
      </Link>
    );
  }

  return (
    <span className="vbs-leadership-team__view-more">
      <span>{label}</span>
      <ChevronRight className="vbs-leadership-team__view-more-chevron" strokeWidth={1.5} aria-hidden />
    </span>
  );
}

function LinkedInControl({ member }: { member: LeadershipMember }) {
  if (!member.linkedinHref) {
    return null;
  }

  return (
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
            <ViewMoreControl member={member} />
            <LinkedInControl member={member} />
          </div>
        </div>
      </div>
    </article>
  );
}

function LeadershipMemberGrid({ members }: { members: LeadershipMember[] }) {
  const rows = useMemo(() => groupMembersByRow(members), [members]);

  if (!members.length) {
    return (
      <p className="vbs-leadership-team__empty">No team members listed for this group yet.</p>
    );
  }

  return (
    <div className="vbs-leadership-team__cards">
      {rows.map((row, index) => (
        <div
          key={row.map((member) => member.name).join("-")}
          className={cn(
            "vbs-leadership-team__row",
            row.length <= 2 && "vbs-leadership-team__row--2",
          )}
        >
          {row.map((member) => (
            <LeadershipMemberCard key={`${index}-${member.name}`} member={member} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Figma node 1985:31535 — Leadership Our Team */
export function LeadershipTeamSection() {
  const [activeTab, setActiveTab] = useState<LeadershipTabId>(leadershipTeamTabs[0].id);
  const activeMembers = useMemo(
    () => leadershipMembersByTab[activeTab] ?? [],
    [activeTab],
  );

  return (
    <section className="vbs-leadership-team bg-white py-12 lg:py-[100px]">
      <PageContainer className="vbs-leadership-team__inner">
        <div className="vbs-leadership-team__header">
          <div className="vbs-leadership-team__title-block">
            <SectionTag label={leadershipTeamSectionCopy.tag} />
            <h2 className="text-section vbs-leadership-team__title">
              {leadershipTeamSectionCopy.titleLead}
              <span className="text-accent font-light">{leadershipTeamSectionCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-leadership-team__desc">{leadershipTeamSectionCopy.description}</p>
        </div>

        <div className="vbs-leadership-team__body">
          <div className="vbs-leadership-team__tabs" role="tablist" aria-label="Leadership groups">
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

          <div role="tabpanel">
            <LeadershipMemberGrid members={activeMembers} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
