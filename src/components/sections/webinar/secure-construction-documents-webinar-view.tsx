"use client";

import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/sections/site-footer";

export function SecureConstructionDocumentsWebinarView() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <div className="header-section">
        <SiteHeader />
      </div>
      <main className="surveyors-section webinar-detail-page">
        <section
          className="home-banner-2 py-10 mt-9"
          style={{
            backgroundImage: "url(/image/webinar-banner.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container />
        </section>
        <section>
          <Container>
            <Row lg={2} md={2} xs={1}>
              <Col lg={8} md={8} xs={12}>
                <section className="py-5">
                  <Container>
                    <Col lg={12} md={12} xs={12}>
                      <h1 className="mb-lg-12">
                        Ensure Accuracy & <span className="highlight-text">Compliance in Your</span> Construction
                        Documents
                      </h1>
                      <p className="lead mb-0">
                        Mistakes in construction documents can lead to costly delays and compliance issues. This webinar
                        will cover three essential steps to improve documentation quality, minimize risks, and enhance
                        project success.
                      </p>
                    </Col>
                  </Container>
                </section>
                <section className="bg-light">
                  <Container className="py-5">
                    <h3 className="mb-2">What You&apos;ll Learn </h3>
                    <ul className="list-style">
                      <li className="fs-3">✅ Importance of document accuracy in construction projects</li>
                      <li className="fs-3">✅ Common compliance challenges and how to address them</li>
                      <li className="fs-3">✅ Best practices for securing and reviewing documents</li>
                      <li className="fs-3">✅ Tools and automation for improving accuracy</li>
                      <li className="fs-3">✅ Case study: How a firm secured its construction documents</li>
                    </ul>
                  </Container>
                </section>
                <section>
                  <Container className="py-5">
                    <h2 className="mb-1">Bonus </h2>
                    <p className="text-secondary lead">
                      Exclusive Offer: Get 1 Month Free Access to Architect Staff Level I for your documentation
                      process!
                    </p>
                  </Container>
                </section>
                <section className="bg-light py-5">
                  <Container>
                    <h2 className="mb-1">Event Details</h2>
                    <Row lg={3} md={2} xs={1} className="g-2">
                      <Col>
                        <div className="bg-white p-3 h-100">
                          <p className="mb-lg-1">📅 Date</p>
                          <h6 className="mb-0">March 27, 2025</h6>
                        </div>
                      </Col>
                      <Col>
                        <div className="bg-white p-3 h-100">
                          <p className="mb-lg-1">⏳ Time</p>
                          <h6 className="mb-0">09:00 AM CST</h6>
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
                        className="btn btn-lightblue fs-3 mb-4"
                        target="_blank"
                        href="https://webinar.zoho.com/meeting/register?sessionId=1014361861"
                      >
                        Register Now
                        <i className="icon ms-2 fa fa-long-arrow-alt-right" />
                      </Link>
                    </div>
                  </Container>
                </section>
              </Col>
              <Col lg={4}>
                <div className="contact-form bg-light my-5">
                  <h2 className="mb-3 ms-5">Event Details</h2>
                  <div className="me-3">
                    <div>
                      <iframe
                        width="360"
                        height="240"
                        src="https://webinar.zoho.com/meeting/register/embed?sessionId=1014361861"
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
