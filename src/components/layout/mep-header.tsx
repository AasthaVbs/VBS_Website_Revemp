"use client";

import React, { useState } from "react";
import { Container, Navbar, Nav, Image, Offcanvas } from "react-bootstrap";
import Link from "next/link";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

type MepMenuItem = {
  label: string;
  sectionId: string;
};

type MepHeaderProps = {
  menuItems: MepMenuItem[];
  onSectionClick: (sectionId: string) => void;
  onBookMeeting?: (event?: React.MouseEvent | React.SyntheticEvent) => void;
};

export function MepHeader({ menuItems, onSectionClick, onBookMeeting }: MepHeaderProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setShowMobileNav(false);
    onSectionClick(sectionId);
  };

  const handleBookMeeting = (event?: React.MouseEvent | React.SyntheticEvent) => {
    setShowMobileNav(false);
    onBookMeeting?.(event);
  };

  return (
    <div className="navbar-fixed mep-header-root">
      <Navbar className="large-navbar flex-column d-block py-0">
        <div>
          <Container className="border-bottom border-primary border-opacity-25">
            <div className="header-line py-1 d-flex justify-content-end align-items-center flex-wrap">
              <p className="mb-0 me-4 fs-4">
                <a
                  className="text-decoration-none text-secondary d-inline-flex align-items-center gap-1"
                  href="mailto:contact@virtualbuildingstudio.com"
                >
                  <i className="text-primary fa fa-envelope" />
                  contact@virtualbuildingstudio.com
                </a>
              </p>
              <p className="mb-0 fs-4">
                <a
                  className="text-secondary text-decoration-none d-inline-flex align-items-center gap-1"
                  href="tel:+14098006601"
                >
                  <i className="text-primary fa fa-phone" />
                  +1 (409) 800-6601
                </a>
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              className="me-2"
              src="/image/logo.svg"
              width={294}
              height={56}
              alt="virtualbuilding studio"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mep-custom-header-nav" />
          <Navbar.Collapse id="mep-custom-header-nav" className="justify-content-end">
            <Nav className="me-1 align-items-lg-center">
              {menuItems.map((item, idx) => (
                <React.Fragment key={item.sectionId}>
                  <button
                    type="button"
                    className="nav-link bg-transparent border-0 p-0 me-2"
                    onClick={() => handleSectionClick(item.sectionId)}
                  >
                    {item.label}
                  </button>
                  {idx < menuItems.length - 1 ? <span className="me-2 text-secondary" /> : null}
                </React.Fragment>
              ))}
            </Nav>
            {onBookMeeting ? (
              <div className="mep-header-book-host">
                <PrimaryCtaButton
                  fullWidth={false}
                  className="vbs-header-book-cta primary-cta--highlighted"
                  onClick={handleBookMeeting}
                >
                  Book a Meeting
                </PrimaryCtaButton>
              </div>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="mobile-navbar">
        {[false].map((expand) => (
          <Navbar key={String(expand)} expand={expand} className="navbar-fixed">
            <Container>
              <Navbar.Toggle
                aria-controls={`mep-offcanvas-navbar-${expand}`}
                onClick={() => setShowMobileNav(true)}
              />
              <Navbar.Brand as={Link} href="/" className="mx-auto">
                <Image src="/image/logo.svg" width={200} height={56} alt="virtualbuilding studio" />
              </Navbar.Brand>
              <Navbar.Offcanvas
                id={`mep-offcanvas-navbar-${expand}`}
                aria-labelledby={`mep-offcanvas-navbar-label-${expand}`}
                placement="start"
                show={showMobileNav}
                onHide={() => setShowMobileNav(false)}
              >
                <Offcanvas.Header closeButton className="d-flex align-items-center">
                  <Offcanvas.Title id={`mep-offcanvas-navbar-label-${expand}`}>
                    <Link href="/" className="d-inline-block">
                      <Image
                        className="me-2"
                        src="/image/logo.svg"
                        width={200}
                        height={56}
                        alt="virtualbuilding studio"
                      />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column">
                  <Nav className="justify-content-start flex-grow-1 pe-3 mb-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.sectionId}
                        type="button"
                        className="nav-link text-start bg-transparent border-0 p-0 mb-3"
                        onClick={() => handleSectionClick(item.sectionId)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </Nav>
                  {onBookMeeting ? (
                    <div className="vbs-mobile-nav-cta">
                      <PrimaryCtaButton
                        fullWidth
                        className="vbs-header-book-cta primary-cta--highlighted"
                        onClick={handleBookMeeting}
                      >
                        Book a Meeting
                      </PrimaryCtaButton>
                    </div>
                  ) : null}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  );
}
