"use client";

import { Container } from "react-bootstrap";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { WebinarCheckTick } from "@/components/sections/webinar/webinar-check-tick";
import { WebinarGatedVideoModal } from "@/components/sections/webinar/webinar-gated-video-modal";
import { WebinarRegisterForm } from "@/components/sections/webinar/webinar-register-form";

export function WebinarCommonMistakesView() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <div className="light-header">
        <SiteHeader />
      </div>
      <main className="webinar-section webinar-detail-page webinar-detail-page--has-video">
        <section className="webinar-detail-layout">
          <Container>
            <div className="webinar-detail-wrap">
              <header className="webinar-detail-hero">
                <h1 className="webinar-detail-hero__title">
                  5 Common <span className="highlight-text">Mistakes to Avoid</span> When Creating Permit Sets
                </h1>
                <section className="webinar-detail-video-feature" aria-label="Webinar video">
                  <p className="webinar-detail-video-feature__eyebrow">Watch on Demand</p>
                  <div className="video-frame">
                    <WebinarGatedVideoModal
                      thumbnailSrc="/image/webinar-with-rory-gabriel.jpg"
                      videoUrl="https://www.youtube.com/watch?v=ypDIhjWhFmA"
                      layout="hero"
                      formVariant="none"
                    />
                  </div>
                </section>
                <div className="webinar-detail-hero__intro webinar-detail-content text-secondary lead">
                  <p>
                    Are you struggling with delays in your permit process? This webinar will help you identify common
                    mistakes and provide actionable steps to avoid them. Our expert speaker will guide you through the
                    pitfalls that can slow down your projects and offer solutions to keep things moving efficiently.
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
                      <span className="webinar-check-text">The 5 most common errors in creating permit sets</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">How to avoid these pitfalls and save time</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Practical tips to streamline your approval process</span>
                    </li>
                  </ul>
                  <h2 className="webinar-detail-section-heading webinar-detail-section-heading--audience">
                    Who Should Watch
                  </h2>
                  <ul className="list-style">
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Architects and engineers</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Project managers</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Professionals creating permit sets</span>
                    </li>
                    <li className="webinar-check-item">
                      <WebinarCheckTick />
                      <span className="webinar-check-text">Professionals submitting permit sets</span>
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
