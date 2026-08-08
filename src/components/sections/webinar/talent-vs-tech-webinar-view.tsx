"use client";

import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";

export function TalentVsTechWebinarView() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <div className="header-section">
        <SiteHeader />
      </div>
      <main className="surveyors-section webinar-detail-page">
        <section>
          <Image
            src="/image/talent-vs-tech-the-secret-boosting-your-architecture.jpg"
            alt="Talent vs Tech webinar banner"
            width={1920}
            height={600}
            className="w-100 img-fluid banner-img"
            priority
          />
        </section>
        <section className="pt-5">
          <Container>
            <Row lg={2} md={2} xs={1}>
              <Col lg={8} md={8} xs={12}>
                <section className="py-5 bg-light">
                  <Container>
                    <Col lg={12} md={12} xs={12}>
                      <h2 className="mb-lg-12">
                        Talent vs. Tech—What&apos;s <span className="highlight-text">the Secret to Boosting</span> Your
                        Architecture Practice?
                      </h2>
                      <p className="lead mb-4">
                        Architectural practices constantly balance leveraging top talent and adopting cutting-edge
                        technology to stay competitive. Join Virtual Building Studio (VBS) and BidLight for an exclusive
                        webinar where we explore the intersection of talent and tech, revealing how both can
                        significantly boost your firm&apos;s efficiency and project outcomes.
                      </p>
                      <p className="lead mb-5">Hear from industry experts as they present their unique approaches:</p>
                      <ul className="list-style">
                        <li className="fs-3">
                          ✅ Virtual Building Studio (VBS) offers the Virtual Studio service—providing access to the top
                          1% architects to help firms scale efficiently without compromising quality.
                        </li>
                        <li className="fs-3">
                          ✅ BidLight offers an automated cost estimation solution from BIM models—reducing project
                          delays and enhancing budgeting accuracy.
                        </li>
                      </ul>
                      <p className="mt-5">
                        Both VBS and BidLight will be exhibiting at AIA &apos;25, where you can experience first-hand
                        demos and learn more about how these approaches can transform your practice. Don&apos;t miss the
                        chance to get a sneak peek during the webinar and plan your visit to their booths!
                      </p>
                    </Col>
                  </Container>
                </section>
                <section>
                  <Container className="py-5">
                    <h3 className="mb-2">Key Takeaways </h3>
                    <ul className="list-style">
                      <li className="fs-3">
                        ✅ <strong>Talent or Technology? –</strong> Discover how both approaches can independently and
                        jointly enhance your practice.
                      </li>
                      <li className="fs-3">
                        ✅ <strong> VBS Virtual Studio (Service) –</strong> Access top architects to help your firm scale
                        efficiently.
                      </li>
                      <li className="fs-3">
                        ✅ <strong>BidLight&apos;s Automated Cost Estimation (Solution) –</strong> Reduce project delays
                        and improve budgeting with BIM integration.
                      </li>
                      <li className="fs-3">
                        ✅ <strong>See It Live at AIA &apos;25 –</strong> Get insights during the webinar and plan to
                        experience live demos at the event.
                      </li>
                    </ul>
                  </Container>
                </section>
                <section className="bg-light py-5">
                  <Container>
                    <h2 className="mb-1">Event Details</h2>
                    <Row lg={3} md={2} xs={1} className="g-2">
                      <Col>
                        <div className="bg-white p-3 h-100">
                          <p className="mb-lg-1">📅 Date</p>
                          <h6 className="mb-0">May, 22 2025 </h6>
                        </div>
                      </Col>
                      <Col>
                        <div className="bg-white p-3 h-100">
                          <p className="mb-lg-1">⏳ Time</p>
                          <h6 className="mb-0">11:00 AM EST</h6>
                        </div>
                      </Col>
                      <Col>
                        <div className="bg-white p-3 h-100">
                          <p className="mb-lg-1">📍 Live Webinar</p>
                          <h6 className="mb-0">Limited Spots Available!</h6>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="py-5">
                  <Container>
                    <div>
                      <Link
                        className="btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
                        target="_blank"
                        href="https://webinar.zoho.com/meeting/register?sessionId=1095143280"
                      >
                        Register Now
                        <i className="icon ms-2 fa fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </Container>
                </section>
              </Col>
              <Col lg={4}>
                <div className="contact-form bg-light mb-5 mb-md-0">
                  <h2 className="mb-3 ms-5 pt-3 pt-md-0">Event Details</h2>
                  <div className="me-3">
                    <div>
                      <iframe
                        width="360"
                        height="240"
                        src="https://webinar.zoho.com/meeting/register/embed?sessionId=1095143280"
                        title="Event Details"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
