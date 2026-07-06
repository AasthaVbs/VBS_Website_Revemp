// @ts-nocheck
"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import {
  mepDisciplinePanels,
  mepDisciplinesSection,
} from "@/constants/mep-engineers-content";

function DisciplineMetaList({ items }) {
  return (
    <ul className="mep-figma-disciplines__meta-list">
      {items.map((item) => (
        <li key={item.label} className="mep-figma-disciplines__meta-item">
          <div className="mep-figma-disciplines__meta-label">{item.label}</div>
          <div className="mep-figma-disciplines__meta-value">{item.value}</div>
        </li>
      ))}
    </ul>
  );
}

function DeliverableCheckIcon({ alignStart }) {
  return (
    <span className={cn("mep-figma-disciplines__check", alignStart && "mt-0.5")} aria-hidden>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" className="mep-figma-disciplines__check-mark">
        <path
          d="M1 3.5L3.5 6L9 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DeliverableItem({ text, alignStart }) {
  return (
    <li
      className={cn(
        "flex gap-2.5 self-stretch",
        alignStart ? "items-start" : "items-center",
      )}
    >
      <DeliverableCheckIcon alignStart={alignStart} />
      <span className="mep-figma-disciplines__deliverable-text flex-1">{text}</span>
    </li>
  );
}

function DisciplinePanel({ panel }) {
  return (
    <div className="mep-figma-disciplines__panel w-full p-2.5">
      <div className="mep-figma-disciplines__body shrink-0">
        <div className="flex w-full flex-col gap-[19.25px] overflow-hidden">
          <h3 className="mep-figma-disciplines__panel-title py-1">{panel.title}</h3>
          <p className="mep-figma-disciplines__panel-desc">{panel.description}</p>
        </div>
        <DisciplineMetaList items={panel.meta} />
      </div>

      <div className="mep-figma-disciplines__deliverables">
        <h4 className="mep-figma-disciplines__deliverables-title">{panel.deliverablesTitle}</h4>
        <ul className="mep-figma-disciplines__deliverables-list">
          {panel.deliverables.map((item, index) => (
            <DeliverableItem key={item} text={item} alignStart={index < 2} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Core MEP Disciplines — Figma node 289-10637.
 */
export function MepDisciplinesSection({
  section = mepDisciplinesSection,
  panels = mepDisciplinePanels,
  tabsAriaLabel = "MEP disciplines",
}) {
  const [activeId, setActiveId] = useState(panels[0].id);
  const activePanel = panels.find((panel) => panel.id === activeId) ?? panels[0];

  return (
    <section id="disciplines" className="mep-figma-disciplines bg-white py-[100px]">
      <PageContainer className="mep-figma-disciplines__container flex flex-col items-start">
        <div className="mep-figma-disciplines__intro flex w-full flex-col items-start">
          <div className="mep-figma-disciplines__intro-heading flex flex-col items-start">
            <span className="text-tag inline-flex w-fit items-center justify-center rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 capitalize text-[#2299D6]">
              {section.tag}
            </span>
            <h2
              className={cn("capitalize", !section.titleMaxWidth && "max-w-[759px]")}
              style={section.titleMaxWidth ? { maxWidth: `${section.titleMaxWidth}px` } : undefined}
            >
              <span className="text-section font-medium text-[#111111]">{section.titleLine1}</span>
              <span className="text-section text-accent font-light">{section.titleLine2}</span>
              {section.titleLine3 ? (
                <span className="text-section font-medium text-[#111111]">{section.titleLine3}</span>
              ) : null}
            </h2>
          </div>
          <p
            className={cn("mep-figma-disciplines__section-desc", !section.descriptionMaxWidth && "max-w-[730px]")}
            style={section.descriptionMaxWidth ? { maxWidth: `${section.descriptionMaxWidth}px` } : undefined}
          >
            {section.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-5">
          <div
            className="mep-figma-disciplines__tabs inline-flex items-end gap-2.5"
            role="tablist"
            aria-label={tabsAriaLabel}
          >
            {panels.map((panel) => {
              const isActive = panel.id === activeId;
              return (
                <button
                  key={panel.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`discipline-panel-${panel.id}`}
                  id={`discipline-tab-${panel.id}`}
                  onClick={() => setActiveId(panel.id)}
                  className={cn(
                    "mep-figma-disciplines__tab rounded-[10px] px-4 py-2 text-[16px] capitalize backdrop-blur-[50px]",
                    isActive
                      ? "mep-figma-disciplines__tab--active bg-[#D70416] font-semibold text-white"
                      : "mep-figma-disciplines__tab--inactive bg-[#FAFAFA] font-normal text-[#111111]",
                  )}
                >
                  {panel.tabLabel}
                </button>
              );
            })}
          </div>

          <div
            id={`discipline-panel-${activePanel.id}`}
            role="tabpanel"
            aria-labelledby={`discipline-tab-${activePanel.id}`}
            className="w-full"
          >
            <DisciplinePanel panel={activePanel} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
