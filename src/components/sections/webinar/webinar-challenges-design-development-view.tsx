"use client";

import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchFormPanel } from "@/components/sections/get-in-touch/get-in-touch-form-panel";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

const KEY_TAKEAWAYS = [
  "The top 5 challenges in design development (DD)",
  "How to address these challenges with effective solutions",
  "Best practices to enhance collaboration and efficiency during DD",
] as const;

const AUDIENCE = [
  "Architects and designers",
  "Engineers",
  "Project managers",
  "Design development professionals",
] as const;

export function WebinarChallengesInDesignDevelopmentView() {
  return (
    <div className="vbs-redesign-page vbs-webinar-detail-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="vbs-webinar-detail">
          <PageContainer>
            <div className="vbs-webinar-detail__stack">
              <h1 className="vbs-webinar-detail__title">
                Top 5 Challenges in Design Development (DD) and How to Overcome Them
              </h1>

              <div className="vbs-webinar-detail__layout">
                <article className="vbs-webinar-detail__main">
                  <div className="vbs-webinar-detail__body">
                    <div className="vbs-webinar-detail__content">
                      <p className="vbs-webinar-detail__pt-paragraph">
                        Design development can be complex, with many moving parts that lead to
                        challenges and slowdowns. In this webinar, we will cover the top five
                        hurdles faced during the DD phase and provide expert strategies to overcome
                        them. Whether you&apos;re an architect, designer, or project manager, this
                        session will help you ensure a smoother design process.
                      </p>

                      <h2 className="vbs-webinar-detail__section-title">Key Takeaways</h2>
                      <ul className="vbs-webinar-detail__pt-list">
                        {KEY_TAKEAWAYS.map((item) => (
                          <li key={item} className="vbs-webinar-detail__pt-list-item">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h2 className="vbs-webinar-detail__section-title">Who Should Watch</h2>
                      <ul className="vbs-webinar-detail__pt-list">
                        {AUDIENCE.map((item) => (
                          <li key={item} className="vbs-webinar-detail__pt-list-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>

                <aside className="vbs-webinar-detail__aside">
                  <div className="vbs-webinar-detail__sidebar-card">
                    <Link href="/webinar/" className="vbs-webinar-detail__back-link">
                      Go back to webinar
                    </Link>

                    <div className="vbs-webinar-detail__secure">
                      <h2 className="vbs-webinar-detail__secure-title">Secure Your Spot Today</h2>
                      <p className="vbs-webinar-detail__secure-desc">
                        Seats are limited! Register now to access expert-led insights, practical
                        strategies, and a live Q&amp;A designed to help you stay ahead in your
                        industry.
                      </p>
                    </div>

                    <PrimaryCtaButton
                      fullWidth
                      href="#webinar-register-form"
                      className="vbs-webinar-detail__register-btn"
                    >
                      Register Now
                    </PrimaryCtaButton>

                    <div id="webinar-register-form" className="vbs-webinar-detail__iframe-wrap">
                      <GetInTouchFormPanel />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
