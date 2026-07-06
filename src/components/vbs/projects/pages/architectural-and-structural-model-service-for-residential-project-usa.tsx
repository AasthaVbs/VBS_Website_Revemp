"use client";
// @ts-nocheck

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const bannerImage = "/image/blog-banner.png";
const CasestudyCheck = "/icon/casestudy-check.png";

const SwiperImage1 = "/image/project7-slider1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";


const ArchitecturalAndStructuralModel = () => {
    const data = [
        { id: 1, text: "LOD300 Architectural and Structural Model" },
        { id: 2, text: "Clash Detection and Interdisciplinary Coordination" }
    ];


    return (
        <>
            
            <section className="home-banner-2 pb-10 pt-4 vbs-project-detail-hero" style={{ backgroundImage: `url(${bannerImage})` }} >
                <Container>
                    <Col lg={9} xs={12} className="text-center mx-auto">
                        <div className="category-badge mb-2">
                            <Link href="/" className="category">
                                Residential Building
                            </Link>
                        </div>
                        <h1>Architectural BIM with Interior & Exterior Rendering</h1>
                    </Col>
                </Container>
            </section>
            <section className="py-10">
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={40}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="casestudy-swiper pb-9"
                >
                    <SwiperSlide>
                        <Image src={SwiperImage1} className="img-fluid" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="py-10">
                <Container>
                    <Col lg={9} xs={12} className="text-center mx-auto mb-5 mb-lg-8">
                        <h2>Capabilities of <span className="highlight-text">Top 1% Architects Engineers</span></h2>
                    </Col>
                    <Row lg={3} md={2} xs={1} className="g-6 justify-content-center mb-6">
                        {data.map((col, index) => (
                            <Col key={index}>
                                <div className={`p-5 h-100 text-center ${index % 2 === 0 ? 'bg-primary bg-opacity-10' : 'bg-light'}`}>
                                    <Image src={CasestudyCheck} width={56} height={56} className="mb-2" />
                                    <h4 className="mb-0 text-dark">{col.text}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Col lg={8} xs={12} className="mx-auto">
                        <div className="bg-primary p-4 rounded-3 text-center">
                            <div>
                                <h3 className="title text-white mb-3">Do you want to Hire Dedicated Resources for a similar Project?</h3>
                                <Link className="btn btn-light text-uppercase px-lg-4 py-12 fs-4 fw-semibold" href='/contact-us'>
                                    Access Top 1% Architects & Engineers in 3 Days
                                    <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
            </>
    );
};

export default ArchitecturalAndStructuralModel;
