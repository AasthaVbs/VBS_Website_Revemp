import { PageContainer } from "@/components/layout/page-container";
import { SiteHeader } from "@/components/layout/site-header";
import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { DeferredGetInTouchSection, DeferredSiteFooter } from "@/lib/lazy-page-sections";

import "@/styles/vbs-practice-page.scss";

const REGISTER_URL = "https://webinar.zoho.com/meeting/register?sessionId=1023748207";

export function PracticePage() {
  return (
    <div className="vbs-redesign-page practice-section-page practice-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <section className="practice-hero" aria-label="Practice">
        <img
          className="practice-hero__image"
          src="/images/practise-banner.jpg"
          alt=""
          role="presentation"
        />
        <div className="practice-hero__overlay" aria-hidden="true" />
        <PageContainer className="practice-hero__inner">
          <div className="practice-hero__copy">
            <h1 className="practice-hero__title">
              <span className="practice-hero__title-light">
                Ideas, conversations and insights on{" "}
              </span>
              <span className="practice-hero__title-medium">
                the future of architecture practice.
              </span>
            </h1>
            <p className="practice-hero__topics">
              Design. Delivery. Visualization. AI. Collaboration. Growth.
            </p>
            <p className="practice-hero__intro">
              Architecture is changing. Explore the ideas and conversations shaping how better
              architecture practices are being built.
            </p>
            <PrimaryCtaButton
              fullWidth={false}
              href="#practice-events"
              className="practice-hero__cta"
            >
              What&apos;s Next
            </PrimaryCtaButton>
          </div>
        </PageContainer>
      </section>

      <section id="practice-events" className="practice-events" aria-label="Upcoming conversations">
        <PageContainer>
          <div className="practice-events__grid">
            <article className="practice-event-card">
              <div className="practice-event-card__media">
                <img
                  src="/images/webinar-with-alec-whitten.jpg"
                  alt="Building Better Architecture Practices live webinar with Alec Whitten"
                />
              </div>
              <div className="practice-event-card__body">
                <h2>Building Better Architecture Practices</h2>
                <p className="practice-event-card__lead">
                  A conversation about better design, better delivery, visualization, AI and
                  sustainable growth.
                </p>
                <p className="practice-event-card__note">
                  Alec Whitten will be hosting a live session for Principals, firm leaders,
                  project architects, and architects involved in shaping how their practice
                  works and grows.
                </p>
                <PrimaryCtaButton
                  fullWidth={false}
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for the conversation
                </PrimaryCtaButton>
              </div>
            </article>

            <article className="practice-event-card">
              <div className="practice-event-card__media">
                <img src="/images/aia-san-diego-design-awards.jpg" alt="AIA San Diego Design Awards 2026" />
              </div>
              <div className="practice-event-card__body">
                <h2>Celebrating Inventive Architecture Practices</h2>
                <p className="practice-event-card__lead">
                  Alec will be attending Design Awards 2026 in San Diego, where Virtual
                  Building Studio is proud to be a sponsor of the event.
                </p>
                <p className="practice-event-card__note">
                  He&apos;ll be connecting with architecture leaders, exchanging perspectives
                  and exploring how the profession, and the architecture practice, is evolving.
                </p>
                <BookMeetingButton fullWidth={false} />
              </div>
            </article>
          </div>
        </PageContainer>
      </section>

      <section className="practice-meet" aria-label="Meet Alec">
        <PageContainer>
          <div className="practice-meet__layout">
            <div className="practice-meet__heading">
              <span className="practice-meet__tag">Meet Alec</span>
              <h2 className="practice-meet__title">
                <span className="practice-meet__title-dark">Alec Whitten - </span>
                <span className="practice-meet__title-accent">
                  Strategic Advisor,
                  <br />
                  Virtual Building Studio
                </span>
                <span className="practice-meet__title-dark practice-meet__title-role">
                  Principal - Whitten Architects
                </span>
              </h2>
            </div>
            <div className="practice-meet__portrait">
              <img
                src="/images/alec-whitten.jpg"
                alt="Alec Whitten, Strategic Advisor at Virtual Building Studio"
              />
            </div>
            <div className="practice-meet__body">
              <p>
                Alec brings two perspectives to the conversation: the experience of leading an
                architecture practice and the perspective of helping firms think differently
                about how they design, deliver and grow.
              </p>
              <p>
                His focus is on building better architecture practices through stronger
                collaboration, better systems, thoughtful use of technology and continuous
                improvement.
              </p>
              <BookMeetingButton fullWidth={false}>Connect With Alec</BookMeetingButton>
            </div>
          </div>
        </PageContainer>
      </section>

      <DeferredGetInTouchSection />
      <DeferredSiteFooter />
    </div>
  );
}
