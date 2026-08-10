"use client";

import { useEffect, useRef, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import { AiaConferenceBrandsLogo } from "@/components/aia/aia-conference-brands-logo";
import { SiteHeader } from "@/components/layout/site-header";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";
import { AIA_FAQ_ITEMS } from "@/constants/aia-conference-events-content";
import {
  ensureNimbusBookingScript,
  openBookMeetingModal,
  NIMBUS_BOOKING_SCRIPT_SRC,
} from "@/utils/nimbus-booking";

const DEFAULT_BTN_CLASS =
  "btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold";
const NIMBUS_AVAILABLE_SLOTS_URL =
  "https://booknow.virtualbuildingstudio.com/portal-embed#/4689125000003287142";
const NIMBUS_SCRIPT_SRC = NIMBUS_BOOKING_SCRIPT_SRC;

const FAQ_ITEMS = AIA_FAQ_ITEMS;

type TestimonialVideo = {
  image: string;
  video: string;
  label: string;
};

function AiFillYoutube({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566A2.997 2.997 0 0 0 .502 6.186 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

const TEAM = [
  {
    role: "Founder & CEO",
    name: "Ar. Ankit Kansara",
    blurb: "Delivery strategy & scaling",
    img: "/image/Ankit-Kansara.jpg",
    alt: "CEO",
  },
  {
    role: "VP - Sales",
    name: "Obi Anaele",
    blurb: "Multi-project environments",
    img: "/image/Obi-Anaele.jpg",
    alt: "EVP Sales",
  },
  {
    role: "EVP - Sales",
    name: "Sounak Banerjee",
    blurb: "Understanding delivery challenges",
    img: "/image/Sounak-Banarjee.jpg",
    alt: "VP Sales",
  },

  {
    role: "AVP - Sales",
    name: "Manish Dey",
    blurb: "Workflow & team integration",
    img: "/image/Manish-Dey-2.jpg",
    alt: "AVP Sales",
  },
];

const PRESSURE_POINTS = [
  {
    iconClass: "fa fa-chart-line",
    text: "Firms are leaving work on the table - not because they don't want it, but because they can't staff fast enough to take it on",
  },
  {
    iconClass: "fa fa-users",
    text: "Hiring takes 90+ days - by the time the seat is filled, the project window has closed",
  },
  {
    iconClass: "fa fa-clock",
    text: "Traditional outsourcing breaks the standards - freelancers don't hold your templates, your review cycles, or your QA discipline",
  },
  {
    iconClass: "fa fa-shield-alt",
    text: "Scaling permanent headcount is a cost trap - fixed overhead in a project pipeline that moves in waves",
  },
];
const TESTIMONIAL_VIDEOS = [
  {
    image: "https://img.youtube.com/vi/2NsLtpdtMto/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=2NsLtpdtMto",
    label: "Scaling project delivery",
  },
  {
    image: "https://img.youtube.com/vi/uyaBPQrNhW0/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=uyaBPQrNhW0",
    label: "Integrating teams into workflows",
  },
  {
    image: "https://img.youtube.com/vi/nHNRCMkaGAk/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=nHNRCMkaGAk",
    label: "Maintaining quality and standards",
  },
];
const WALKTHROUGH_POINTS = [
  {
    num: "01",
    title: "The conversation.",
    text: "Tell us about a live project, where pressure is building, and what your delivery setup looks like today.",
  },
  {
    num: "02",
    title: "How the build works.",
    text: "A dedicated production team - yours alone - assembled in sixty minutes through our AI-augmented delivery infrastructure. Not freelancers. Not outsourcing. A third option.",
  },
  {
    num: "03",
    title: "What it unlocks.",
    text: "Production starts in three days. Aligned to your templates, your standards, your review cycles. Same pace as your in-house bench, without the hiring overhead.",
  },
];

/** Hero carousel (auto-rotate). Third slide keeps prior AIA hero for a full trio. */
const HERO_CAROUSEL_IMAGES = [
  "/image/aia-banner-bg-image-2026.png",
  "/image/aia-banner-2nd.jpg",
  "/image/header-%20banner-image-3.webp",

];

const AIA_CONFERENCE_PAGE_STYLES = `
.aia26-root {
  --red:#D70416;--red-dk:#a8030f;--red-xs:#FFF4F4;--black:#000;--ink:#0D0D0D;--white:#fff;--off:#FAFAFA;
  --g100:#F3F4F6;--g200:#E5E7EB;--g300:#D1D5DB;--g500:#6B7280;--g700:#374151;
  --font:"Segoe UI",system-ui,sans-serif;--max:1200px;--r:14px;--sh:0 2px 12px rgba(0,0,0,.06);--sh-lg:0 24px 64px rgba(0,0,0,.14);
  font-family:var(--font);background:var(--white);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:hidden;padding-bottom:72px;
}
.aia26-root *,.aia26-root *::before,.aia26-root *::after{box-sizing:border-box;margin:0;padding:0;}
.aia26-root a,.aia26-root button{cursor:pointer!important;text-decoration:none;}
.aia26-root img{display:block;width:100%;height:100%;object-fit:cover;}
.aia26-root h1,.aia26-root .h1{line-height:58px!important;letter-spacing:.005em!important;font-weight:600!important;color:var(--black);}
.aia26-root h2,.aia26-root .h2{line-height:48px!important;font-weight:600!important;color:var(--black);}
.aia26-root h3,.aia26-root .h3{line-height:34px!important;font-weight:600!important;color:var(--black);}
.aia26-root h4,.aia26-root .h4{line-height:28px!important;font-weight:600!important;color:var(--black);}
.aia26-root .lead{font-size:18px!important;font-weight:400;line-height:30px;}
.aia26-root p{font-size:16px!important;font-weight:400!important;line-height:28px!important;}
.aia26-root .wrap{max-width:var(--max);margin:0 auto;padding:0 48px;}
.aia26-root .container{margin:0 auto;}
.aia26-root .section{padding:26px 48px;}
.aia26-root .section--off{background:var(--off);}
.aia26-root .eyebrow{display:inline-flex;align-items:center;gap:12px;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:18px;}
.aia26-root .eyebrow::before{content:"";width:32px;height:2px;background:var(--red);flex-shrink:0;}
.aia26-root .btn{display:inline-flex;align-items:center;gap:10px;}
.aia26-root .btn.btn-lightblue{
  padding:12px 26px !important;
  min-height:50px;
  border-radius:999px !important;
  font-size:16px !important;
  line-height:1.2 !important;
}
.aia26-root #cta .btn.btn-lightblue{width:auto !important;max-width:100%;align-self:center;}
.aia26-root #hero{background:var(--white);padding:32px 48px 64px;border-bottom:1px solid var(--g200);}
.aia26-root .hero-inner{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:1.12fr .88fr;align-items:center;}
.aia26-root .hero-l{min-width:0;}
.aia26-root .hero-tag{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--g200);border-radius:99px;padding:8px 18px;font-size:13px;font-weight:600;color:var(--g700);margin-bottom:12px;margin-top:12px;background:var(--white);}
.aia26-root .hero-tag-dot{width:8px;height:8px;background:var(--red);border-radius:50%;flex-shrink:0;box-shadow:0 0 0 3px rgba(215,4,22,.2);animation:aiaPulse 2s ease-in-out infinite;}
@keyframes aiaPulse{0%,100%{box-shadow:0 0 0 3px rgba(215,4,22,.2);}50%{box-shadow:0 0 0 6px rgba(215,4,22,.08);}}
.aia26-root .hero-l h1{font-size:clamp(34px,4.5vw,52px)!important;line-height:58px!important;letter-spacing:-.02em!important;font-weight:700!important;color:var(--black);margin-bottom:24px;}
.aia26-root .hero-l h1 .accent{color:var(--red);}
.aia26-root .hero-l .lead{color:var(--g700);margin-bottom:20px;max-width:440px;}
.aia26-root .hero-actions{display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
.aia26-root .hero-actions .btn{max-width:100%;white-space:normal;text-align:center;}
.aia26-root .hero-note{font-size:13px!important;color:var(--g500);display:flex;align-items:center;gap:6px;margin-top:16px;line-height:1!important; margin-left:3px;}
.aia26-root .hero-divider{width:100%;height:1px;background:var(--g200);margin:40px 0;}
.aia26-root .hero-stats{display:flex;gap:0;}
.aia26-root .hs{flex:1;padding:0 28px;border-right:1px solid var(--g200);}
.aia26-root .hs:first-child{padding-left:0;}
.aia26-root .hs:last-child{border-right:none;}
.aia26-root .hs-num{font-size:32px;font-weight:700;color:var(--red);letter-spacing:-.02em;line-height:1;margin-bottom:6px;}
.aia26-root .hs-lbl{font-size:13px!important;color:var(--g500);line-height:1.4!important;}
.aia26-root .hero-r{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:4/3;max-height:420px;box-shadow:var(--sh-lg);}
.aia26-root .hero-carousel{position:absolute;inset:0;}
.aia26-root .hero-carousel-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.2s ease-in-out;will-change:opacity;z-index:0;}
.aia26-root .hero-carousel-img.is-active{opacity:1;z-index:1;}
.aia26-root .hero-r:hover .hero-carousel-img.is-active{transform:scale(1.03);transition:opacity 1s ease, transform .6s ease;}
.aia26-root .hero-r-overlay{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,transparent 40%,rgba(0,0,0,.6) 100%);}
.aia26-root .hero-r-card{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:10px 20px;display:flex;flex-direction:column;gap:16px;}
.aia26-root .hero-r-badge{display:inline-flex;align-items:center;gap:8px;background:var(--red);color:var(--white);border-radius:8px;padding:8px 16px;font-size:13px;font-weight:700;align-self:flex-start;}
.aia26-root .hero-r-text{color:rgba(255,255,255,.9);font-size:15px!important;font-weight:600!important;line-height:22px!important;}
.aia26-root #team{background:#FAFAFA;}
.aia26-root #team.section{padding-top:4px;}
.aia26-root .team-header{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:48px;gap:8px;}
.aia26-root .team-header-left h2{font-size:clamp(26px,3vw,38px)!important;}
.aia26-root .team-header-right{font-size:15px!important;color:var(--g500);text-align:left;max-width:100%;line-height:24px!important;}
.aia26-root .team-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;background:transparent;}
.aia26-root .tc{background:var(--white);position:relative;overflow:hidden;border-radius:14px;transition:background .22s;}
.aia26-root .tc:hover{background:var(--off);}
.aia26-root .tc > *{position:relative;z-index:1;}
@property --aiaBorderSweep{
  syntax:"<angle>";
  initial-value:0deg;
  inherits:false;
}
.aia26-root .tc::before{
  content:"";
  position:absolute;
  inset:0;
  padding:3px;
  border-radius:inherit;
  pointer-events:none;
  z-index:3;
  opacity:0;
  --aiaBorderSweep:0deg;
  background:conic-gradient(from 180deg, var(--red) var(--aiaBorderSweep), transparent 0);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  transition:opacity .28s ease;
}
.aia26-root .tc:hover::before{
  opacity:1;
  animation:aiaBorderTrace 1.05s cubic-bezier(.22,.61,.36,1) forwards;
}
@keyframes aiaBorderTrace{
  from{--aiaBorderSweep:0deg;}
  to{--aiaBorderSweep:360deg;}
}
.aia26-root .tc,
.aia26-root .eb,
.aia26-root #videos .video-thumbnail,
.aia26-root .cta-l,
.aia26-root .prob-right,
.aia26-root .walk-img-wrap{
  box-shadow:0 10px 28px rgba(17,24,39,.08);
}
.aia26-root .tc-img{aspect-ratio:3/4;position:relative;overflow:hidden;}
.aia26-root .tc-img img{transition:transform .5s ease;}
.aia26-root .tc:hover .tc-img img{transform:scale(1.05);}
.aia26-root .tc-img-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.65) 0%,transparent 55%);}
.aia26-root .tc-tag{position:absolute;right:16px;bottom:16px;background:#ffffff;color:#050505;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px;border-radius:4px;}
.aia26-root .tc-body{padding:22px 20px 24px;}
.aia26-root .tc-body h4{font-size:18px!important;margin-bottom:4px;}
.aia26-root .tc-body p{font-size:14px!important;color:var(--g500);line-height:20px!important; font-weight:500!important;}
.aia26-root .tc-line{position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.4,0,.2,1);}
.aia26-root .tc:hover .tc-line{transform:scaleX(1);}
.aia26-root .team-note{text-align:center;margin-top:32px;font-size:18px!important;font-style:italic;color:#282828;line-height:1!important; font-weight:600!important}
.aia26-root .team-note-red{text-align:center;margin-top:32px;font-size:18px!important;font-style:italic;color:var(--red);line-height:1!important; font-weight:600!important; text-decoration:underline; }
.aia26-root .team-note-plain{text-align:center;margin-top:32px;font-size:18px!important;color:#111827;line-height:1.45!important;font-weight:400!important;font-style:normal;text-decoration:none;}
.aia26-root .squeeze-skew{display:inline-block;transform:skewX(-9deg);color:var(--red);font-weight:700;font-style:normal;border-radius:6px;padding:0 2px;margin:0 2px;background:rgba(215,4,22,.1);}
.aia26-root .logo-marquee-section .squeeze-skew-logo{display:inline-block;transform:skewX(-9deg);color:var(--red);font-weight:700;font-style:normal;border-radius:6px;padding:0 2px;margin:0 2px;background:linear-gradient(to top, rgb(215 4 22 / 11%) 0%, rgba(215, 4, 22, .14) 45%, rgba(215, 4, 22, .07) 62%, rgba(215, 4, 22, 0) 78%);}
.aia26-root .logo-marquee-section .aia-mep-nowrap{white-space:nowrap;}
.aia26-root .squeeze-vs{font-style:italic;font-weight:600;color:#444;}
.aia26-root #problem{background:var(--white);}
.aia26-root #problem .inner{display:grid;grid-template-columns:5fr 4fr;gap:88px;align-items:stretch;}
.aia26-root .prob-left h2{font-size:clamp(26px,3vw,38px)!important;margin-bottom:12px;}
.aia26-root .prob-left>.sub{color:var(--g700);margin-bottom:40px;}
.aia26-root .prob-list{list-style:none;}
.aia26-root .prob-item{display:grid;grid-template-columns:48px 1fr;gap:20px;align-items:center;padding:22px 0;border-bottom:1px solid var(--g200);position:relative;cursor:default;transition:padding-left .22s;}
.aia26-root .prob-item:first-child{border-top:1px solid var(--g200);}
.aia26-root .prob-item:hover{padding-left:8px;}
.aia26-root .prob-n{width:38px;height:38px;border-radius:10px;background:var(--white);border:1px solid var(--g300);display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1;transition:transform .2s, border-color .2s;color:var(--red);}
.aia26-root .prob-item:hover .prob-n{transform:translateY(-1px);border-color:var(--red);}
.aia26-root .prob-n i{font-size:15px;color:var(--red);}
.aia26-root .prob-t{font-size:18px!important;font-weight:500!important;color:var(--black);line-height:1.3!important;}
.aia26-root .prob-right{border-radius:16px;overflow:hidden;position:relative;height:100%;min-height:100%;box-shadow:var(--sh-lg);}
.aia26-root .prob-right img{height:100%;object-fit:cover;object-position:center bottom;}
.aia26-root .prob-right-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.7) 100%);}
.aia26-root .prob-right-caption{position:absolute;bottom:0;left:0;right:0;padding:28px;}
.aia26-root .prob-right-caption p{font-size:14px!important;font-weight:600!important;color:rgba(255,255,255,.9);line-height:22px!important;}
.aia26-root .prob-right-caption span{color:var(--red);}
.aia26-root #videos{background:var(--white);}
.aia26-root #videos .aia-trusted-tagline{max-width:960px;margin-left:auto;margin-right:auto;}
.aia26-root .vid-header{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:34px;gap:8px;}
.aia26-root .vid-header h2{font-size:clamp(24px,3vw,36px)!important;}
.aia26-root .vid-header p{font-size:15px!important;color:var(--g500);max-width:100%;text-align:left;line-height:24px!important;}
.aia26-root #videos .video-box{max-width:360px;margin:0 auto 10px;}
.aia26-root #videos .video-thumbnail{border-radius:14px;overflow:hidden;}
.aia26-root #videos .row > [class*="col"]{padding-top:8px;padding-bottom:8px;}
.aia26-root #engage{background:var(--off);}
.aia26-root #engage h2{font-size:clamp(26px,3vw,38px)!important;margin-bottom:8px;}
.aia26-root #engage>.wrap>.sub{color:var(--g700);margin-bottom:48px;}
.aia26-root .engage-blocks{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.aia26-root .eb{display:flex;flex-direction:column;align-items:flex-start;background:var(--white);border:1px solid var(--g200);border-radius:16px;padding:28px 28px;box-shadow:var(--sh);}
.aia26-root .eb-step{display:block;font-size:12px!important;font-weight:700!important;letter-spacing:.08em;text-transform:uppercase;color:var(--red);margin-bottom:6px;line-height:1.4!important;}
.aia26-root .eb-body h3{font-size:28px!important;margin-bottom:8px;}
.aia26-root .eb-body p{font-size:16px!important;line-height:26px!important;color:var(--g700)!important;margin:0;}
.aia26-root .eb-right{display:flex;align-items:center;justify-content:flex-start;width:100%;margin-top:8px;}
.aia26-root .booth-chip{display:inline-flex;align-items:center;gap:8px;background:var(--off);border:1px solid var(--g200);border-radius:99px;padding:12px 22px;font-size:13px!important;font-weight:700!important;color:var(--g700);white-space:nowrap;line-height:1!important;}
.aia26-root #walk{background:var(--white);}
.aia26-root #walk .inner{display:grid;grid-template-columns:1fr 1fr;gap:88px;align-items:stretch;}
.aia26-root .walk-img-wrap{border-radius:16px;overflow:hidden;position:relative;height:100%;min-height:100%;box-shadow:var(--sh-lg);}
.aia26-root .walk-img-wrap img{height:100%;object-fit:cover;object-position:center bottom;}
.aia26-root .walk-img-badge{position:absolute;top:20px;left:20px;background:var(--red);color:var(--white);border-radius:6px;padding:8px 16px;font-size:11px!important;font-weight:700!important;letter-spacing:.12em;text-transform:uppercase;line-height:1!important;}
.aia26-root .walk-right h2{font-size:clamp(24px,2.8vw,36px)!important;margin-bottom:10px;}
.aia26-root .walk-right>.sub{color:var(--g700);margin-bottom:8px;}
.aia26-root .wk-list{list-style:none;margin-top:12px;}
.aia26-root .wk-li{display:flex;align-items:flex-start;gap:18px;padding:22px 0;border-bottom:1px solid var(--g200);transition:padding-left .22s;cursor:default;}
.aia26-root .wk-li:first-child{border-top:1px solid var(--g200);}
.aia26-root .wk-li:hover{padding-left:6px;}
.aia26-root .wk-n{width:38px;height:38px;flex-shrink:0;background:var(--red);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:var(--white);letter-spacing:.02em;box-shadow:0 4px 12px rgba(215,4,22,.3);}
.aia26-root .wk-li p{font-size:17px!important;line-height:26px!important;padding-top:5px;margin:0;}
.aia26-root .wk-title{display:inline;font-size:17px!important;font-weight:700!important;color:var(--red)!important;}
.aia26-root .wk-text{display:inline;font-size:17px!important;font-weight:400!important;color:var(--g700);}
.aia26-root #faq{background:var(--off);}
.aia26-root #faq .container{max-width:var(--max)!important;padding-left:48px!important;padding-right:48px!important;}
.aia26-root #faq.sec{padding:72px 48px;}
.aia26-root #faq .center{text-align:center;}
.aia26-root #faq .h2{font-size:clamp(26px,3vw,38px)!important;line-height:1.2!important;}
.aia26-root #faq .faq-layout{display:grid;grid-template-columns:1fr 1.65fr;gap:56px;align-items:start;max-width:var(--max);margin:0 auto;}
.aia26-root #faq .faq-left{position:sticky;top:100px;}
.aia26-root #faq .faq-wrap{max-width:none;margin:0;}
.aia26-root #faq .faq-item{border-bottom:1px solid var(--g200);}
.aia26-root #faq .faq-item:first-child{border-top:1px solid var(--g200);}
.aia26-root #faq .faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 0;font-size:17px;font-weight:600;line-height:1.4;color:var(--black);}
.aia26-root #faq .faq-tog{width:34px;height:34px;border-radius:999px;border:1.5px solid var(--g300);display:flex;align-items:center;justify-content:center;flex-shrink:0;background:#fff;transition:all .2s ease;}
.aia26-root #faq .faq-tog svg{width:14px;height:14px;stroke:var(--g500);stroke-width:2;fill:none;}
.aia26-root #faq .faq-q.open{color:var(--red);}
.aia26-root #faq .faq-q.open .faq-tog{background:var(--red);border-color:var(--red);}
.aia26-root #faq .faq-q.open .faq-tog svg{stroke:#fff;transform:rotate(45deg);}
.aia26-root #faq .faq-ans{max-height:0;overflow:hidden;transition:max-height .3s ease,padding-bottom .2s ease;}
.aia26-root #faq .faq-ans.open{max-height:320px;padding-bottom:20px;}
.aia26-root #faq .faq-ans p{margin:0;color:var(--g700);}
.aia26-root .faq-left .faq-left-cta{margin-top:26px;text-align:left;}
.aia26-root #cta{background:var(--white);}
.aia26-root #cta .inner{display:grid;grid-template-columns:1fr;gap:0;align-items:center;}
.aia26-root .cta-l{max-width:860px;margin:0 auto;text-align:center;}
.aia26-root .cta-l h2{font-size:clamp(26px,3.4vw,30px)!important;line-height:1.15!important;margin-bottom:18px;}
.aia26-root .cta-l h2 em{color:var(--red);font-style:normal;}
.aia26-root .cta-l>.sub{color:var(--g700);margin-bottom:36px;}
.aia26-root #cta .cta-actions-stack{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:16px;width:100%;margin-top:4px;
}
.aia26-root #cta .cta-actions-stack .btn{
  margin:0 !important;width:auto;max-width:100%;align-self:center;
}
.aia26-root #cta .booth-pill{
  display:flex;align-items:center;justify-content:center;gap:10px;
  width:100%;max-width:100%;
  background:transparent;border:none;border-radius:0;
  padding:4px 0;margin:0;
  font-size:18px!important;font-weight:700!important;color:var(--ink);
  line-height:1.35!important;
}
.aia26-root #cta .cta-slot-link{
  display:inline-block;background:none;border:none;
  font-family:var(--font);font-size:16px!important;font-weight:700!important;
  color:var(--red);line-height:1.4!important;text-decoration:underline;
  text-underline-offset:3px;padding:0;margin:0;
}
.aia26-root #cta .cta-slot-link:hover{color:var(--red-dk);}
.aia26-root .cta-r{border-radius:16px;overflow:hidden;aspect-ratio:5/4;position:relative;box-shadow:var(--sh-lg);}
.aia26-root .cta-r-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 55%);}
.aia26-root .cta-r-badge{position:absolute;bottom:24px;left:24px;right:24px;background:rgba(255,255,255,.88);backdrop-filter:blur(12px);border-radius:10px;padding:18px 20px;border:1px solid rgba(215,4,22,.12);}
.aia26-root .cta-r-badge p{font-size:14px!important;font-weight:600!important;color:var(--black);line-height:22px!important;}
.aia26-root .cta-r-badge span{color:var(--red);}
.aia26-root .sticky-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:1000;background:var(--red);padding:14px 20px;box-shadow:0 -4px 24px rgba(0,0,0,.15);}
.aia26-root .sticky-bar a{display:block;text-align:center;color:var(--white);font-family:var(--font);font-size:15px;font-weight:700;}
.aia26-root .sr{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}
.aia26-root .sr.up{opacity:1;transform:none;border-radius:1rem}
.aia26-root .logo-marquee-section .aia-proof-shell{
  max-width:1200px;
  margin:0 auto;
  width:100%;
  padding-left:48px;
  padding-right:48px;
}
.aia26-root .logo-marquee-section .aia-proof-heading-wrap,
.aia26-root .logo-marquee-section .aia-proof-bottom-wrap{
  width:100%;
  text-align:center;
}
.aia26-root .logo-marquee-section .aia-proof-topline{
  text-align:center !important;
  width:100%;
  margin:1.6rem auto 1rem;
  font-size:36px !important;
  line-height:1.15 !important;
}
.aia26-root .logo-marquee-section .aia-proof-bottomline{
  text-align:center !important;
  width:100%;
  font-size:22px !important;
  line-height:1.5 !important;
  font-weight:700 !important;
}
.aia26-root .logo-marquee-section .aia-proof-bottomline .squeeze-skew-logo{
  font-size:inherit !important;
  line-height:inherit !important;
}
.aia26-root .logo-marquee-section .aia-proof-bottom-wrap{margin-top:1rem !important;}
.aia26-root .logo-marquee-section{padding-top:16px !important;padding-bottom:36px !important;}
.aia26-root .logo-marquee-section .logo-gray{
  filter:grayscale(100%) contrast(1.02) brightness(.95) !important;
  opacity:.95;
  transform:translateZ(0);
  -webkit-backface-visibility:hidden;
  backface-visibility:hidden;
  image-rendering:-webkit-optimize-contrast;

  width:auto;
  transition:filter .24s ease, opacity .24s ease, transform .24s ease;
}
.aia26-root .logo-marquee-section .logo-effect:hover .logo-gray{
  filter:none !important;
  opacity:1;
  transform:translateZ(0) scale(1.05);
}
.aia26-root .logo-marquee-section .logo-marquee{
  overflow:hidden !important;
}
.aia26-root .logo-marquee-section .logo-marquee-track{
  display:flex !important;
  align-items:center !important;
  gap:2.1rem !important;
  padding:0.35rem 1rem !important;
  width:max-content;
  flex-wrap:nowrap !important;
  animation:logo-marquee-scroll 14s linear infinite !important;
}
.aia26-root .logo-marquee-section .logo-item{
  min-width:168px !important;
  padding:0 36px !important;
}
.aia26-root .logo-marquee-section .btn.btn-lightblue{
  font-size:clamp(15px,1.15vw,16px) !important;
  line-height:1.2 !important;
  padding:12px 26px !important;
}
.aia-booking-modal .modal-content{
  background:#fff !important;
  border:1px solid #e5e7eb !important;
  border-radius:14px !important;
  box-shadow:0 24px 64px rgba(0,0,0,.2) !important;
}
.aia-booking-modal .modal-header{
  background:#fff !important;
  border-bottom:1px solid #eef1f4 !important;
  padding:14px 18px !important;
}
.aia-booking-modal .modal-title{
  color:#111827 !important;
  font-size:26px !important;
  font-weight:600 !important;
  line-height:1.3 !important;
}
.aia-booking-modal .btn-close{
  box-shadow:none !important;
}
.aia-booking-modal .modal-body{
  background:#fff !important;
  padding:14px 18px 18px !important;
}
.aia-booking-modal .aia-nimbus-modal-body .aia-nimbus-embed-host{
  min-height:520px;
  width:100%;
}
.aia-booking-modal .aia-calendly-modal-body{
  min-height:680px;
  padding:0 !important;
  overflow:hidden;
}
.aia-booking-modal .aia-calendly-modal-body iframe{
  width:100% !important;
  min-height:680px;
}
.aia26-root .title-accent{color:var(--red); font-weight:600; text-decoration:underline}
@media(max-width:1100px){.aia26-root .wrap,.aia26-root .section,.aia26-root #hero{padding-left:32px;padding-right:32px;}.aia26-root .hero-inner{gap:44px;}.aia26-root .team-grid{grid-template-columns:1fr 1fr;}.aia26-root #problem .inner,.aia26-root #walk .inner,.aia26-root #cta .inner,.aia26-root #faq .faq-layout,.aia26-root .engage-blocks{grid-template-columns:1fr;}.aia26-root .prob-right,.aia26-root .walk-img-wrap,.aia26-root .cta-r{display:none;}.aia26-root #faq .faq-left{position:static;}}
@media(max-width:767px){.aia26-root .sticky-bar{display:block;}.aia26-root .wrap,.aia26-root .section,.aia26-root #hero{padding-left:20px;padding-right:20px;}.aia26-root #hero{padding-top:24px;padding-bottom:48px;}.aia26-root .hero-inner{grid-template-columns:1fr;gap:0;}.aia26-root .hero-r{display:block;max-height:none;margin-top:18px;aspect-ratio:16/10;}.aia26-root #hero h1{font-size:30px!important;line-height:1.15!important;}.aia26-root h2,.aia26-root .h2{line-height:1.2!important;}.aia26-root .hero-tag{font-size:12px;}.aia26-root .hero-note{margin-top:12px;}.aia26-root .hero-r-badge{font-size:11px!important;padding:6px 12px;}.aia26-root .hero-r-text{font-size:13px!important;line-height:18px!important;}.aia26-root .hero-stats{flex-direction:column;gap:16px;}.aia26-root .hs{padding:0 0 16px;border-right:none;border-bottom:1px solid var(--g200);}.aia26-root .hs:last-child{border-bottom:none;padding-bottom:0;}.aia26-root .team-grid{grid-template-columns:1fr 1fr;}.aia26-root .section{padding-top:0px;padding-bottom:64px;}.aia26-root .ec{padding:32px 28px;}.aia26-root .logo-marquee-section .aia-proof-shell{padding-left:20px;padding-right:20px;}.aia26-root .logo-marquee-section .aia-proof-topline{font-size:27px!important;line-height:1.2!important;}.aia26-root .logo-marquee-section .aia-proof-bottomline{font-size:16px!important;line-height:1.35!important;}.aia26-root .logo-marquee-section .logo-marquee-track{gap:1.9rem!important;padding:0.35rem 1rem!important;flex-wrap:nowrap!important;animation:logo-marquee-scroll 12s linear infinite!important;}.aia26-root .logo-marquee-section .logo-item{min-width:146px!important;padding:0 14px!important;}.aia26-root .logo-marquee-section .logo-gray{max-height:34px;}.aia26-root .logo-marquee-section .btn.btn-lightblue{width:auto!important;max-width:100%;white-space:nowrap!important;padding:10px 18px!important;font-size:13px!important;line-height:1.2!important;}.aia26-root #videos .video-box{max-width:100%;margin:0 auto 18px;padding:6px;}.aia26-root #videos .video-thumbnail{margin-bottom:8px;}.aia26-root .btn.btn-lightblue{width:100%;justify-content:center;padding:12px 18px !important;min-height:52px;font-size:15px !important;line-height:1.25 !important;white-space:normal;text-align:center;}.aia26-root .hero-actions .btn.btn-lightblue{width:100%;}.aia26-root .eb-right{margin-top:12px;}.aia26-root .eb-right .btn.btn-lightblue{max-width:100%;}.aia26-root #cta .btn.btn-lightblue{width:auto!important;white-space:nowrap!important;}.aia26-root #faq .container{padding-left:20px!important;padding-right:20px!important;}.aia26-root #faq.sec{padding:64px 20px;}}
@media(max-width:480px){.aia26-root .team-grid{grid-template-columns:1fr;}}
`;

function ArrowIcon({ size = 16, stroke = "white" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AiaConferenceEventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showSlotsModal, setShowSlotsModal] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [pauseHeroCarousel, setPauseHeroCarousel] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (pauseHeroCarousel) return undefined;
    const id = window.setInterval(() => {
      setHeroSlide(prev => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [pauseHeroCarousel]);

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  useEffect(() => {
    if (!showSlotsModal || typeof window === "undefined") return undefined;
    let cancelled = false;
    let pollTimer: number | null = null;

    const mountEmbed = () => {
      if (cancelled) return true;
      const container = document.getElementById("aia-inline-slots-container");
      if (!container) return false;
      if (!window.Bookings || typeof window.Bookings.inlineEmbed !== "function") return false;
      container.innerHTML = "";
      window.Bookings.inlineEmbed({
        url: NIMBUS_AVAILABLE_SLOTS_URL,
        parent: "#aia-inline-slots-container",
        height: "600px",
      });
      return true;
    };

    const existing = document.querySelector(`script[src="${NIMBUS_SCRIPT_SRC}"]`);
    const onReady = () => {
      if (mountEmbed()) return;
      pollTimer = window.setInterval(() => {
        if (mountEmbed() && pollTimer) window.clearInterval(pollTimer);
      }, 120);
    };

    if (existing) {
      if (window.Bookings && typeof window.Bookings.inlineEmbed === "function") onReady();
      else existing.addEventListener("load", onReady, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = NIMBUS_SCRIPT_SRC;
      script.async = true;
      script.onload = onReady;
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (pollTimer) window.clearInterval(pollTimer);
    };
  }, [showSlotsModal]);

  const handleOpenModal = (thumb: TestimonialVideo) => {
    const embedUrl = thumb.video.replace("watch?v=", "embed/") + "?autoplay=1&rel=0";
    setVideoUrl(embedUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoUrl("");
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const parent = el.parentElement;
          if (!parent) return;
          const siblings = [...parent.querySelectorAll<HTMLElement>(".sr:not(.up)")];
          siblings.forEach((sibling, i) => {
            const baseDelay = parseFloat(sibling.dataset.delay || "0");
            setTimeout(() => sibling.classList.add("up"), baseDelay * 1000 + i * 60);
          });
          obs.unobserve(el);
        });
      },
      { threshold: 0.08 },
    );
    root.querySelectorAll(".sr").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="vbs-redesign-page aia-conference-events-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main ref={rootRef} className="aia26-root">
        <style>{AIA_CONFERENCE_PAGE_STYLES}</style>

        <section id="hero">
          <div className="hero-inner">
            <div className="hero-l sr">
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                June 11–12 &nbsp;·&nbsp; <strong>Booth #4539</strong>
              </div>
              <h1>
                Meet Us at <span className="accent">AIA Conference on Architecture 2026</span>
              </h1>
              <p className="lead text-secondary mt-2">
              Introducing an industry first - the 60-minute dedicated team build with AI powered workflows. A new way for architecture and engineering firms to scale delivery capacity. Beyond hiring. Beyond outsourcing.
              </p>
              <div className="hero-actions">
                <button type="button" className={DEFAULT_BTN_CLASS} onClick={() => setShowSlotsModal(true)}>
                  Reserve a slot at Booth #4539
                  <ArrowIcon size={18} />
                </button>

              </div>
              <p className="hero-note mx-auto text-center">
                {"\u23F1"} Takes less than 60 seconds
              </p>

            </div>

            <div
              className="hero-r sr"
              data-delay="0.15"
              onMouseEnter={() => setPauseHeroCarousel(true)}
              onMouseLeave={() => setPauseHeroCarousel(false)}
            >
              <div className="hero-carousel" aria-roledescription="carousel" aria-label="AIA conference imagery">
                {HERO_CAROUSEL_IMAGES.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={i === 0 ? "AIA conference - team at booth" : i === 1 ? "AIA conference banner" : "Architecture delivery at AIA"}
                    className={`hero-carousel-img${i === heroSlide ? " is-active" : ""}`}
                    aria-hidden={i !== heroSlide}
                  />
                ))}
              </div>
              <div className="hero-r-overlay" />
              <div className="hero-r-card">
                <div className="hero-r-badge">{"\u{1F4CD}"} Booth #4539</div>
                <p className="hero-r-text">AIA Conference on Architecture . Industry 1st - AI Powered Workflows . Focused Project Conversations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section logo-marquee-section">
         
          <AiaConferenceBrandsLogo onScheduleMeeting={openBookMeetingModal} />
        </section>

        <section className="section py-9" id="team">
          <div className="wrap">
            <div className="team-header">
              <div className="team-header-left">
                <span className="eyebrow">At AIA 2026</span>
                <h2>Who you'll meet at AIA</h2>
              </div>
              <p className="my-1 lead text-secondary">
              Meet the leadership team behind the industry-first 60-minute team build using AI workflows - on-site at Booth #4539, June 11–12.
              </p>
            </div>
            <div className="team-grid">
              {TEAM.map((member, i) => (
                <div key={member.name} className="tc sr" data-delay={(i * 0.08).toFixed(2)}>
                  <div className="tc-img">
                    <img src={member.img} alt={member.alt} loading="lazy" />
                    <div className="tc-img-overlay" />

                  </div>
                  <div className="tc-body">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                  <div className="tc-line" />
                </div>
              ))}
            </div>
            <p className="team-note mt-7">
              Available across both days for live project conversations, partnership discussions, and media.
            </p>
            <p className="team-note">Focused, practical discussion. No sales pitch.</p>
          </div>
        </section>

        <section className="section section--off my-7 py-8" id="problem">
          <div className="wrap">
            <div className="inner">
              <div className="prob-left">
                <span className="eyebrow">The pressure</span>
                <h2>Where architecture and engineering firms feel pressure</h2>
                <p className="lead text-secondary my-3">
                  The conventional answers - hiring and outsourcing - are failing the pace of the work.
                </p>
                <ul className="prob-list">
                  {PRESSURE_POINTS.map((item, i) => (
                    <li key={item.text} className="prob-item sr" data-delay={(i * 0.07).toFixed(2)}>
                      <span className="prob-n" aria-hidden>
                        <i className={item.iconClass} />
                      </span>
                      <span className="prob-t">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="prob-right sr" data-delay="0.2">
                <img src="/image/where-the-firm-feel-pressure.png" alt="Architecture pressure" />
                <div className="prob-right-overlay" />

              </div>
            </div>
            <p className="team-note lead text-secondary">
              Firms get stuck between under-hiring (delivery risk) and over-hiring (cost trap). The 60-minute team build is the third option.
            </p>
          </div>
        </section>

        <section className="py-8 card-secrtion bg-light" id="videos">
          <Container>
            <div className="text-center">
              <h2 className="mb-lg-3">Trusted by the firms scaling delivery today</h2>
              <p className="mb-lg-5 lead text-secondary aia-trusted-tagline">
              100+ US architecture firms · 4,000+ projects delivered · 450+ A&E professionals · 11+ years · ISO 9001 & 27001 certified · Top 1% architecture team
              </p>
            </div>

            <Row lg={3} md={2} xs={1} className="g-3 g-lg-4 mb-9 justify-content-center">
              {TESTIMONIAL_VIDEOS.map((item, index) => (
                <Col key={index}>
                  <div className="video-box h-100 position-relative" style={{ cursor: "pointer" }} onClick={() => handleOpenModal(item)}>
                    <div
                      className="video-thumbnail position-relative"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        paddingTop: "56.25%",
                      }}
                    >
                      <div className="video-overlay d-flex align-items-center justify-content-center">
                        <AiFillYoutube className="text-danger youtube-icon" />
                      </div>
                    </div>
                
                  </div>
                </Col>
              ))}
            </Row>
         
            <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="video-modal" backdrop="static" keyboard={false}>
              <Modal.Body className="p-0">
                <button type="button" onClick={handleCloseModal} aria-label="Close" className="top-closebtn text-dark">
                  <i className="fa fa-times"></i>
                </button>
                <div className="ratio ratio-16x9 bg-border">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src={videoUrl}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="video-frame"
                    />
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Container>
        </section>

        <section className="section section--off py-10" id="engage">
          <div className="wrap">
            <span className="eyebrow">How to engage</span>
            <h2>Connect with us at AIA</h2>
            <p className="lead text-secondary mb-5">Two ways to start the conversation. Both lead to the same place.</p>
            <div className="engage-blocks">
              <div className="eb sr">
                <div className="eb-body">
                  <span className="eb-step">1. Reserve a slot</span>
                  <h3>Skip the wait</h3>
                
                </div>
                <div className="eb-right">
                  <button type="button" className={DEFAULT_BTN_CLASS} onClick={openBookMeetingModal}>
                    Schedule a meeting
                    <ArrowIcon />
                  </button>
                </div>
              </div>

              <div className="eb sr" data-delay="0.1">
                <div className="eb-body">
                  <span className="eb-step">2. Walk in at Booth #4539 (June 11–12)</span>
                  <h3>Short and relevant</h3>
                
                </div>
                <div className="eb-right">
                  <button type="button" className={DEFAULT_BTN_CLASS} onClick={() => setShowSlotsModal(true)}>
                    Book a slot
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>






        <section className="section py-10" id="walk">
          <div className="wrap">
            <div className="inner">
              <div className="walk-img-wrap sr">
                <img src="/image/whatwewillwalkyouthrough.png" alt="Architecture walkthrough" loading="lazy" />
                <span className="walk-img-badge">What we cover</span>
              </div>
              <div className="walk-right">
                <span className="eyebrow">What we cover</span>
                <h2>What we'll walk you through</h2>
                <p className="lead text-secondary mt-2 mb-3">
                  How the industry-first 60-minute team build works - and what it unlocks for your firm.
                </p>
                <ul className="wk-list">
                  {WALKTHROUGH_POINTS.map((item, i) => (
                    <li key={item.num} className="wk-li sr" data-delay={(i * 0.09).toFixed(2)}>
                      <div className="wk-n">{item.num}</div>
                      <p>
                        <span className="wk-title">{item.title}</span>{" "}
                        <span className="wk-text">{item.text}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="sec sec-alt">
          <div className="wrap">
            <div className="faq-layout">
              <div className="faq-left rv">
                <h2 className="h2">Quick questions</h2>
                <div className="faq-left-cta">
                  <p style={{ marginBottom: "16px", fontWeight: 600, color: "var(--blk)", fontSize: "18px" }}>
                    Have more questions?
                  </p>
                  <a href="/contact-us" className={DEFAULT_BTN_CLASS}>
                    Ask our team <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div className="faq-wrap">
                {FAQ_ITEMS.map((item, idx) => (
                  <div className="faq-item rv" key={item.q}>
                    <div
                      className={"faq-q" + (openFaq === idx ? " open" : "")}
                      onClick={() => toggleFaq(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFaq(idx);
                        }
                      }}
                    >
                      {item.q}
                      <span className="faq-tog">
                        <svg viewBox="0 0 14 14">
                          <line x1="7" y1="2" x2="7" y2="12" />
                          <line x1="2" y1="7" x2="12" y2="7" />
                        </svg>
                      </span>
                    </div>
                    <div className={"faq-ans" + (openFaq === idx ? " open" : "")}>
                      <p className="text-secondary">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-9 pb-2" id="cta">
          <div className="wrap">
            <div className="inner">
              <div className="cta-l sr p-4">
                <span className="eyebrow">AIA 2026</span>
                <h2>See how a team gets built in sixty minutes</h2>
                <p className="sub">
                  An industry first in AEC delivery - only at Booth #4539. Pre-book your conversation in under a minute.
                </p>
                <div className="cta-actions-stack">
                  <button type="button" className={DEFAULT_BTN_CLASS} onClick={() => setShowSlotsModal(true)}>
                    View Available Slots
                    <ArrowIcon size={18} />
                  </button>
                  <div className="booth-pill">{"\u{1F4CD}"} Booth #4539 · June 11–12</div>
                  <button type="button" className="cta-slot-link" onClick={() => setShowSlotsModal(true)}>
                    Reserve a slot at Booth #4539 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky-bar">
          <a
            href="#engage"
            onClick={e => {
              e.preventDefault();
              setShowSlotsModal(true);
            }}
          >
            Reserve a slot at Booth #4539 →
          </a>
        </div>
      </main>
      <Modal show={showSlotsModal} onHide={() => setShowSlotsModal(false)} size="xl" centered className="aia-booking-modal">
        <Modal.Header closeButton>
          <Modal.Title>Reserve a Quick Slot at Booth #4539</Modal.Title>
        </Modal.Header>
        <Modal.Body className="aia-nimbus-modal-body">
          {showSlotsModal ? <div id="aia-inline-slots-container" className="aia-nimbus-embed-host" /> : null}
        </Modal.Body>
      </Modal>
      <DeferredSiteFooter />
    </div>
  );
}
