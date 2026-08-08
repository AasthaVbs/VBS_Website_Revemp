"use client";

import { Container } from "react-bootstrap";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { WebinarCheckTick } from "@/components/sections/webinar/webinar-check-tick";
import { WebinarRegisterForm } from "@/components/sections/webinar/webinar-register-form";

export function WebinarChallengesInDesignDevelopmentView() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <SiteHeader />
      <main className="webinar-section webinar-detail-page">
        <section className="webinar-detail-layout">
          <Container>
            <div className="webinar-detail-wrap">
              <header className="webinar-detail-hero">
                <h1 className="webinar-detail-hero__title">
                  <span className="highlight-text">Top 5 Challenges in Design Development (DD)</span> and How to Overcome
                  Them
                </h1>
                <div className="webinar-detail-hero__intro webinar-detail-content text-secondary lead">
                  <p>
                    Design development can be complex, with many moving parts that lead to challenges and slowdowns. In
                    this webinar, we will cover the top five hurdles faced during the DD phase and provide expert
                    strategies to overcome them. Whether you&apos;re an architect, designer, or project manager, this
                    session will help you ensure a smoother design process.
                  </p>
                </div>
              </header>
              <hr className="webinar-detail-divider" />
              <div className="webinar-detail-body">
                <div className="webinar-detail-content webinar-detail-sections">
                  <h2 className="webinar-detail-section-heading">Key Takeaways</h2>
                  <ul className="list-style">
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">The top 5 challenges in design development (DD)</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">How to address these challenges with effective solutions</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">
                        Best practices to enhance collaboration and efficiency during DD
                      </span>
                    </li>
                  </ul>
                  <h2 className="webinar-detail-section-heading webinar-detail-section-heading--audience">
                    Who Should Watch
                  </h2>
                  <ul className="list-style">
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Architects and designers</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Engineers</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Project managers</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Design development professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <WebinarRegisterForm />
      </main>
      <SiteFooter />
    </div>
  );
}
