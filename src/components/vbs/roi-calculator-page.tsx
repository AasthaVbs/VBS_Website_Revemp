"use client";

import { useState } from "react";

import ProprietarySolution from "@/components/roi/proprietary-solution";
import RoiResultsTable from "@/components/roi/roi-results-table";
import type { RoiLeadFormValues, StaffRow } from "@/components/roi/types";
import { SiteHeader } from "@/components/layout/site-header";
import { PageContainer } from "@/components/layout/page-container";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

const BANNER_IMAGE = "/image/blog-banner.png";

const SECTION_HEADING = `<h2><span class="text-accent">Compare Savings and Benefits</span><br /> Using Our DRM Solution with the DIY Calculator</h2>`;

export function RoiCalculatorPage() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState<RoiLeadFormValues | null>(null);
  const [staffRows, setStaffRows] = useState<StaffRow[]>([
    { typeOfResource: 2, numberOfResources: 0, contractTenure: 0 },
  ]);

  const handleFormSubmit = (values: RoiLeadFormValues) => {
    setFormSubmitted(true);
    setFormValues(values);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormValues(null);
  };

  return (
    <div className="vbs-redesign-page roi-calculator-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main>
        <section
          className="home-banner-2 roi-calculator-banner"
          style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
        >
          <PageContainer>
            <div className="blog-banner text-center">
              <h1 className="title roi-calculator-banner__title">
                DIY ROI Validation <br />
                Conventional Architects VS US-Trained Remote Registered Architects
              </h1>
            </div>
          </PageContainer>
        </section>

        {isFormSubmitted ? (
          <RoiResultsTable
            staffRows={staffRows}
            handleResetForm={handleResetForm}
            text={SECTION_HEADING}
          />
        ) : (
          <ProprietarySolution
            onFormSubmit={handleFormSubmit}
            staffRows={staffRows}
            setStaffRows={setStaffRows}
            formValues={formValues}
            text={SECTION_HEADING}
          />
        )}

        <DeferredGetInTouchSection />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
