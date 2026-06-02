import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  leadershipMembers,
  leadershipTeamSectionCopy,
  type LeadershipMember,
} from "@/constants/leadership-content";

/** Figma node 958:32517 — Leadership members grid */
export function LeadershipTeamSection() {
  const [first, second, third, fourth] = leadershipMembers;

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={leadershipTeamSectionCopy.tag} />
            <h2 className="text-section max-w-[760px] capitalize">
              {leadershipTeamSectionCopy.titleLead}
              <span className="text-accent font-light">{leadershipTeamSectionCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[673px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {leadershipTeamSectionCopy.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {leadershipTeamSectionCopy.tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-[10px] px-5 py-3 text-[16px] capitalize ${
                index === 0
                  ? "bg-[#D70416] font-semibold text-white"
                  : "bg-[#FAFAFA] font-normal text-[#111111]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid w-full gap-[30px] xl:grid-cols-3">
          {[first, second, third].map((member) =>
            member ? <LeadershipMemberCard key={member.name} member={member} /> : null,
          )}
        </div>
        {fourth ? (
          <div className="grid w-full gap-[30px] xl:grid-cols-3">
            <LeadershipMemberCard member={fourth} />
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}

function LeadershipMemberCard({ member }: { member: LeadershipMember }) {
  return (
    <article
      className={`overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white ${
        member.featured ? "shadow-[0_4px_15px_rgba(0,0,0,0.20)]" : ""
      }`}
    >
      <div className="relative h-[330px] overflow-hidden bg-[#FAFAFA]">
        <div className="absolute left-5 top-5 z-10 grid grid-cols-2 gap-0">
          <span className="h-[30px] w-[29px] bg-[#F0B300]" />
          <span className="h-[30px] w-[29px] bg-[#2299D6]" />
          <span className="h-[30px] w-[29px] bg-[#42AA32]" />
          <span className="h-[30px] w-[29px] bg-[#D70416]" />
        </div>
        <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
      </div>

      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2.5">
          <h3 className="text-[24px] font-medium leading-[1.3] text-[#111111]">{member.name}</h3>
          <p className="text-[16px] font-medium leading-6 text-[#808080]">{member.role}</p>
          <p className="text-[16px] font-normal leading-6 text-[#808080]">{member.bio}</p>
        </div>

        <button type="button" className="inline-flex w-fit items-center gap-1.5 text-[#2299D6]">
          <span className="text-[16px] font-normal">View More</span>
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}
