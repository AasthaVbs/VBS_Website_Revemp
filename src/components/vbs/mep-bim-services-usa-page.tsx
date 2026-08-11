"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import {
  ZOHO_MEP_LANDING_HEADER_CROP_PX,
  ZOHO_MEP_LANDING_IFRAME_ID,
  ZOHO_MEP_LANDING_IFRAME_SRC,
  ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";
import { SiteFooter } from "@/components/sections/site-footer";
import { MepHeader } from "@/components/layout/mep-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { openBookMeetingModal } from "@/utils/nimbus-booking";

/** Key benefits section — assets from /static/image (site root /image/) */
const IMG_BEN_IMPROVED_DESIGN = `/image/${encodeURIComponent("Improved Design Accuracy.png")}`;
const IMG_BEN_SMARTER_FM = `/image/${encodeURIComponent("Smarter Facility Management.png")}`;
const IMG_BEN_ENHANCED_VIZ = `/image/${encodeURIComponent("Enhanced Visualization & Planning.png")}`;
const IMG_BEN_SCHED_COST = `/image/${encodeURIComponent("Optimized Project Scheduling & Costing.png")}`;
const IMG_BEN_PREFAB = `/image/${encodeURIComponent("Faster Prefabrication & Modular Construction.png")}`;
const IMG_BEN_COORD = `/image/${encodeURIComponent("Seamless Multidisciplinary Coordination.png")}`;

const MEP_STYLES = "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\r\nhtml{scroll-behavior:smooth}\r\nbody{font-family:\"Segoe UI\",system-ui,sans-serif;background:#fff;color:#000;overflow-x:hidden;-webkit-font-smoothing:antialiased}\r\n::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#f0f0f0}::-webkit-scrollbar-thumb{background:#D70416;border-radius:2px}\r\na,button{cursor:pointer!important}\r\n/* ── VBS TYPOGRAPHY ── */\r\nh1,.h1{font-weight:600!important;color:#000;line-height:58px!important;letter-spacing:.005em!important}\r\nh2,.h2{font-weight:600!important;color:#000;line-height:48px!important}\r\nh3,.h3{font-weight:600!important;color:#000;line-height:34px!important}\r\nh4,.h4{font-weight:600!important;color:#000;line-height:28px!important}\r\nh5,h6{font-weight:600!important;color:#000}\r\n.lead{font-size:20px!important;font-weight:400;line-height:30px}\r\np{font-size:16px!important;font-weight:400!important;line-height:28px!important;color:#404040}\r\n/* ── TOKENS ── */\r\n:root{\r\n  --red:#D70416;--rs:rgba(215,4,22,.06);--rm:rgba(215,4,22,.14);\r\n  --blk:#000;--wht:#fff;--off:#f8f8f8;--bdr:#e6e6e6;\r\n  --txt:#404040;--txl:#777;\r\n  --sh:0 2px 12px rgba(0,0,0,.06);--shm:0 6px 32px rgba(0,0,0,.09);--shl:0 16px 56px rgba(0,0,0,.11)\r\n}\r\n.mep-bim-html-root{--sec-y:88px}\r\n/* ── LAYOUT ── */\r\n.wrap{max-width:var(--vbs-page-max,1440px);margin:0 auto;padding:0 40px}\r\n.wrap-why-us{max-width:var(--vbs-page-max,1440px);margin:0 auto;padding:0}\r\n.mep-bim-html-root .sec,.mep-bim-html-root .wf-section{padding:var(--sec-y) 0}\r\n.sec-alt{background:var(--off)}\r\n.mep-bim-html-root #sectors.sec{padding-top:0}\r\n.mep-bim-html-root .sec.mep-final-cta-sec{padding-top:var(--sec-y);padding-bottom:28px}\r\n.sec-ben{background:#F8F8F8}\r\n#services,#what-you-get,#disciplines,#workflow,#technical-methods,#why-choose-us,#sectors,#faqs{scroll-margin-top:88px}\r\n.center{text-align:center}\r\n.mep-intro-split-h2{display:flex;flex-direction:column;align-items:center;gap:clamp(6px,1.2vw,12px);text-align:center}\r\n.mep-intro-split-h2 .mep-intro-line{display:block;margin:0;line-height:1.25}\r\n/* ── SHARED ── */\r\n.tag{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--red);margin-bottom:12px}\r\n.tag::before{content:'';width:20px;height:2px;background:var(--red);border-radius:1px;flex-shrink:0}\r\n.btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--blk);padding:13px 26px;border-radius:8px;font-family:\"Segoe UI\",sans-serif;font-size:15px;font-weight:600;text-decoration:none;border:1.5px solid var(--bdr);transition:border-color .2s,color .2s,transform .18s}\r\n.btn-ghost:hover{border-color:var(--red);color:var(--red);transform:translateY(-2px)}\r\n/* ── REVEAL ── */\r\n.rv{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}\r\n.rv.in{opacity:1;transform:none}\r\n.rv-l{opacity:0;transform:translateX(-20px);transition:opacity .65s ease,transform .65s ease}\r\n.rv-l.in{opacity:1;transform:none}\r\n.rv-r{opacity:0;transform:translateX(20px);transition:opacity .65s ease,transform .65s ease}\r\n.rv-r.in{opacity:1;transform:none}\r\n\r\n/* ════════════════════ HERO — full-width (reference HTML) ════════════════════ */\r\n#hero{position:relative;overflow:hidden;display:flex;flex-direction:column;padding-top:clamp(72px,9vw,118px)}\r\n.mep-bim-html-root .hero-bg-full{position:absolute;inset:0;z-index:0}\r\n.mep-bim-html-root .hero-bg-full svg{width:100%;height:100%;object-fit:cover;display:block}\r\n.mep-bim-html-root .hero-overlay{position:absolute;inset:0;background:linear-gradient(105deg,rgba(255,255,255,.78) 0%,rgba(248,251,255,.68) 55%,rgba(240,248,255,.45) 100%);z-index:1}\r\n.mep-bim-html-root .hero-content{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center;padding:clamp(48px,8vw,80px) 0 120px}\r\n.mep-bim-html-root .hero-content .wrap{display:flex;flex-direction:column;align-items:flex-start;max-width:720px}\r\n.mep-bim-html-root .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--rs);border:1px solid var(--rm);padding:5px 14px;border-radius:100px;font-size:12px;font-weight:700;color:var(--red);letter-spacing:1.4px;text-transform:uppercase;margin-bottom:22px}\r\n.mep-bim-html-root .hero-pulse{width:7px;height:7px;background:var(--red);border-radius:50%;animation:mepHeroPulse 1.8s ease-in-out infinite}\r\n@keyframes mepHeroPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.5);opacity:.6}}\r\n.mep-bim-html-root .hero-h1{font-family:\"Segoe UI\",sans-serif;font-weight:600!important;color:#000;margin-bottom:clamp(12px,2vw,18px);font-size:clamp(1.45rem,2.5vw + 0.9rem,2.875rem)!important;line-height:1.12!important;letter-spacing:.01em!important}\r\n.mep-bim-html-root .hero-h1 span{color:var(--red)}\r\n.mep-bim-html-root .hero-sub{font-size:18px;line-height:30px;color:#444;font-weight:400;margin-bottom:36px;max-width:580px}\r\n.mep-bim-html-root #hero p.lead,.mep-bim-html-root #hero .lead{font-size:clamp(15px,0.9vw + 0.8rem,20px)!important;line-height:1.55!important;margin-bottom:clamp(18px,3vw,36px)!important;max-width:min(580px,100%)}\r\n.mep-bim-html-root .mep-hero-shell{flex:1;max-width:var(--vbs-page-max,1440px);margin:0 auto;width:100%;padding:clamp(32px,5vw,72px) clamp(16px,4vw,40px) clamp(20px,3vw,40px)}\r\n.mep-bim-html-root .mep-hero-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:auto auto auto;align-items:start;column-gap:clamp(16px,4vw,40px);row-gap:clamp(8px,2vw,16px)}\r\n.mep-bim-html-root .mep-hero-grid > .mep-hero-h1{grid-column:1;grid-row:1}\r\n.mep-bim-html-root .mep-hero-grid > .mep-hero-lead{grid-column:1;grid-row:2}\r\n.mep-bim-html-root .mep-hero-grid > .mep-hero-ctas{grid-column:1;grid-row:3}\r\n.mep-bim-html-root .mep-hero-media{grid-column:2;grid-row:1 / span 3;align-self:center;display:flex;align-items:center;justify-content:flex-end;min-width:0;height:100%;overflow:visible}\r\n.mep-bim-html-root .mep-hero-img{width:100%;height:auto;object-fit:contain;object-position:center right;display:block;transform:scale(1.1);transform-origin:center right}\r\n.mep-bim-html-root .hero-ctas{display:flex;gap:clamp(10px,2vw,14px);flex-wrap:wrap;margin-bottom:clamp(28px,4vw,48px)}\r\n.mep-bim-html-root .btn-hero-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--blk);padding:13px 26px;border-radius:8px;font-family:\"Segoe UI\",sans-serif;font-size:15px;font-weight:600;text-decoration:none;border:1.5px solid var(--bdr);transition:border-color .2s,color .2s,transform .18s}\r\n.mep-bim-html-root .btn-hero-outline:hover{border-color:var(--red);color:var(--red);transform:translateY(-2px)}\r\n.mep-bim-html-root .hero-proof{display:flex;align-items:center;gap:14px}\r\n.mep-bim-html-root .hp-avatars{display:flex}\r\n.mep-bim-html-root .hp-av{width:32px;height:32px;border-radius:50%;border:2px solid #fff;margin-right:-8px;font-size:11px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center}\r\n.mep-bim-html-root .av1{background:#3b82f6}.mep-bim-html-root .av2{background:#f97316}.mep-bim-html-root .av3{background:#22c55e}.mep-bim-html-root .av4{background:#a855f7}\r\n.mep-bim-html-root .hp-stars{color:#f59e0b;font-size:12px;letter-spacing:2px;margin-bottom:2px}\r\n.mep-bim-html-root .hp-info{font-size:14px;color:#555}\r\n.mep-bim-html-root .trust-strip{position:relative;z-index:1;width:100%;padding-top:clamp(6px,1.4vw,6px);padding-bottom:clamp(40px,5.2vw,50px);background:transparent;border:none}\r\n.mep-bim-html-root .trust-strip-inner{max-width:var(--vbs-page-max,1440px);margin:0 auto;display:flex;align-items:stretch;gap:clamp(12px,2vw,20px);flex-wrap:wrap;justify-content:center}\r\n.mep-bim-html-root .ts-item{flex:1;min-width:min(200px,100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:clamp(20px,2.8vw,30px) clamp(16px,2vw,22px);text-align:center;position:relative;background:#fff;border-radius:14px;border:none!important;box-shadow:0 8px 28px rgba(0,0,0,.07),0 2px 14px rgba(215,4,22,.1);transition:transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s ease}\r\n.mep-bim-html-root .ts-item:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,0,0,.1),0 8px 28px rgba(215,4,22,.16)}\r\n.mep-bim-html-root .ts-item:not(:last-child)::after{display:none}\r\n.mep-bim-html-root .ts-num{font-family:\"Arial Black\",\"Segoe UI Black\",\"Segoe UI\",system-ui,sans-serif;font-size:clamp(2rem,4.2vw,2.5rem);font-weight:900;letter-spacing:-0.03em;color:#D70416;line-height:0.92;text-shadow:0 1px 0 rgba(255,255,255,.9);transform:scaleX(1.04);transform-origin:center}\r\n.mep-bim-html-root .ts-num.stats-count{font-variant-numeric:tabular-nums}\r\n.mep-bim-html-root .ts-label{font-size:clamp(11px,1.25vw,14px);color:var(--blk);font-weight:700;line-height:1.35;text-transform:uppercase;letter-spacing:.12em;max-width:14rem;opacity:.92}\r\n.mep-bim-html-root a.mep-btn-outline-theme,.mep-bim-html-root button.mep-btn-outline-theme{border-color:var(--red)!important;color:var(--red)!important;background:transparent!important}\r\n.mep-bim-html-root a.mep-btn-outline-theme:hover,.mep-bim-html-root a.mep-btn-outline-theme:focus,.mep-bim-html-root button.mep-btn-outline-theme:not(.mep-btn-outline-hover-bg-only):hover,.mep-bim-html-root button.mep-btn-outline-theme:not(.mep-btn-outline-hover-bg-only):focus{background-color:var(--red)!important;color:#fff!important;border-color:var(--red)!important}\r\n.mep-bim-html-root button.mep-btn-outline-hover-bg-only.mep-btn-outline-theme:hover,.mep-bim-html-root button.mep-btn-outline-hover-bg-only.mep-btn-outline-theme:focus{background-color:rgba(215,4,22,0.1)!important;color:var(--red)!important;border-color:var(--red)!important}\r\n\r\n/* ════════════════════ S2 SERVICES ════════════════════ */\r\n.svc-intro{max-width:620px;margin:0 auto;text-align:center}\r\n.pill-row{display:flex;background:var(--off);border:1px solid var(--bdr);border-radius:8px;overflow:hidden;margin:28px 0 52px}\r\n.pill-item{flex:1;padding:13px 16px;font-size:13px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:var(--txt);border-right:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;gap:7px}\r\n.pill-item:last-child{border-right:none}\r\n.pill-dot{width:5px;height:5px;border-radius:50%;background:var(--red);flex-shrink:0}\r\n.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}\r\n.svc-card{border:1.5px solid var(--bdr);border-radius:12px;overflow:hidden;background:#fff;transition:transform .3s,box-shadow .3s,border-color .3s}\r\n.svc-card:hover{transform:translateY(-8px);box-shadow:var(--shl);border-color:var(--rm)}\r\n.svc-vis{height:185px;overflow:hidden;position:relative}\r\n.svc-body{padding:0 26px 26px 26px}\r\n.svc-tag{font-size:12px;font-weight:700;color:var(--red);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}\r\n.svc-title{font-size:18px;font-weight:600;line-height:28px;color:var(--blk);margin-bottom:8px}\r\n.svc-text{font-size:15px;color:var(--txt);line-height:26px}\r\n/* result box — reference mep-bim-landing (12) */\r\n.svc-result-wrap{display:flex;justify-content:center;width:100%;margin-top:40px;padding:0 4px;box-sizing:border-box}\r\n.mep-bim-html-root .svc-result{margin:0;background:#fff;border-radius:16px;overflow:hidden;display:flex;max-width:100%;box-sizing:border-box;border:none!important;box-shadow:0 14px 44px rgb(215 4 22 / 0%), 0 6px 22px rgba(215, 4, 22, .1), 0 2px 8px rgba(215, 4, 22, .06)}\r\n.mep-bim-html-root .sr-left{background:linear-gradient(160deg,#42AA32,#2d8a22);padding:15px 32px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;min-width:148px;flex-shrink:0;position:relative;overflow:hidden}\r\n.mep-bim-html-root .sr-left::before{content:'';position:absolute;top:-28px;left:-28px;width:100px;height:100px;background:rgba(255,255,255,.08);border-radius:50%}\r\n.mep-bim-html-root .sr-left::after{content:'';position:absolute;bottom:-20px;right:-20px;width:72px;height:72px;background:rgba(255,255,255,.06);border-radius:50%}\r\n.mep-bim-html-root .sr-badge{position:relative;z-index:1;width:52px;height:52px;border-radius:50%;border:2px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.12)}\r\n.mep-bim-html-root .sr-badge-lbl{position:relative;z-index:1;font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.85);text-align:center;line-height:1.35}\r\n.mep-bim-html-root .sr-right{flex:1;padding:24px 32px 26px;display:flex;flex-direction:column;justify-content:center;border:none!important;min-width:0}\r\n.mep-bim-html-root .sr-result-tag{font-size:16px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#42AA32;margin-bottom:12px;display:flex;align-items:center;gap:8px}\r\n.mep-bim-html-root .sr-result-tag::before{content:'';width:18px;height:3px;background:#42AA32;border-radius:1px;flex-shrink:0}\r\n.mep-bim-html-root .svc-result .sr-txt{font-size:18px!important;font-weight:600!important;font-style:normal!important;line-height:1.55!important;color:#5A5A5A!important;margin:0!important;text-align:left;letter-spacing:.015em;-webkit-font-smoothing:antialiased}\r\n.mep-bim-html-root .svc-result .sr-txt strong{font-weight:700!important;color:#3D3D3D!important}\r\n@media(max-width:640px){.mep-bim-html-root .svc-result{flex-direction:column}.mep-bim-html-root .sr-left{min-width:0;width:100%}.mep-bim-html-root .sr-right{border:none!important}}\r\n\r\n/* ════════════════════ S3 OFFERINGS ════════════════════ */\r\n.off-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}\r\n.off-card{background:#fff;border:1.5px solid var(--bdr);border-radius:12px;padding:28px 22px;transition:transform .3s,box-shadow .3s,border-color .3s;position:relative;overflow:hidden}\r\n.off-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .3s}\r\n.off-card:hover::after{transform:scaleX(1)}\r\n.off-card:hover{transform:translateY(-6px);box-shadow:var(--shm);border-color:var(--rm)}\r\n.off-num{font-size:32px;font-weight:700;color:rgba(215,4,22,.07);line-height:1;margin-bottom:4px}\r\n.off-ico{width:42px;height:42px;background:var(--rs);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px}\r\n.off-ttl{font-size:15px;font-weight:600;line-height:24px;color:var(--blk);margin-bottom:8px}\r\n.off-txt{font-size:14px;color:var(--txt);line-height:24px}\r\n.off-cta{text-align:center;margin-top:44px}\r\n\r\n/* ════════════════════ DISCIPLINES — sticky 4-tab MEP ════════════════════ */\r\n.mep-bim-html-root #disciplines .disc-hd{text-align:center;margin-bottom:48px}\r\n.mep-bim-html-root #disciplines .disc-hd h2{margin-bottom:14px}\r\n.mep-bim-html-root #disciplines .disc-hd p{margin:0 auto;color:var(--txt)}\r\n.mep-bim-html-root #disciplines .disc-nav-wrap{position:relative}\r\n.mep-bim-html-root #disciplines .disc-nav{position:sticky;top:66px;z-index:50;background:#fff;border-bottom:2px solid var(--bdr);transition:box-shadow .2s}\r\n.mep-bim-html-root #disciplines .disc-tabs{max-width:var(--vbs-page-max,1440px);margin:0 auto;padding:0 40px;display:flex;gap:0}\r\n.mep-bim-html-root #disciplines .disc-tab{flex:1;padding:18px 12px;background:none;border:none;border-bottom:3px solid transparent;margin-bottom:-2px;font:600 18px/1 \"Segoe UI\",sans-serif;color:#666;cursor:pointer;transition:color .2s,border-color .2s;white-space:nowrap;text-align:center}\r\n.mep-bim-html-root #disciplines .disc-tab:hover{color:var(--blk)}\r\n.mep-bim-html-root #disciplines .disc-tab.active{color:var(--red);border-bottom-color:var(--red)}\r\n.mep-bim-html-root #disciplines .disc-panels{padding-top:52px}\r\n.mep-bim-html-root #disciplines .disc-panel{display:none}\r\n.mep-bim-html-root #disciplines .disc-panel.active{display:block}\r\n.mep-bim-html-root #disciplines .disc-layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}\r\n.mep-bim-html-root #disciplines .disc-body p{font-size:16px;line-height:28px;color:var(--txt);margin-bottom:20px}\r\n.mep-bim-html-root #disciplines .disc-body p:last-of-type{margin-bottom:32px}\r\n.mep-bim-html-root #disciplines .disc-meta-row{display:grid;grid-template-columns:1fr;gap:12px;border-top:1px solid var(--bdr);padding-top:24px}\r\n.mep-bim-html-root #disciplines .disc-meta-item{display:flex;flex-direction:column;gap:4px}\r\n.mep-bim-html-root #disciplines .disc-meta-lbl{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.1px;color:#D70416}\r\n.mep-bim-html-root #disciplines .disc-meta-val{font-size:16px!important;font-weight:400!important;line-height:28px!important;color:#404040!important}\r\n.mep-bim-html-root #disciplines .disc-deliverables{position:sticky;top:138px;background:#fff;border:1.5px solid var(--bdr);border-radius:12px;padding:28px;box-shadow:0 4px 20px rgba(0,0,0,.06)}\r\n.mep-bim-html-root #disciplines .disc-del-ttl{font-size:15px;font-weight:700;color:var(--blk);margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid var(--red);display:flex;align-items:center;gap:15px}\r\n.mep-bim-html-root #disciplines .disc-del-ttl svg{flex-shrink:0}\r\n.mep-bim-html-root #disciplines .disc-del-list{list-style:none;padding:0;margin:0 0 24px}\r\n.mep-bim-html-root #disciplines .disc-del-item{display:flex;align-items:flex-start;gap:14px;padding:10px 0;border-bottom:1px solid var(--bdr);font-size:16px;line-height:22px;color:var(--txt)}\r\n.mep-bim-html-root #disciplines .disc-del-item:last-child{border-bottom:none}\r\n.mep-bim-html-root #disciplines .disc-del-chk{width:18px;height:18px;border-radius:50%;background:var(--red);color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}\r\n.mep-bim-html-root #disciplines .disc-del-cta{display:block;text-align:center;padding:14px;background:var(--red);color:#fff;border-radius:8px;font:600 14px/1 \"Segoe UI\",sans-serif;text-decoration:none;transition:opacity .2s}\r\n.mep-bim-html-root #disciplines .disc-del-cta:hover{opacity:.88}\r\n.mep-bim-html-root #disciplines .disc-h3{font-size:26px;font-weight:700;line-height:36px;color:var(--red);margin-bottom:24px}\r\n\r\n/* ════════════════════ S4 BENEFITS — image top, no icon ════════════════════ */\r\n.s4-hd{text-align:center;margin-bottom:52px}\r\n.s4-hd h2{margin-bottom:14px}\r\n.s4-hd p{margin:0 auto}\r\n.ben-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}\r\n.ben-card{border:1.5px solid var(--bdr);border-radius:12px;background:#fff;overflow:hidden;transition:border-color .25s,transform .25s,box-shadow .25s}\r\n.ben-card:hover{border-color:var(--rm);transform:translateY(-5px);box-shadow:var(--shl)}\r\n.ben-vis{height:165px;overflow:hidden;position:relative;display:flex;align-items:center;justify-content:center;background:#fff}\r\n.ben-vis svg,.ben-vis img{display:block}\r\n.ben-vis img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;object-position:center}\r\n.ben-vis--icon img{width:auto;height:auto;max-height:80px;max-width:min(100%,200px);object-fit:contain}\r\n.ben-body{padding:22px 24px 26px}\r\n.ben-ttl{font-size:clamp(17px,1.15vw,20px);font-weight:700;line-height:1.32;color:#0a0a0a;margin-bottom:8px;display:flex;align-items:flex-start;gap:11px;letter-spacing:-0.02em}\r\n.ben-chk{color:var(--red);font-size:16px;font-weight:900;flex-shrink:0;line-height:1.25;margin-top:1px}\r\n.ben-txt{font-size:14px;color:var(--txt);line-height:26px}\r\n.s4-cta{text-align:center;margin-top:44px}\r\n\r\n/* ════════════════════ S5 CASE STUDIES ════════════════════ */\r\n.cs-slider{overflow:hidden}\r\n.cs-track{display:flex;gap:24px;transition:transform .45s cubic-bezier(.4,0,.2,1)}\r\n.cs-card{min-width:calc(33.333% - 16px);background:#fff;border:1.5px solid var(--bdr);border-radius:12px;overflow:hidden;transition:box-shadow .3s,transform .3s}\r\n.cs-card:hover{box-shadow:var(--shl);transform:translateY(-6px)}\r\n.cs-vis{height:190px;position:relative;overflow:hidden}\r\n.cs-badge{position:absolute;top:14px;left:14px;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:700;color:#fff;display:flex;align-items:center;gap:5px}\r\n.cs-body{padding:26px}\r\n.cs-proj{font-size:17px;font-weight:600;line-height:28px;color:var(--blk);margin-bottom:14px}\r\n.cs-lbl{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:var(--blk);margin-bottom:3px}\r\n.cs-txt{font-size:14px;color:var(--txt);line-height:24px;margin-bottom:10px}\r\n.cs-divider{height:1px;background:var(--bdr);margin:12px 0}\r\n.cs-result{font-size:14px;font-weight:600;align-items:flex-start;gap:8px;margin-bottom:18px;line-height:24px;color:var(--blk)}\r\n.cs-result::before{content:'→';color:#16a34a;flex-shrink:0}\r\n.cs-result strong{color:#15803d}\r\n.sl-nav{display:flex;justify-content:center;gap:10px;margin-top:32px}\r\n.mep-bim-html-root .sl-btn-mep{width:44px;min-width:44px;height:44px;padding:0!important;font-size:20px;line-height:1;border-radius:50%;border:2px solid #D70416!important;background:transparent!important;color:#D70416!important;box-shadow:none!important;cursor:pointer;transition:background .2s ease,color .2s ease,border-color .2s ease,transform .2s ease;display:inline-flex;align-items:center;justify-content:center;font-family:inherit;-webkit-tap-highlight-color:transparent}\r\n.mep-bim-html-root .sl-btn-mep:hover,.mep-bim-html-root .sl-btn-mep:focus{background:#D70416!important;color:#fff!important;border-color:#D70416!important;transform:scale(1.06)}\r\n.mep-bim-html-root .sl-btn-mep:active{transform:scale(0.98)}\r\n\r\n/* ════════════════════ S6 WHY US ════════════════════ */\r\n.why-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}\r\n.why-card{border:1.5px solid var(--bdr);border-radius:12px;padding:28px 10px 24px;text-align:center;background:#fff;transition:transform .3s,box-shadow .3s,border-color .3s,background .3s}\r\n.why-card:hover{transform:translateY(-7px);box-shadow:var(--shl);border-color:var(--red);background:var(--rs)}\r\n.why-ico{width:50px;height:50px;background:var(--rs);border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;transition:background .3s}\r\n.why-card:hover .why-ico{background:var(--rm)}\r\n.why-ttl{font-size:17px;font-weight:600;line-height:24px;color:var(--blk);margin-bottom:12px}\r\n.why-txt{font-size:13px;color:var(--txl);line-height:22px}\r\n.why-cta{text-align:center;margin-top:44px}\r\n\r\n/* ════════════════════ S7 INDUSTRIES ════════════════════ */\r\n.ind-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}\r\n.ind-card{background:#fff;border:1.5px solid var(--bdr);border-radius:12px;padding:28px 24px;display:flex;align-items:center;gap:18px;transition:border-color .3s,transform .3s,box-shadow .3s}\r\n.ind-card:hover{border-color:var(--red);transform:translateY(-5px);box-shadow:var(--shm)}\r\n.ind-ico{width:52px;height:52px;background:var(--rs);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .3s}\r\n.ind-card:hover .ind-ico{background:var(--rm)}\r\n.ind-ttl{font-size:16px;font-weight:600;line-height:26px;color:var(--blk)}\r\n.ind-sub{font-size:13px;color:var(--txl);margin-top:2px}\r\n.ind-cta{text-align:center;margin-top:44px}\r\n\r\n/* ════════════════════ S8 STEPS — reference image style ════════════════════ */\r\n.steps-wrap{background:#f0f6ff;border-radius:16px;padding:clamp(48px,7vw,72px) clamp(24px,4vw,48px) clamp(32px,4vw,44px);border:1px solid #cde0f5;overflow:visible}\r\n.steps-lbl-row{display:flex;align-items:center;justify-content:center;margin-bottom:clamp(28px,4vw,40px);flex-wrap:wrap;gap:4px}\r\n.slbl{font-size:clamp(14px,1.2vw,16px);font-weight:700;color:var(--blk);padding:0 14px}\r\n.sarr{font-size:clamp(18px,2.5vw,24px);color:#888;padding:0 4px;line-height:1}\r\n.wf-section{background:var(--off)}\r\n.wf-header{text-align:center;margin-bottom:44px}\r\n.wf-header p{max-width:600px;margin:12px auto 0}\r\n.wf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,2.5vw,18px);background:transparent;border:none;padding:0}\r\n.wf-card{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:clamp(26px,3vw,34px) clamp(22px,2.5vw,30px);position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:flex-start;transition:background .2s,box-shadow .2s,border-color .2s}\r\n.wf-card:hover{background:#fafafa;border-color:var(--rm);box-shadow:var(--sh)}\r\n.wf-card::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--red);transform:scaleX(0);transform-origin:left center;transition:transform .45s cubic-bezier(.4,0,.2,1);pointer-events:none}\r\n.wf-card:hover::after{transform:scaleX(1)}\r\n.wf-step-row{display:flex;align-items:center;gap:10px;margin:0 0 14px;width:100%;min-width:0;align-self:stretch}\r\n.wf-step-row::after{content:'';flex:1;min-width:12px;height:1px;background:var(--rm)}\r\n.wf-ttl{font-size:18px;font-weight:700;color:var(--blk);line-height:1.35;width:100%;padding-bottom:16px;margin-bottom:16px}\r\np.wf-txt{font-size:16px!important;line-height:24px!important;color:var(--txt)!important;font-weight:400!important;margin:0}\r\n.wf-tag{display:inline-block;flex-shrink:0;margin:0;font-size:12px;font-weight:700;letter-spacing:.12em;color:var(--red);background:var(--rs);border:1px solid var(--rm);padding:4px 14px;border-radius:100px}\r\n.steps-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(20px,3vw,28px);margin-top:clamp(12px,2vw,20px);padding-top:clamp(4px,1.5vw,12px);align-items:stretch}\r\n.steps-cards.steps-cards-mep{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr);align-items:stretch;gap:clamp(8px,1.2vw,16px);width:100%;max-width:100%;box-sizing:border-box}\r\n.steps-cards.steps-cards-mep .step-card{min-width:0;width:100%;height:100%;align-self:stretch;box-sizing:border-box}\r\n.step-cards-connector{display:flex;align-items:center;justify-content:center;color:#D70416;opacity:.95;user-select:none;min-width:clamp(28px,3.5vw,2.75rem);align-self:stretch}.step-cards-connector-svg{display:block;width:clamp(28px,3.5vw,38px);height:clamp(28px,3.5vw,38px);flex-shrink:0}\r\n.step-card{position:relative;display:flex;flex-direction:column;align-items:center;min-height:0;height:100%;background:#fff;border:1.5px solid var(--bdr);border-radius:14px;padding:clamp(42px,5.5vw,52px) clamp(18px,3vw,24px) 28px;text-align:center;box-shadow:var(--sh);transition:transform .3s,box-shadow .3s,border-color .3s;overflow:visible}\r\n.step-card:hover{transform:translateY(-6px);box-shadow:var(--shl);border-color:var(--rm)}\r\n.step-circle{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);width:clamp(60px,14vw,76px);height:clamp(60px,14vw,76px);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:clamp(26px,4.5vw,34px);font-weight:700;color:#fff;margin:0;font-family:\"Segoe UI\",sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.15);z-index:2;box-sizing:border-box}\r\n.step-circle.sc1,.step-circle.sc2,.step-circle.sc3{background:#f8ebeccf!important;border:0.5px solid #D70416!important;color:#D70416!important}\r\n.sc4{}\r\n.sc5{background:radial-gradient(circle,#ec4899,#be185d)}\r\n.sc6{background:radial-gradient(circle,#14b8a6,#0f766e)}\r\n.step-ttl{font-size:17px;font-weight:700;color:var(--red);line-height:1.35;margin-bottom:10px;padding:0 4px}\r\n.step-txt{font-size:14px;color:var(--txt);line-height:26px;margin-bottom:0;flex:1 1 auto;padding:0 2px}\r\n.step-illo{margin-top:auto;width:100%;min-height:148px;box-sizing:border-box;display:flex;align-items:flex-end;justify-content:center;padding:18px 12px 20px;flex-shrink:0}\r\n.step-illo svg{display:block;max-width:100%;height:auto}\r\n.steps-cta{text-align:center;margin-top:40px}\r\n.steps-note{text-align:center;margin-top:12px;font-size:13px;color:var(--txl)}\r\n\r\n/* ════════════════════ S9 TESTIMONIALS ════════════════════ */\r\n.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}\r\n.testi-card{background:#fff;border:1.5px solid var(--bdr);border-radius:12px;padding:32px;position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s}\r\n.testi-card::before{content:'\\201C';position:absolute;top:-4px;right:18px;font-size:80px;color:rgba(215,4,22,.05);line-height:1;font-weight:700}\r\n.testi-card:hover{transform:translateY(-5px);box-shadow:var(--shm)}\r\n.testi-stars{color:#f59e0b;font-size:14px;letter-spacing:2px;margin-bottom:14px}\r\n.testi-txt{font-size:15px;color:var(--txt);line-height:27px;font-style:italic;margin-bottom:22px;position:relative;z-index:1}\r\n.testi-auth{display:flex;align-items:center;gap:12px}\r\n.testi-av{width:44px;height:44px;border-radius:50%;background:var(--red);color:#fff;font-size:15px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}\r\n.testi-name{font-size:15px;font-weight:600;color:var(--blk);line-height:22px}\r\n.testi-role{font-size:13px;color:var(--txl);line-height:20px}\r\n.testi-co{font-size:13px;color:var(--red);font-weight:600;margin-top:1px}\r\n\r\n/* ════════════════════ FAQ ════════════════════ */\r\n.faq-wrap{max-width:820px;margin:0 auto}\r\n.faq-item{border-bottom:1.5px solid var(--bdr)}\r\n.faq-q{padding:24px 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer!important;gap:16px;transition:color .2s;user-select:none;font-size:20px;font-weight:600;line-height:28px;color:var(--blk)}\r\n.faq-q:hover,.faq-q.open{color:var(--red)}\r\n.faq-tog{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--bdr);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,border-color .2s,transform .3s}\r\n.faq-q.open .faq-tog{background:var(--red);border-color:var(--red);transform:rotate(45deg)}\r\n.faq-tog svg{width:14px;height:14px;stroke:#777;stroke-width:2;fill:none;transition:stroke .2s}\r\n.faq-q.open .faq-tog svg{stroke:#fff}\r\n.faq-ans{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .3s}\r\n.faq-ans.open{max-height:240px;padding-bottom:20px}\r\n.mep-bim-html-root .faq-ans.open{max-height:2000px}\r\n.mep-intro-pills{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:44px;margin-bottom:16px;padding:6px 0;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:5px 10px 15px rgb(87 83 83 / 26%)}\r\n.mep-intro-pill-cell{display:flex;align-items:center;justify-content:center;gap:10px;padding:clamp(14px,2vw,20px) clamp(6px,1.2vw,12px);text-align:center;min-height:52px;min-width:0;transition:transform .28s cubic-bezier(.2,.8,.2,1)}\r\n.mep-intro-pill-cell:not(:last-child){border-right:1px solid var(--bdr)}\r\n.mep-intro-pill-cell:hover{transform:translateY(-5px)}\r\n.mep-intro-pills .ben-chk{display:inline-block}\r\n.mep-intro-pill-txt{font-size:clamp(9px,0.95vw,14px);font-weight:800;text-transform:uppercase;letter-spacing:.045em;color:#1a1a1a;line-height:1.25;font-family:\"Segoe UI\",system-ui,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}\r\n.svc-ico-wrap{display:flex;align-items:center;justify-content:center;background:transparent!important}\r\n.svc-card .svc-vis.svc-ico-wrap{min-height:70px;box-sizing:border-box}\r\n.svc-ico-wrap svg{width:56px;height:56px;flex-shrink:0;color:var(--red);stroke:var(--red)}\r\n.svc-ico-wrap .svc-ico-img{width:86px;height:86px;object-fit:contain;flex-shrink:0;display:block}\r\n.mep-bim-html-root .clash-wrap{background:#fff;padding:var(--sec-y) 0}\r\n.mep-bim-html-root .clash-hd{text-align:center;margin-bottom:56px}\r\n.mep-bim-html-root .clash-hd .tag{justify-content:center}\r\n.mep-bim-html-root .clash-hd .h2{color:#000;margin:0;line-height:1.2}\r\n.mep-bim-html-root .clash-hd .h2 span{color:var(--red)}\r\n.mep-bim-html-root .clash-hd p{color:var(--txt);margin:14px auto 0;font-size:16px!important;line-height:28px!important;font-weight:400!important}\r\n.mep-bim-html-root .clash-stages{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:48px}\r\n.mep-bim-html-root .clash-stage-card{background:#fff;border:1px solid var(--bdr);border-radius:14px;padding:30px 30px;position:relative;overflow:hidden;box-shadow:var(--sh);transition:box-shadow .25s,border-color .25s}\r\n.mep-bim-html-root .clash-stage-card:hover{box-shadow:var(--shm);border-color:var(--rm)}\r\n.mep-bim-html-root .clash-stage-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--red)}\r\n.mep-bim-html-root .clash-stage-badge{display:inline-flex;align-items:center;gap:8px;background:var(--red);color:#fff;font-size:11px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;padding:5px 12px;border-radius:100px;margin-bottom:18px}\r\n.mep-bim-html-root .clash-stage-badge svg{flex-shrink:0;display:block}\r\n.mep-bim-html-root .clash-stage-ttl{font-size:20px;font-weight:700;color:#000;margin-bottom:12px;line-height:30px}\r\n.mep-bim-html-root .clash-stage-txt{font-size:14px;line-height:26px;color:var(--txt);margin:0}\r\n.mep-bim-html-root .clash-stage-tools{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}\r\n.mep-bim-html-root .clash-tool-pill{background:var(--rs);border:1px solid var(--rm);color:var(--blk);font-size:12px;font-weight:600;padding:5px 12px;border-radius:100px;letter-spacing:.3px}\r\n.mep-bim-html-root .clash-stats-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,2vw,18px);background:transparent;border-radius:0;padding:0;margin-bottom:44px;overflow:visible}\r\n.mep-bim-html-root .clash-stat-cell{padding:clamp(18px,2.2vw,26px) clamp(14px,2vw,18px);text-align:center;background:#fff;position:relative;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border-radius:14px;border:none!important;box-shadow:0 8px 28px rgba(0,0,0,.07),0 2px 14px rgba(215,4,22,.1);transition:transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s ease}\r\n.mep-bim-html-root .clash-stat-cell:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(0,0,0,.1),0 8px 28px rgba(215,4,22,.16)}\r\n.mep-bim-html-root .clash-stat-cell:not(:last-child){border-right:none!important}\r\n.mep-bim-html-root .clash-stat-val{font-size:clamp(26px,3vw,34px);font-weight:800;color:var(--red);line-height:1.1;margin:0 0 10px;font-family:\"Segoe UI\",system-ui,sans-serif;letter-spacing:-0.02em}\r\n.mep-bim-html-root .clash-stat-lbl{font-size:16px;line-height:1.45;color:var(--txt);font-weight:500;max-width:13rem;margin:0 auto}\r\n.mep-bim-html-root .clash-quote-strip{border:1px solid var(--bdr);border-left:4px solid var(--red);border-radius:0 10px 10px 0;padding:24px 32px;background:var(--rs);display:flex;align-items:center;gap:24px}\r\n.mep-bim-html-root .clash-quote-ico{flex-shrink:0;width:48px;height:48px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff}\r\n.mep-bim-html-root .clash-quote-ico svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\r\n.mep-bim-html-root .cq-txt{font-size:18px !important;font-style:italic;line-height:28px;color:var(--txt);margin:0 0 14px}\r\n.mep-bim-html-root .cq-attr{font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--red)}\r\n.faq-ans p{font-size:18px!important;color:var(--txt);line-height:27px!important}\r\n@media(max-width:768px){.mep-bim-html-root .mep-hero-grid{grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:clamp(12px,4vw,20px);column-gap:0}.mep-bim-html-root .mep-hero-grid > .mep-hero-h1{grid-column:1;grid-row:1;text-align:center;max-width:100%;line-height:1.15!important;font-size:clamp(1.25rem,5.2vw + 0.6rem,2.875rem)!important}.mep-bim-html-root .mep-hero-media{grid-column:1;grid-row:2;height:auto;justify-content:center}.mep-bim-html-root .mep-hero-img{max-width:min(420px,100%);margin:0 auto;object-position:center;transform:scale(1.08);transform-origin:center}.mep-bim-html-root .mep-hero-grid > .mep-hero-lead{grid-column:1;grid-row:3;text-align:center;max-width:100%!important;margin-left:auto;margin-right:auto}.mep-bim-html-root .mep-hero-grid > .mep-hero-ctas{grid-column:1;grid-row:4;width:100%;max-width:100%;flex-direction:column;flex-wrap:nowrap;align-items:stretch;gap:10px;margin-bottom:clamp(20px,4vw,32px)}.mep-bim-html-root #hero .mep-hero-ctas .btn{width:100%;max-width:100%;justify-content:center;box-sizing:border-box;white-space:nowrap;font-size:clamp(10px,3.4vw,15px)!important;line-height:1.25!important;padding-top:clamp(10px,2.5vw,14px)!important;padding-bottom:clamp(10px,2.5vw,14px)!important;padding-left:clamp(10px,3vw,18px)!important;padding-right:clamp(10px,3vw,18px)!important}.mep-bim-html-root #hero .mep-hero-ctas .btn .icon{flex-shrink:0;font-size:0.85em}.mep-bim-html-root .mep-final-ctas{flex-direction:column;flex-wrap:nowrap;align-items:stretch;width:100%;max-width:min(560px,100%);margin-left:auto;margin-right:auto;gap:10px}.mep-bim-html-root .mep-final-ctas .btn{width:100%;max-width:100%;justify-content:center;box-sizing:border-box;white-space:nowrap;font-size:clamp(10px,3.2vw,15px)!important;line-height:1.25!important;padding:clamp(10px,2.5vw,14px) clamp(12px,3vw,18px)!important}.mep-bim-html-root .mep-final-ctas .btn .icon{flex-shrink:0;font-size:0.85em}.mep-bim-html-root .trust-strip-inner{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:clamp(8px,2.2vw,12px)!important;flex-wrap:unset!important;justify-content:stretch;align-items:stretch}.mep-bim-html-root .trust-strip .ts-item{flex:none!important;min-width:0!important;max-width:none!important;width:100%;padding:clamp(12px,3vw,20px) clamp(8px,2.5vw,14px)!important;gap:clamp(6px,2vw,10px)!important}.mep-bim-html-root .trust-strip .ts-num{font-size:clamp(1.2rem,5.5vw,1.9rem)!important;line-height:0.95!important}.mep-bim-html-root .trust-strip .ts-label{font-size:clamp(9px,2.6vw,12px)!important;letter-spacing:.06em!important;max-width:100%!important;line-height:1.3!important}.mep-bim-html-root .trust-strip{padding-top:clamp(4px,1.2vw,8px);padding-bottom:clamp(20px,5vw,56px)}.mep-bim-html-root .svc-vis{height:clamp(118px,30vw,185px)}.mep-bim-html-root .svc-ico-wrap .svc-ico-img{width:clamp(54px,16vw,86px);height:auto}.mep-bim-html-root .svc-title{font-size:clamp(15px,3.8vw,18px)}.mep-bim-html-root .svc-text{font-size:clamp(13px,3.2vw,15px);line-height:1.5}.mep-bim-html-root .off-card{padding:clamp(16px,4vw,26px) clamp(12px,3vw,20px)}.mep-bim-html-root .off-ttl{font-size:clamp(13px,3.5vw,15px);line-height:1.35}.mep-bim-html-root .off-txt{font-size:clamp(12px,3.2vw,14px);line-height:1.45}.mep-bim-html-root .clash-stat-cell{padding:clamp(12px,3vw,22px) clamp(8px,2.5vw,14px)!important}.mep-bim-html-root .clash-stat-val{font-size:clamp(1.05rem,4.8vw,1.75rem)!important;margin-bottom:clamp(6px,2vw,10px)!important}.mep-bim-html-root .clash-stat-lbl{font-size:clamp(10px,2.8vw,14px)!important}.mep-bim-html-root .step-illo{min-height:clamp(96px,26vw,148px);padding:clamp(8px,2vw,16px)}.mep-bim-html-root .step-illo svg{max-width:min(100%,clamp(130px,40vw,190px));height:auto}.mep-bim-html-root .ben-vis{height:clamp(108px,28vw,165px)}.mep-bim-html-root .ben-vis--icon img{max-height:min(88px,20vw);max-width:min(100%,min(160px,44vw))}.mep-bim-html-root .ben-ttl{font-size:clamp(15px,3.8vw,19px)}.mep-bim-html-root .ben-txt{font-size:clamp(12px,3.2vw,14px)}.mep-bim-html-root .wf-card{padding:clamp(18px,4vw,30px) clamp(14px,3vw,24px)}.mep-bim-html-root .wf-ttl{font-size:clamp(15px,3.8vw,18px)}.mep-bim-html-root .wrap .h2{font-size:clamp(1.2rem,4vw + 0.55rem,2.25rem)!important;line-height:1.2!important}.mep-bim-html-root .mep-intro-pill-txt{font-size:clamp(8px,2.5vw,12px)!important}.mep-bim-html-root .ind-card{padding:clamp(18px,4vw,26px) clamp(14px,3vw,22px)}.mep-bim-html-root .ind-ttl{font-size:clamp(14px,3.5vw,16px)}.mep-bim-html-root .why-card{padding:clamp(18px,3vw,26px) clamp(8px,2vw,10px)}.mep-bim-html-root .why-ttl{font-size:clamp(14px,3.5vw,17px)}.mep-bim-html-root .why-txt{font-size:clamp(11px,3vw,13px)}}\r\n\r\n/* ════════════════════ RESPONSIVE ════════════════════ */\r\n@media(max-width:1100px){.off-grid{grid-template-columns:repeat(2,1fr)}.why-grid{grid-template-columns:repeat(3,1fr)}.ft-top{grid-template-columns:1fr 1fr;gap:32px}}\r\n@media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr}.ind-grid{grid-template-columns:1fr 1fr}.steps-cards.steps-cards-mep{grid-template-columns:1fr;gap:0}.steps-cards.steps-cards-mep .step-cards-connector{transform:rotate(90deg);transform-origin:center;padding:clamp(8px,2vw,14px) 0;min-height:auto;width:100%;justify-content:center;align-self:center}.steps-cards.steps-cards-mep .step-cards-connector-svg{width:clamp(30px,9vw,42px);height:clamp(30px,9vw,42px)}.steps-cards{grid-template-columns:1fr 1fr;row-gap:clamp(40px,6vw,52px)}.testi-grid{grid-template-columns:1fr 1fr}.ct-grid{grid-template-columns:1fr}.ben-grid{grid-template-columns:1fr 1fr}.wf-grid{grid-template-columns:1fr 1fr}.steps-wrap{padding:36px 24px 32px}.mep-bim-html-root #disciplines .disc-layout{grid-template-columns:1fr}.mep-bim-html-root #disciplines .disc-deliverables{position:static;margin-top:32px}.mep-bim-html-root #disciplines .disc-tab{font-size:13px;padding:14px 8px}.mep-bim-html-root .clash-stats-strip{grid-template-columns:repeat(2,1fr);gap:clamp(12px,2vw,16px)}.mep-bim-html-root .clash-stages{grid-template-columns:1fr}.mep-intro-pills{grid-template-columns:1fr 1fr}.mep-intro-pill-cell:not(:last-child){border-right:none}.mep-intro-pill-cell:nth-child(1),.mep-intro-pill-cell:nth-child(3){border-right:1px solid var(--bdr)}.mep-intro-pill-cell:nth-child(1),.mep-intro-pill-cell:nth-child(2){border-bottom:1px solid var(--bdr)}}\r\n@media(max-width:640px){.mep-bim-html-root{--sec-y:64px}.mep-bim-html-root .clash-hd{margin-bottom:40px}.mep-intro-pills{grid-template-columns:1fr;border-radius:10px}.mep-intro-pill-cell{border-right:none!important;border-bottom:1px solid var(--bdr)}.mep-intro-pill-cell:last-child{border-bottom:none}.svc-grid,.ben-grid,.ind-grid,.testi-grid,.why-grid,.off-grid,.wf-grid{grid-template-columns:1fr}.steps-cards{grid-template-columns:1fr}.hero-proof{flex-wrap:wrap}.pill-row{flex-direction:column}.fr{grid-template-columns:1fr}.ft-bot{flex-direction:column;gap:12px;text-align:center}.mep-bim-html-root .trust-strip-inner{gap:clamp(6px,2vw,10px)!important}.mep-bim-html-root .ts-item::after{display:none}.mep-bim-html-root .trust-strip .ts-item{padding:clamp(10px,2.8vw,16px) clamp(6px,2vw,10px)!important;gap:clamp(4px,1.5vw,8px)!important;border-radius:12px!important}.mep-bim-html-root .trust-strip .ts-num{font-size:clamp(1.05rem,5vw,1.65rem)!important}.mep-bim-html-root .trust-strip .ts-label{font-size:clamp(8px,2.4vw,11px)!important;letter-spacing:.05em!important}.wrap{padding:0 20px}.wrap-why-us{padding:0}.mep-bim-html-root #disciplines .disc-tabs{padding:0 16px;gap:0}.mep-bim-html-root #disciplines .disc-tab{font-size:12px;padding:12px 6px}.steps-lbl-row{flex-wrap:wrap;gap:6px}.mep-bim-html-root .clash-stages{grid-template-columns:1fr}.mep-bim-html-root .clash-stats-strip{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.mep-bim-html-root .clash-stats-strip .clash-stat-cell{border:none!important}.mep-bim-html-root .clash-stat-lbl{font-size:clamp(11px,3.2vw,16px)!important;line-height:1.4!important;max-width:100%!important;padding:0 4px}.mep-bim-html-root .clash-quote-strip{flex-direction:column;align-items:flex-start;gap:16px}}\r\n@media (prefers-reduced-motion: reduce){.mep-bim-html-root .ts-item:hover,.mep-bim-html-root .clash-stat-cell:hover{transform:none!important}.mep-intro-pill-cell:hover{transform:none!important}}";

const MEP_CS_STICKY_TOTAL = 3;

/** Hero copy + meta aligned with project case study pages */
const MEP_CS_STICKY_SLIDES = [
  {
    tag: "Education · Austin, TX",
    titleAccent: "Clash-free HVAC Coordination",
    titleRest: ": Multi-Unit School Project in Austin, TX",
    desc: "Delivered fully coordinated HVAC and hydronic systems, resolving all clashes pre-construction to ensure seamless installation and on-time project delivery.",
    meta: [
      { lbl: "Project Type", val: "School Building" },
      { lbl: "Level of Development", val: "LOD 400" },
      { lbl: "Manpower Used", val: "5 Resources" },
      { lbl: "Location", val: "Austin, TX" },
    ],
    imageSrc: encodeURI("/image/HVAC-Coordination (1).png"),
    imageAlt: "HVAC BIM coordination — 3D mechanical systems for the Austin school project",
    to: "/projects/hvac-bim-coordination-for-school-building-austin/",
  },
  {
    tag: "Industrial · Florida, USA",
    titleAccent: "MEPF BIM Coordination",
    titleRest: " for Industrial Office Building: Florida, USA",
    desc: "LOD 350 BIM modeling for Plumbing, HVAC, and Fire Protection systems delivered in 7 days for seamless coordination and efficient space use.",
    meta: [
      { lbl: "Project Type", val: "Industrial Facility" },
      { lbl: "Level of Development", val: "LOD 350" },
      { lbl: "Manpower Used", val: "4 Resources" },
      { lbl: "Location", val: "Florida, USA" },
    ],
    imageSrc: encodeURI("/image/MEPF-BIM-Coordination-for-Industrial-Office-Building-Florida,-USA.png"),
    imageAlt: "MEPF BIM coordination — 3D plumbing, HVAC, and fire protection systems for the Florida industrial office project",
    to: "/projects/mepf-bim-coordination-for-industrial-office-building/",
  },
  {
    tag: "Residential · Revere, MA",
    titleAccent: "Clash-Free MEPF Coordination",
    titleRest: " for 56-Unit Residential Development : Revere, MA",
    desc: "Delivered precise LOD 350 BIM coordination across complex MEPF systems for a multi-story affordable housing project.",
    meta: [
      { lbl: "Project Type", val: "Residential Building" },
      { lbl: "Level of Development", val: "LOD 350" },
      { lbl: "Manpower Used", val: "5 Resources" },
      { lbl: "Location", val: "Revere, MA" },
    ],
    imageSrc: encodeURI("/image/Clash-Free-MEPF-Coordination-for-56-Unit-Residential-Development.png"),
    imageAlt: "MEPF BIM coordination for affordable housing project in Revere, MA",
    to: "/projects/mepf-coordination-for-affordable-housing/",
  },
];

/** mep-bim-landing (14) S5 — sticky horizontal scroll; scoped to #casestudies so legacy .cs-card rules do not clash */
const MEP_CS_STICKY_STYLES = `
#casestudies.cs-outer{position:relative;background:linear-gradient(180deg,#fbfbfc 0%,#f6f7f9 100%);--cs-sticky-top:85px;--cs-vspace:14px;--cs-footer-h:76px;--cs-head-h:86px;--cs-card-h:clamp(270px,calc(100vh - var(--cs-sticky-top) - var(--cs-head-h) - var(--cs-footer-h) - (var(--cs-vspace) * 2)),450px);margin-bottom:-40px}
#casestudies .cs-sticky{position:sticky;top:var(--cs-sticky-top);height:calc(100vh - var(--cs-sticky-top));overflow:hidden;background:var(--off);display:flex;flex-direction:column;justify-content:flex-start;padding:var(--cs-vspace) 0 0}
#casestudies .cs-section-hd{text-align:center;margin-bottom:var(--cs-vspace);flex-shrink:0;min-height:var(--cs-head-h);padding:8px 0 4px!important}
#casestudies .cs-section-hd .tag{justify-content:center}
#casestudies .cs-section-hd h2.h2{margin-top:8px;font-size:2.5rem!important;line-height:1.2!important;letter-spacing:-0.02em!important}
#casestudies .cs-card-wrap{max-width:var(--vbs-page-max,1440px);margin:0 auto;padding:0 clamp(16px,3vw,40px);min-width:0;flex:0 1 auto;min-height:0;display:flex;flex-direction:column;gap:10px}
#casestudies .cs-card{border:1.5px solid rgba(215,4,22,.16);border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 18px 44px rgba(17,24,39,.12);height:var(--cs-card-h);min-height:var(--cs-card-h)}
#casestudies .cs-slides{display:flex;width:300%;height:100%;transition:transform .7s cubic-bezier(.77,0,.175,1);}
#casestudies .cs-slide{width:33.333%;display:grid;grid-template-columns:1fr 1fr;flex-shrink:0;height:100%}
#casestudies .cs-content{display:flex;flex-direction:column;justify-content:center;padding:clamp(14px,2vh,28px) clamp(18px,2.2vw,34px);background:linear-gradient(180deg,#fff 0%,#fff8f8 100%);position:relative;overflow:hidden;border-right:1px solid rgba(215,4,22,.14)}
#casestudies .cs-slide-tag{display:inline-flex;align-items:center;gap:7px;background:var(--rs);border:1px solid var(--rm);color:var(--red);font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;padding:4px 12px;border-radius:100px;margin-bottom:10px;width:fit-content}
#casestudies h2.cs-slide-title{font-size:1.68rem!important;font-weight:700!important;line-height:1.28!important;color:var(--blk)!important;margin-bottom:10px!important;letter-spacing:-0.01em}
#casestudies .cs-slide-title .cs-slide-title-acc{color:var(--red)}
#casestudies .cs-slide-desc{font-size:14px!important;line-height:1.65!important;color:var(--txt)!important;margin-bottom:14px!important}
#casestudies .cs-meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
#casestudies .cs-meta-item{background:#fff;border:1px solid rgba(215,4,22,.16);border-radius:10px;padding:10px 12px;box-shadow:0 4px 14px rgba(0,0,0,.04)}
#casestudies .cs-meta-lbl{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#aaa;margin-bottom:3px}
#casestudies .cs-meta-val{font-size:11px;font-weight:700;color:var(--blk);line-height:16px}
#casestudies .cs-slide-cta{display:inline-flex;align-items:center;gap:8px;background:var(--red);color:#fff;font-size:12px;font-weight:700;padding:10px 18px;border-radius:999px;text-decoration:none;transition:transform .2s,box-shadow .2s,opacity .2s;width:fit-content}
#casestudies .cs-slide-cta:hover{opacity:1;transform:translateY(-1px);box-shadow:0 10px 20px rgba(215,4,22,.28)}
#casestudies .cs-slide-cta svg{transition:transform .2s;flex-shrink:0}
#casestudies .cs-slide-cta:hover svg{transform:translateX(3px)}
#casestudies .cs-visual{position:relative;overflow:hidden;background:#f0f4f8}
#casestudies .cs-visual-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(255,255,255,.2),transparent 28%);z-index:1}
#casestudies .cs-visual-img{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
#casestudies .cs-card-footer{max-width:var(--vbs-page-max,1440px);margin:0 auto;padding:0 clamp(16px,3vw,40px);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-shrink:0;min-height:var(--cs-footer-h)}
#casestudies .cs-footer-center{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:8px;flex-shrink:0;padding:0;margin:0}
#casestudies .cs-dots{display:flex;gap:8px;justify-content:center}
#casestudies .cs-dot{width:24px;height:4px;border-radius:4px;background:rgba(0,0,0,.18);cursor:pointer;transition:background .3s,width .3s;border:none;padding:0}
#casestudies .cs-dot.active{background:var(--red);width:44px}
#casestudies .cs-counter{font-size:12px;font-weight:700;color:#bbb;letter-spacing:2px;white-space:nowrap}
#casestudies .cs-more-btn{white-space:nowrap;margin-bottom:0}
@media(max-height:900px){#casestudies.cs-outer{--cs-vspace:10px;--cs-footer-h:72px;--cs-head-h:72px}#casestudies .cs-section-hd{padding:4px 0 2px!important}#casestudies .cs-section-hd h2.h2{font-size:2rem!important;margin-top:0!important}}
@media(max-height:760px){#casestudies.cs-outer{--cs-card-h:clamp(260px,calc(100vh - var(--cs-sticky-top) - var(--cs-head-h) - var(--cs-footer-h) - (var(--cs-vspace) * 2)),380px);--cs-vspace:8px;--cs-footer-h:70px;--cs-head-h:64px}#casestudies .cs-section-hd h2.h2{font-size:1.75rem!important}}
@media(max-height:699px){#casestudies.cs-outer{--cs-card-h:300px;--cs-vspace:8px;--cs-footer-h:68px;--cs-head-h:58px}#casestudies .cs-section-hd h2.h2{font-size:1.7rem!important;margin-top:0}#casestudies .cs-slide-tag{margin-bottom:5px;font-size:10px;padding:3px 10px}#casestudies h2.cs-slide-title{font-size:1.25rem!important;margin-bottom:5px!important}#casestudies .cs-slide-desc{font-size:14px!important;margin-bottom:8px!important}#casestudies .cs-meta-grid{gap:4px;margin-bottom:8px}#casestudies .cs-meta-item{padding:5px 7px}#casestudies .cs-meta-val{font-size:10px}#casestudies .cs-slide-cta{padding:6px 12px;font-size:10px}}
@media(max-height:549px){#casestudies.cs-outer{--cs-vspace:6px;--cs-footer-h:64px;--cs-head-h:52px}#casestudies .cs-section-hd h2.h2{font-size:1.45rem!important}#casestudies h2.cs-slide-title{font-size:1.2rem!important;margin-bottom:4px!important}#casestudies .cs-slide-desc{font-size:14px!important;line-height:1.45!important;margin-bottom:8px!important}#casestudies .cs-meta-grid{gap:4px;margin-bottom:8px}#casestudies .cs-meta-item{padding:4px 6px}#casestudies .cs-meta-val{font-size:9px}#casestudies .cs-slide-cta{padding:6px 12px;font-size:10px}}

@media(max-width:900px){#casestudies .cs-slide{grid-template-columns:5fr 4fr}#casestudies .cs-section-hd h2.h2{font-size:2rem!important}#casestudies .cs-card-footer{flex-wrap:wrap;gap:10px}}
@media(max-width:768px){#casestudies.cs-outer{--cs-sticky-top:88px}}
@media(max-width:640px){#casestudies.cs-outer{--cs-card-h:auto}#casestudies .cs-card{height:auto;min-height:0}#casestudies .cs-slide{grid-template-columns:1fr;grid-template-rows:160px auto;height:auto}#casestudies .cs-visual{display:block;min-height:unset;height:160px;order:-1}#casestudies .cs-section-hd h2.h2{font-size:1.8rem!important}#casestudies .cs-content{border-right:none;border-bottom:1px solid var(--bdr);padding:18px 18px 22px}#casestudies h2.cs-slide-title{font-size:1.2!important}#casestudies .cs-slide-desc{display:block;font-size:14px!important;margin-bottom:14px!important}#casestudies .cs-meta-grid{grid-template-columns:1fr 1fr}#casestudies .cs-card-footer{flex-wrap:wrap;gap:10px}#casestudies .cs-more-btn{flex:1;justify-content:center}}
@media (prefers-reduced-motion: reduce){#casestudies .cs-slides{transition-duration:.01ms}#casestudies .cs-dot{transition:none}}
`.trim();

const CsSlideCtaArrow = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <line x1="4" y1="10" x2="16" y2="10" />
    <polyline points="11 5 16 10 11 15" />
  </svg>
);

const IMG_COMMERCIAL =
  "/image/Commercial.jpg";
const IMG_EDU =
  "/image/Educational.jpg";
const IMG_RES =
  "/image/Residential1.jpg";
const IMG_HEALTH =
  "/image/Hospital.jpg";
const IMG_INDUSTRIAL =
  "/image/Industrial.jpg";
const IMG_TRANSPORT =
  "/image/Infrastructure-&-Transportation.jpg";
const IMG_HISTORIC =
  "/image/Historic.jpg";
const IMG_HOTELS =
  "/image/Hotels.jpg";

const PROJECT_EXPERTISE = [
  { title: "Commercial", imageUrl: IMG_COMMERCIAL },
  { title: "Educational", imageUrl: IMG_EDU },
  { title: "Historic Monuments", imageUrl: IMG_HISTORIC },
  { title: "Hotels & Resorts", imageUrl: IMG_HOTELS },
  { title: "Residential Buildings", imageUrl: IMG_RES },
  { title: "Transportation & Infrastructure", imageUrl: IMG_TRANSPORT },
  { title: "Healthcare Facilities", imageUrl: IMG_HEALTH },
  { title: "Industrial & Manufacturing", imageUrl: IMG_INDUSTRIAL },
];

const OFFERINGS = [
  {
    title: "MEP BIM Modeling Services",
    text: "We deliver data-rich 3D MEPF models (LOD 300–500) that ensure seamless integration with architectural and structural systems. Our models comply with ASHRAE, NEC, IPC, and NFPA standards to enhance coordination, reduce rework, and support design validation and facility management.",
    image: "/image/MEP BIM Modeling-1.jpeg",
  },
  {
    title: "MEP Revit Family Creation Services",
    text: "We Deliver custom, parametric Revit families for MEP components like valves, fixtures, and panels, built to project standards. Each family is performance-tested for accuracy, flexibility, and interoperability within the Revit platform, ensuring consistent documentation and scheduling.",
    image: "/image/MEP Revit Family Creation-2.jpeg",
  },
  {
    title: "MEP Shop Drawing Services",
    text: "Our installation-ready MEP shop drawings include detailed plans, sections, and assemblies for HVAC, piping, and electrical systems. We also provide sleeve layouts, hanger details, and dimensioned drawings that align with contractor and fabrication requirements.",
    image: "/image/MEP-BIM-Modeling-Services-2.jpg",
  },


  {
    title: "Bill of Material (BOM) Services",
    text: "Using BIM models, we extract accurate quantities and generate detailed BOQs for all MEP systems. Our automated QTO services reduce manual errors and offer reliable cost estimation for budgeting, resource planning, and project control.",
    image: "/image/Bill-of-Material-(BOM)-Services.jpg",
  },
  {
    title: "Pre-Bid Estimation Services",
    text: "We deliver accurate pre-bid estimates using advanced BIM tools and industry-standard software, covering material takeoffs, labor costs, and equipment pricing. Our fast turnarounds and precise reports help contractors bid confidently, reduce cost overruns, and win more profitable projects.",
    image: "/image/Pre-Bid-Estimation-Services-1.jpg",
  },
  {
    title: "MEP Spool Drawing Services",
    text: "We create fabrication-ready spool drawings for MEP systems, complete with dimensions, IDs, joint locations, and material specifications. These detailed drawings streamline off-site prefabrication, reduce site installation errors, and support efficient construction sequencing.",
    image: "/image/MEP-Spool-Drawing-Services-1.jpg",
  },


  {
    title: "MEP Clash Detection & Coordination Services",
    text: "Our expert BIM team performs clash detection using Navisworks and BIM 360 to identify and resolve conflicts between MEP, architectural, and structural systems. Our coordination process ensures constructability through issue tracking, clash reports, and collaborative resolution sessions with project stakeholders. ",
    image: "/image/MEP Clash Detection & Coordination-2.png",
  },
  {
    title: "Scan to BIM Services for MEP Systems",
    text: "We convert point cloud data into detailed MEP as-built models for renovation and facility management projects. These models represent real-world conditions and help with accurate planning, coordination, advanced clash detection, improved decision-making, and lifecycle documentation, ensuring higher efficiency across all project stages.",
    image: "/image/Scan to BIM Services for MEP Systems.jpeg",
  },

];

const MEP_FAQS = [
  {
    q: "What are MEP BIM Services?",
    a: "MEP BIM Services involve creating detailed 3D models of Mechanical, Electrical, Plumbing, and Fire Protection systems using BIM tools like Autodesk Revit. These models support accurate design, coordination, and documentation throughout the entire building lifecycle from schematic design to facility management.",
  },
  {
    q: "How do MEP BIM Services benefit my construction project?",
    a: "MEP BIM Services improve design accuracy, enable early clash detection, and improve coordination among all disciplines. Projects see reduced rework, optimized construction schedules, and cost savings during both construction and operations with fewer RFIs and faster project delivery.",
  },
  {
    q: "What is the difference between Revit MEP Modeling and traditional CAD drafting?",
    a: "Revit MEP Modeling creates intelligent, data-rich 3D models that allow real-time collaboration and automatic updates across all views. Traditional CAD drafting produces static 2D representations without integrated data making coordination more manual, more error-prone, and significantly more time-consuming.",
  },
  {
    q: "Do you offer custom MEP Revit Family Creation?",
    a: "Yes. We create custom Revit families for MEP components that meet project-specific requirements and manufacturer specifications. Every family is performance-tested for accuracy, flexibility, and full compatibility within the Revit environment.",
  },
  {
    q: "What does your clash detection process involve?",
    a: "Our team runs multi-disciplinary clash detection using Navisworks Manage and BIM 360 at each design milestone. We identify hard clashes, soft clearance conflicts, and duplication errors. Then resolve each issue in coordination meetings with all trade representatives before shop drawings go out.",
  },
  {
    q: "What deliverables does a client receive from your MEP BIM services?",
    a: "We provide coordinated MEPF models (LOD 300–500), MEP shop drawings, spool drawings, clash detection reports, material take-offs, BOQ extractions, custom Revit family libraries, and as-built models, all tailored to your project's specific requirements and submission standards.",
  },
  {
    q: "How do you address compliance with industry codes and standards?",
    a: "Our team applies ASHRAE, NFPA, IPC, NEC, and SMACNA standards throughout the modeling and coordination process. US-code compliance is a core part of our quality checks not a post-modeling afterthought. Every model goes through a code review before final delivery.",
  },
  {
    q: "Do you offer flexible engagement models for different project sizes?",
    a: "Yes. We provide scalable solutions from dedicated single-resource engagements to full project teams. Our model carries zero long-term commitments, and clients can scale up or down as project demands change throughout the construction schedule.",
  },
  {
    q: "What makes Virtual Building Studio's MEP BIM services different from other providers?",
    a: "We deliver clash-free MEP BIM models using Revit and Navisworks, backed by US-trained top 1% experts, a one-month risk-free trial, and zero lock-in periods. Our contractor-first approach means every deliverable targets faster installation, fewer site conflicts, and better project control all with a money-back guarantee.",
  },
  {
    q: "What standards and file formats do you follow for MEPF BIM deliverables?",
    a: "We follow ASHRAE, NEC, IPC, and NFPA standards and deliver models in RVT, NWC, NWD, IFC, and DWG formats. This format range covers full compatibility with your project tools and AHJ submission requirements.",
  },
  {
    q: "How do you manage data security and project confidentiality?",
    a: "We apply strict confidentiality agreements, secure data transfer protocols, and role-based access controls to protect all project information. Our data management practices meet enterprise-level security requirements for US-based AEC clients.",
  },
  {
    q: "How do I get started with your MEP BIM services?",
    a: "Reach out through our contact form or book a 30-minute MEP BIM discovery call. Our team reviews your project requirements and provides a tailored proposal with recommended LOD scope, timeline, and engagement model ready to start within days.",
  },
];

const TRUST_STRIP_STATS = [
  { target: 2000, suffix: "+", label: "Projects Delivered" },
  { target: 300, suffix: "+", label: "Global Clients" },
  { target: 11, suffix: "+", label: "Years of Experience" },
  { target: 200, suffix: "+", label: "Licensed Engineers" },
];

const MEP_CUSTOM_MENU_ITEMS = [
  { label: "Services", sectionId: "services" },
  { label: "Disciplines", sectionId: "disciplines" },
  { label: "Methods", sectionId: "technical-methods" },
  { label: "Benefits", sectionId: "benefits" },
  { label: "Why Choose", sectionId: "why-choose-us" },
  { label: "FAQs", sectionId: "faqs" },
];

const DiscDeliverableSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D70416" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export function MepBimServicesUsaPage({ scrollToSectionId = null, contentOnly = false }: { scrollToSectionId?: string | null; contentOnly?: boolean }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const csOuterRef = useRef<HTMLDivElement | null>(null);
  const trustStripRef = useRef<HTMLDivElement | null>(null);
  const trustStatsAnimatedRef = useRef(false);
  const [trustCounts, setTrustCounts] = useState(() => TRUST_STRIP_STATS.map(() => 1));
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDisc, setActiveDisc] = useState("mech");
  const [csStickyIdx, setCsStickyIdx] = useState(0);
  const prevActiveDisc = useRef("mech");

  const toggleFaq = useCallback((idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  }, []);

  const scrollToSectionWithHash = useCallback((sectionId: string) => {
    if (typeof document === "undefined") return;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined") {
      // Prefer /page#section over /page/#section (no trailing slash before hash).
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      window.history.replaceState(null, "", `${path}${window.location.search}#${sectionId}`);
    }
  }, []);

  const scrollToFullSpectrumServices = useCallback(() => {
    scrollToSectionWithHash("services");
  }, [scrollToSectionWithHash]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const hashId = window.location.hash?.replace("#", "");
    if (!hashId) return undefined;
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const currentPath = `${path}${window.location.search}`;
    // Prevent browser's instant native hash jump, then perform smooth scroll intentionally.
    window.history.replaceState(null, "", currentPath);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const t = window.setTimeout(() => {
      document.getElementById(hashId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${currentPath}#${hashId}`);
    }, 120);
    return () => window.clearTimeout(t);
  }, []);

  const scrollToMepContactForm = useCallback(() => {
    if (typeof document === "undefined") return;
    document.getElementById("mep-page-contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleBookMeeting = useCallback((event?: React.MouseEvent | React.SyntheticEvent) => {
    void openBookMeetingModal(event);
  }, []);

  const csGoTo = useCallback((idx: number) => {
    setCsStickyIdx(Math.max(0, Math.min(idx, MEP_CS_STICKY_TOTAL - 1)));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const outer = csOuterRef.current;
    if (!outer) return undefined;
    const getStickyTop = () => (window.innerWidth <= 768 ? 88 : 120);
    const getStickyHeight = () => Math.max(360, window.innerHeight - getStickyTop());
    let outerHeight = 0;
    let stickyHeight = 0;
    let ticking = false;
    const setHeight = () => {
      stickyHeight = getStickyHeight();
      outer.style.height = `${MEP_CS_STICKY_TOTAL * stickyHeight}px`;
      outerHeight = outer.offsetHeight;
    };
    const updateScrollState = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = outerHeight - stickyHeight;
      const progress = scrollable <= 0 ? 0 : Math.max(0, Math.min(1, scrolled / scrollable));
      const idx = Math.min(MEP_CS_STICKY_TOTAL - 1, Math.floor(progress * MEP_CS_STICKY_TOTAL));
      setCsStickyIdx((prev) => (prev !== idx ? idx : prev));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollState();
        ticking = false;
      });
    };
    const onResize = () => {
      setHeight();
      updateScrollState();
    };
    setHeight();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    updateScrollState();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    document.body.classList.add("mep-bim-services-page");
    return () => {
      document.body.classList.remove("mep-bim-services-page");
    };
  }, []);

  useEffect(() => {
    if (!scrollToSectionId || typeof document === "undefined") return undefined;
    const t = window.setTimeout(() => {
      document.getElementById(scrollToSectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(t);
  }, [scrollToSectionId]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".rv, .rv-l, .rv-r");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) x.target.classList.add("in");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -28px 0px" },
    );
    els.forEach((el: Element) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = trustStripRef.current;
    if (!el || typeof window === "undefined") return;
    const targets = TRUST_STRIP_STATS.map((s) => s.target);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || trustStatsAnimatedRef.current) return;
        trustStatsAnimatedRef.current = true;
        io.disconnect();
        const duration = 2200;
        const start = performance.now();
        const ease = (u: number) => 1 - (1 - u) ** 3;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const k = ease(t);
          setTrustCounts(targets.map((max) => Math.max(1, Math.round(1 + (max - 1) * k))));
          if (t < 1) requestAnimationFrame(tick);
          else setTrustCounts(targets);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (prevActiveDisc.current === activeDisc) return;
    prevActiveDisc.current = activeDisc;
    const root = rootRef.current;
    if (!root) return;
    const panel = root.querySelector(`#disc-${activeDisc}`);
    if (!panel) return;
    const rvEls = panel.querySelectorAll(".rv, .rv-l, .rv-r");
    rvEls.forEach((el: Element) => el.classList.remove("in"));
    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        rvEls.forEach((el: Element) => el.classList.add("in"));
      });
    });
    return () => window.cancelAnimationFrame(id);
  }, [activeDisc]);

  const PageRoot = (contentOnly ? "div" : "main") as "main";

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 20000 }}
        toastStyle={{ borderRadius: "12px", fontWeight: 700, fontSize: "15px" }}
      />
      <style dangerouslySetInnerHTML={{ __html: `${MEP_STYLES}\n${MEP_CS_STICKY_STYLES}` }} />
      <style>{`
        body.mep-bim-services-page .call-icon {
          display: none !important;
        }
        .mep-hero-ctas .mep-btn-view-services.mep-btn-outline-theme {
          border: 1px solid #d70416 !important;
          color: #d70416 !important;
          background: #fff !important;
        }
        .mep-hero-ctas .mep-btn-view-services.mep-btn-outline-theme:hover,
        .mep-hero-ctas .mep-btn-view-services.mep-btn-outline-theme:focus {
          border: 1px solid #d70416 !important;
          color: #d70416 !important;
          background: rgba(237, 201, 204, 0.1) !important;
          box-shadow: 0 0 0 3px rgba(215, 4, 22, 0.12);
        }
        .mep-bim-html-root #hero.mep-hero-v3 {
          padding-bottom: 20px !important;
        }
        .mep-hero-v3 {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #e2e2e2;
          min-height: 88vh;
          display: flex;
          align-items: flex-start;
          background: #fff;
        }
        .mep-hero-v3-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: url("/image/MEP_BIM_Services_USA_2.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .mep-hero-v3-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        
        }
        .mep-hero-v3-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, transparent 12%, transparent 88%, rgba(255, 255, 255, 0.4) 100%);
        }
        .mep-hero-v3-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: var(--vbs-page-max, 1440px);
          margin: 0 auto;
          padding: 12px 56px 0;
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .mep-hero-v3-left {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .mep-hero-v3-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .mep-hero-v3-eyebrow-bar {
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: #d70416;
          flex-shrink: 0;
        }
        .mep-hero-v3-eyebrow-text {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d70416;
        }
        .mep-hero-v3-left .mep-hero-h1 {
          margin-bottom: 16px !important;
          line-height: 1.15 !important;
        }
        .mep-hero-v3-left .mep-hero-lead {
          margin-bottom: 32px !important;
          max-width: 500px;
        }
        .mep-hero-v3-right {
          flex: 0 0 520px;
          max-width: 520px;
          width: 100%;
          margin-top:12px
        }
        .mep-hero-v3-form {
          background: #ffffff;
          border-top: 4px solid #d70416;
          border-radius: 14px;
          padding: 30px 20px 6px;
          border: 1px solid #ececec;
          box-shadow: 0 14px 32px rgba(17, 24, 39, 0.12), 0 2px 8px rgba(17, 24, 39, 0.06);
        }
        .mep-hero-v3-form-head {
          text-align: center;
       
         
        }
        .mep-hero-v3-form-kicker {
          display: inline-block;
          margin: 0 0 10px;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #d70416;
          background: rgba(215, 4, 22, 0.08);
          border: 1px solid rgba(215, 4, 22, 0.2);
        }
        .mep-hero-v3-form-title {
          font-size: clamp(1.05rem, 2.1vw, 1.56rem) !important;
          line-height: 1.32 !important;
          font-weight: 800 !important;
          color: #0f172a !important;
          margin: 0 0 12px !important;
          letter-spacing: -0.025em !important;
          text-transform: none !important;
        }
        .mep-hero-v3-form-highlight {
          color: #d70416;
          font-weight: 800;
        }
        .mep-hero-v3-form-desc {
          margin: 0 auto !important;
          max-width: 28em;
          color: #475569 !important;
          font-size: 14px !important;
          line-height: 1.55 !important;
        }
        .mep-hero-v3-form-desc strong {
          color: #0f172a;
          font-weight: 700;
        }
        .mep-hero-v3-form-embed {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-width: 0;
          height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px;
          min-height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px;
          padding: 0;
          margin: 24px 0 -48px;
          background: transparent;
        }
        .mep-hero-v3-form-embed .mep-hero-v3-form-iframe.vbs-zoho-iframe-form {
          position: relative;
          width: 99%;
          min-width: 0;
          height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px !important;
          min-height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px;
          max-height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px;
          overflow: hidden;
          touch-action: manipulation;
          background: transparent;
          --vbs-zoho-iframe-visible-height: ${ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}px;
          --vbs-zoho-iframe-header-crop: ${ZOHO_MEP_LANDING_HEADER_CROP_PX}px;
        }
        .mep-hero-v3-form-embed .vbs-zoho-iframe-form__shift {
          transform: translate3d(0, calc(-1 * ${ZOHO_MEP_LANDING_HEADER_CROP_PX}px), 0);
          will-change: transform;
          background: transparent;
        }
        .mep-hero-v3-form-embed .mep-hero-v3-form-iframe__frame {
          display: block;
          width: 99% !important;
          min-width: 99%;
          border: none !important;
          background: transparent !important;
          background-color: transparent !important;
          margin-top: 0;
          height: var(--vbs-zoho-iframe-full-height) !important;
          touch-action: manipulation;
          pointer-events: auto;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip .ts-num {
          font-size: clamp(1.7rem, 3.4vw, 2.15rem) !important;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip .ts-label {
          font-size: clamp(10px, 1.05vw, 12px) !important;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip {
          max-width: 500px;
          margin-top: 6px;
          padding-bottom: 0 !important;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip .trust-strip-inner {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 18px !important;
          justify-content: stretch !important;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip .ts-item {
          min-width: 0 !important;
          width: 100% !important;
        }
        .mep-bim-html-root .mep-hero-v3 .trust-strip .ts-num {
          margin-bottom: 6px !important;
        }
        @media (max-width: 1024px) {
          .mep-hero-v3-inner {
            flex-direction: column;
            padding: 12px 28px 0;
            gap: 36px;
          }
          .mep-hero-v3-right {
            flex: none;
            max-width: 100%;
          }
          .mep-hero-v3-form {
            padding: 28px 24px 8px;
          }
          .mep-bim-html-root .mep-hero-v3 .trust-strip {
            max-width: 100%;
          }
          .mep-hero-v3-overlay {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.84) 60%, rgba(255, 255, 255, 0.6) 100%);
          }
        }
        @media (max-width: 768px) {
          .mep-hero-v3-left .mep-hero-h1 {
            font-size: clamp(1.8rem, 7vw, 2.35rem) !important;
            line-height: 1.24 !important;
            letter-spacing: 0 !important;
            margin-bottom: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .mep-hero-v3-left .mep-hero-h1 {
            font-size: clamp(1.58rem, 8.2vw, 1.95rem) !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
      <PageRoot ref={rootRef} className="mep-bim-html-root">
        {!contentOnly && (
          <MepHeader
            menuItems={MEP_CUSTOM_MENU_ITEMS}
            onSectionClick={scrollToSectionWithHash}
            onBookMeeting={handleBookMeeting}
          />
        )}

        {!contentOnly && (
        <section id="hero" className="mep-hero-v3">
          <div className="mep-hero-v3-bg" />
          <div className="mep-hero-v3-overlay" />
          <div className="mep-hero-v3-vignette" />
          <div className="mep-hero-v3-inner">
            <div className="mep-hero-v3-left">
              <div className="mep-hero-v3-eyebrow">
                <span className="mep-hero-v3-eyebrow-bar" />
                <span className="mep-hero-v3-eyebrow-text">Clash-Free MEP BIM Models
                </span>
              </div>
              <h1 className="hero-h1 mep-hero-h1">
                <span>MEP BIM Services</span>{" "}That{" "}
                <br />
                Reduce Rework &amp;{" "}Improve{" "}
                <br />
                Project Coordination
              </h1>
              <p className="lead text-secondary mb-lg-4 mep-hero-lead">
                From pre-bid estimation to clash-free coordination and as-built models we help contractors and AEC firms deliver projects faster and more
                efficiently.
              </p>
              <div className="trust-strip" ref={trustStripRef}>
                <div className="trust-strip-inner">
                  {TRUST_STRIP_STATS.map((stat, i) => (
                    <div className="ts-item" key={stat.label}>
                      <div className="ts-num stats-count">
                        {trustCounts[i]}
                        {stat.suffix}
                      </div>
                      <div className="ts-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mep-hero-v3-right">
              <div className="mep-hero-v3-form">
                <div className="mep-hero-v3-form-head">

                  <h3 className="mep-hero-v3-form-title">
                    Free <span className="mep-hero-v3-form-highlight">Shop Drawings</span> With Every{" "}
                    <span className="mep-hero-v3-form-highlight">Modelling + Coordination</span> Projects
                  </h3>
                  <p className="mep-hero-v3-form-desc">
                    Get detailed, installation-ready shop drawings included when you opt for our modelling and coordination services.

                  </p> 
                </div>
                <div className="mep-hero-v3-form-embed">
                  <ZohoPublicIframeForm
                    iframeId={ZOHO_MEP_LANDING_IFRAME_ID}
                    iframeSrc={ZOHO_MEP_LANDING_IFRAME_SRC}
                    title="MEP - Landing page - Contact us Form"
                    initialHeight={ZOHO_MEP_LANDING_VISIBLE_HEIGHT_PX}
                    headerCropPx={ZOHO_MEP_LANDING_HEADER_CROP_PX}
                    lockHeight
                    transparentBackground
                    loadPriority="high"
                    className="mep-hero-v3-form-iframe"
                    frameClassName="mep-hero-v3-form-iframe__frame"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {!contentOnly && (
        <section className="sec sec-alt">
          <div className="wrap">
            <div className="svc-intro rv" style={{ maxWidth: "1440px" }}>
              <h2 className="h2 mep-intro-split-h2">
                <span className="mep-intro-line">Construction-Ready  <span style={{ color: "var(--red)" }}>MEP BIM Services</span> for</span>
                <span className="mep-intro-line">
                  Seamless Project Execution
                </span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "18px", fontSize: "18px", lineHeight: "30px" }}>
                We are MEP BIM service providers in the USA supporting AEC firms and contractors across the project lifecycle. We handle everything from pre-bid estimation to clash-free coordination and drawings to support efficient project execution. Our specialists create code-compliant models in Revit and Navisworks for as-built deliverables with accuracy.
              </p>
              <div className="mep-intro-pills rv">
                <div className="mep-intro-pill-cell">
                  <span className="ben-chk">✔</span>
                  <span className="mep-intro-pill-txt">Top 1% Vetted MEP Experts</span>
                </div>
                <div className="mep-intro-pill-cell">
                  <span className="ben-chk">✔</span>
                  <span className="mep-intro-pill-txt">US Code-Compliant Models</span>
                </div>
                <div className="mep-intro-pill-cell">
                  <span className="ben-chk">✔</span>
                  <span className="mep-intro-pill-txt">Fast Turnaround</span>
                </div>
                <div className="mep-intro-pill-cell">
                  <span className="ben-chk">✔</span>
                  <span className="mep-intro-pill-txt">3-Day Onboarding</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ════ WHAT WE OFFER — replaced by MepFullSpectrumServicesSection when contentOnly ════ */}
        {!contentOnly && (
        <section id="services" className="sec sec-alt">
          <div className="wrap">
            <div className="center rv" style={{ marginBottom: "48px" }}>
              {/* <div className="tag" style={{ justifyContent: "center" }}>What We Offer</div> */}
              <h2 className="h2">
                Our Full-Spectrum <span style={{ color: "var(--red)" }}>MEP Services</span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "14px", marginInline: "auto" }}>
                We deliver accurate  3D MEPF models (LOD 200–500) that ensure seamless clash detection, coordinated shop drawings, and constructible BIM models across every stage from
                pre-bid to as-built handover.
              </p>
            </div>
            <div className="ben-grid">
              {OFFERINGS.slice(0, 6).map((item) => (
                <div className="ben-card rv" key={item.title}>
                  <div className="ben-vis" style={{ height: "178px" }}>
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="ben-body">
                    <h4 className="ben-ttl">{item.title}</h4>
                    <p className="ben-txt text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="rv"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
                maxWidth: "820px",
                margin: "20px auto 0",
              }}
            >
              {OFFERINGS.slice(6).map((item) => (
                <div className="ben-card rv" key={item.title}>
                  <div className="ben-vis" style={{ height: "178px" }}>
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="ben-body">
                    <h4 className="ben-ttl">{item.title}</h4>
                    <p className="ben-txt text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="off-cta rv">
              <PrimaryCtaButton fullWidth={false} onClick={scrollToMepContactForm}>
                Have a Project in Mind? Let&apos;s Talk
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
        )}

        {/* ════ CORE MEP DISCIPLINES — replaced by MepDisciplinesSection when contentOnly ════ */}
        {!contentOnly && (
        <section id="disciplines" className="sec">
          <div className="wrap">
            <div className="disc-hd rv">
              {/* <div className="tag" style={{ justifyContent: "center" }}>
                Why Choose Us?
              </div> */}
              <h2 className="h2">
                Core  <span style={{ color: "var(--red)" }}>MEP Disciplines</span> Modeled with BIM Expertise
              </h2>
              <p className="text-secondary" style={{ marginTop: "14px" }}>
                Each discipline in MEP BIM Services demands a distinct technical approach. Virtual Building Studio models every system with code-accurate
                detail and full coordination across trades.
              </p>
            </div>
            <div className="disc-nav-wrap">
              <div className="disc-nav">
                <div className="disc-tabs">
                  <button
                    type="button"
                    className={`disc-tab${activeDisc === "mech" ? " active" : ""}`}
                    onClick={() => setActiveDisc("mech")}
                  >
                    Mechanical BIM
                  </button>
                  <button
                    type="button"
                    className={`disc-tab${activeDisc === "elec" ? " active" : ""}`}
                    onClick={() => setActiveDisc("elec")}
                  >
                    Electrical BIM
                  </button>
                  <button
                    type="button"
                    className={`disc-tab${activeDisc === "plmb" ? " active" : ""}`}
                    onClick={() => setActiveDisc("plmb")}
                  >
                    Plumbing BIM
                  </button>
                  <button
                    type="button"
                    className={`disc-tab${activeDisc === "hvac" ? " active" : ""}`}
                    onClick={() => setActiveDisc("hvac")}
                  >
                    Fire Protection BIM
                  </button>
                </div>
              </div>
            </div>
            <div className="disc-panels">
              <div id="disc-mech" className={`disc-panel${activeDisc === "mech" ? " active" : ""}`}>
                <div className="disc-layout">
                  <div className="disc-body rv-l">
                    <h3 className="disc-h3">Mechanical BIM Services</h3>
                    <p className="text-secondary">
                      Our Mechanical BIM Services deliver full 3D models of ductwork, AHU placements, piping systems, and plant rooms, sized to SMACNA standards
                      with precise coordination across structure and services. Models support design validation, fabrication, and site installation, with
                      coordinated schedules ready for contractor review and shop drawing generation.
                    </p>
                    <div className="disc-meta-row">
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Standards Applied</span>
                        <span className="disc-meta-val">SMACNA Ductwork, ASHRAE 90.1, ASHRAE 62.1</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Key Systems Modeled</span>
                        <span className="disc-meta-val">Supply/Return Ductwork, AHUs, VAV Boxes, ERUs, FCUs, Plant Rooms</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">LOD Capability</span>
                        <span className="disc-meta-val">LOD 300 Design → LOD 400 Fabrication → LOD 500 As-Built</span>
                      </div>
                    </div>
                  </div>
                  <div className="disc-deliverables rv-r">
                    <div className="disc-del-ttl">
                      <DiscDeliverableSvg />
                      Mechanical BIM Deliverables
                    </div>
                    <ul className="disc-del-list">
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Coordinated duct routing models with SMACNA sheet metal gauges and fittings
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>AHU and equipment placement with factory-clearance zones modeled
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Plant room layouts with structural interface coordination
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Duct pressure class schedules and volume control damper locations
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Chilled water and condenser water piping at LOD 350+
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Mechanical shop drawings and hanger/support details
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Duct and equipment quantity take-off schedules
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="disc-elec" className={`disc-panel${activeDisc === "elec" ? " active" : ""}`}>
                <div className="disc-layout">
                  <div className="disc-body rv-l">
                    <h3 className="disc-h3">Electrical BIM Services</h3>
                    <p className="text-secondary">
                      Our Electrical BIM Services model complete power distribution, conduit routing, cable trays, switchgear rooms, and lighting layouts coordinated to NEC standards. Deliverables include panel schedules, riser diagrams, and LOD 350+ models supporting prefabrication, reducing field installation time, and providing construction-ready documentation from design through fabrication.
                    </p>
                    <div className="disc-meta-row">
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Standards Applied</span>
                        <span className="disc-meta-val">NEC, IEEE, NFPA 70, Local AHJ Requirements</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Key Systems Modeled</span>
                        <span className="disc-meta-val">Conduit, Cable Trays, Panels, Switchgear, Lighting, Emergency Power</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">LOD Capability</span>
                        <span className="disc-meta-val">LOD 300–400 with Panel Schedules and Circuit Assignments</span>
                      </div>
                    </div>
                  </div>
                  <div className="disc-deliverables rv-r">
                    <div className="disc-del-ttl">
                      <DiscDeliverableSvg />
                      Electrical BIM Deliverables
                    </div>
                    <ul className="disc-del-list">
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Conduit routing models coordinated with structure and above-ceiling trades
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Cable tray layouts with NEC fill calculations and support spacing
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>MCC rooms, switchgear rooms, and transformer pad models
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Lighting fixture placement with circuit and switch assignments
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>One-line diagrams and power riser coordination in Revit
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Panel and circuit schedules extracted from the BIM model
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Electrical shop drawings for conduit and equipment installation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="disc-plmb" className={`disc-panel${activeDisc === "plmb" ? " active" : ""}`}>
                <div className="disc-layout">
                  <div className="disc-body rv-l">
                    <h3 className="disc-h3">Plumbing BIM Services</h3>
                    <p className="text-secondary">
                      Our Plumbing BIM Services model domestic water supply, drainage, vent stacks, and fixture connections with code-accurate slopes and IPC-compliant gradients. Fully coordinated across mechanical and structural systems, our 3D models support pipe sub-assembly prefabrication, reduce installation discrepancies, and accelerate on-site rough-in timelines.
                    </p>
                    <div className="disc-meta-row">
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Standards Applied</span>
                        <span className="disc-meta-val">IPC, UPC, ASPE, Local Plumbing Codes</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Key Systems Modeled</span>
                        <span className="disc-meta-val">Domestic Water, Drainage, Vent Stacks, Grease Traps, Storm Drainage</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">LOD Capability</span>
                        <span className="disc-meta-val">LOD 300 Design → LOD 400 with Slope and Invert Elevations</span>
                      </div>
                    </div>
                  </div>
                  <div className="disc-deliverables rv-r">
                    <div className="disc-del-ttl">
                      <DiscDeliverableSvg />
                      Plumbing BIM Deliverables
                    </div>
                    <ul className="disc-del-list">
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Cold and hot water supply piping with correct pipe sizing and velocity checks
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Drainage models with IPC-compliant slopes and invert elevations
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Fixture connection models for toilets, sinks, floor drains, and cleanouts
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Sanitary and vent stack routing coordinated with structural penetrations
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Grease interceptor, sump pit, and sewage ejector models
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Storm drainage and roof drain piping coordination
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Plumbing isometric and shop drawings for prefabrication
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="disc-hvac" className={`disc-panel${activeDisc === "hvac" ? " active" : ""}`}>
                <div className="disc-layout">
                  <div className="disc-body rv-l">
                    <h3 className="disc-h3">Fire Protection BIM Services</h3>
                    <p className="text-secondary">
                      Our Fire Protection BIM Services model sprinkler systems, standpipe networks, and fire suppression layouts in coordination with NFPA standards. As-built models include coordinated pipe schedules and hanger layouts, supporting fire protection contractors and fabricators through permitting, procurement, and installation.
                    </p>

                    <div className="disc-meta-row">
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Standards Applied</span>
                        <span className="disc-meta-val">NFPA 13, NFPA 14</span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">Key Systems Modeled</span>
                        <span className="disc-meta-val">Wet & Dry Sprinkler Systems, Standpipe Systems, Fire Suppression, Hydrant Networks    </span>
                      </div>
                      <div className="disc-meta-item">
                        <span className="disc-meta-lbl">LOD Capability</span>
                        <span className="disc-meta-val">LOD 200–400 with Full Riser Coordination and Ceiling Space Integration </span>
                      </div>
                    </div>
                  </div>
                  <div className="disc-deliverables rv-r">
                    <div className="disc-del-ttl">
                      <DiscDeliverableSvg />
                      Fire Protection BIM Deliverables
                    </div>
                    <ul className="disc-del-list">
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Wet, dry, and pre-action sprinkler piping systems at LOD 200-400
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Standpipe and hose connection layouts with riser shaft coordination
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Sprinkler head placement with reflected ceiling plan integration
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Fire suppression system models for server rooms, kitchens, and high-risk areas
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Pipe hanger and seismic brace modeling with structural attachment points
                      </li>
                      <li className="disc-del-item">
                        <span className="disc-del-chk">✓</span>Fire protection shop drawings and coordination drawings for installation
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}



        {/* ════ CLASH RESOLUTION — replaced by MepQualityAssuranceSection when contentOnly ════ */}
        {!contentOnly && (
        <section className="clash-wrap" id="technical-methods">
          <div className="wrap">
            <div className="clash-hd rv">
              {/* <div className="tag">Technical Methods</div> */}
              <h2 className="h2">
                Our Technical Methods for <span>Inter-Disciplinary Conflict Resolution</span>
              </h2>
              <p className="text-secondary">
                MEP BIM Services at Virtual Building Studio apply a two-stage clash detection process that catches conflicts early and resolves them before
                construction begins - reducing RFIs and cutting change order volume at the project site.
              </p>
            </div>

            <div className="clash-stages rv">
              <div className="clash-stage-card">
                <div className="clash-stage-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Stage 1
                </div>
                <div className="clash-stage-ttl">In-Model Coordination</div>
                <p className="clash-stage-txt text-secondary">
                  Each trade model receives internal coordination checks using Revit's interference checking tools. Our BIM engineers review spatial conflicts between ducts, pipes, conduits, and structural elements within the linked model environment catching issues at the design stage.
                </p>
                {/* <div className="clash-stage-tools">
                  <span className="clash-tool-pill">Autodesk Revit</span>
                  <span className="clash-tool-pill">Interference Check</span>
                  <span className="clash-tool-pill">Design Stage</span>
                </div> */}
              </div>
              <div className="clash-stage-card">
                <div className="clash-stage-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Stage 2
                </div>
                <div className="clash-stage-ttl">Navisworks Federation</div>
                <p className="clash-stage-txt text-secondary">
                  We federate all trade models architectural, structural, mechanical, electrical, plumbing, and fire protection within Navisworks. We run rule-based clash tests for hard clashes, soft clashes (clearance violations), and workflow clashes (sequencing conflicts). Clash reports categorize each conflict by severity, trade, and grid reference.
                </p>
                {/* <div className="clash-stage-tools">
                  <span className="clash-tool-pill">Navisworks Manage</span>
                  <span className="clash-tool-pill">BIM 360</span>
                  <span className="clash-tool-pill">6-Trade Federation</span>
                </div> */}
              </div>
            </div>

            <div className="clash-stats-strip rv">
              <div className="clash-stat-cell">
                <div className="clash-stat-val">2×</div>
                <div className="clash-stat-lbl">Clash detection stages on every project</div>
              </div>
              <div className="clash-stat-cell">
                <div className="clash-stat-val">LOD 400</div>
                <div className="clash-stat-lbl">Fabrication-level resolution for shop drawings</div>
              </div>
              <div className="clash-stat-cell">
                <div className="clash-stat-val">6 Trades</div>
                <div className="clash-stat-lbl">Arch + Struct + MEP + FP federated coordination</div>
              </div>
              <div className="clash-stat-cell">
                <div className="clash-stat-val">Weekly</div>
                <div className="clash-stat-lbl">Coordination meetings with all stakeholders</div>
              </div>
            </div>

            <div className="clash-quote-strip rv">
              <div className="clash-quote-ico" aria-hidden>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="clash-quote-body">
                <p className="cq-txt text-secondary">
                  &quot;Prevention costs less than correction. Our two-stage process catches conflicts at the design phase - eliminating costly site modifications and
                  delivering clash-free models that construction teams can trust.&quot;
                </p>
                <div className="cq-attr">VBS BIM Coordination Approach</div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* ════ SERVICE BENEFITS — replaced by MepServiceBenefitsSection when contentOnly ════ */}
        {!contentOnly && (
        <section className="sec sec-ben" id="benefits">
          <div className="wrap">
            <div className="s4-hd rv">
              {/* <div className="tag" style={{ justifyContent: "center" }}>Why It Matters</div> */}
              <h2 className="h2">
                Key Benefits of Adopting <span style={{ color: "var(--red)" }}>MEP BIM Services</span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "12px", marginInline: "auto" }}>
                MEP BIM Services transform every phase of your project from design to facility management. Virtual Building Studio delivers measurable outcomes
                across coordination, cost, and construction efficiency.
              </p>
            </div>
            <div className="ben-grid">
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_IMPROVED_DESIGN} alt="Improved design accuracy" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Improved Design Accuracy
                  </h4>
                  <p className="ben-txt text-secondary">
                    MEP BIM Services produce precise MEPF layouts that meet spatial and project requirements with fewer revisions. Accurate parametric models reduce design errors and cut coordination cycles across all trades.
                  </p>
                </div>
              </div>
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_SMARTER_FM} alt="Smarter facility management" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Smarter Facility Management
                  </h4>
                  <p className="ben-txt text-secondary">
                    BIM models enriched with COBie and asset data act as digital twins for long-term building operations. Facility managers efficiently track maintenance schedules, assets, and system upgrades directly from the model data.
                  </p>
                </div>
              </div>
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_ENHANCED_VIZ} alt="Enhanced visualization and planning" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Enhanced Visualization &amp; Planning
                  </h4>
                  <p className="ben-txt text-secondary">
                    High-resolution 3D MEPF models give all project stakeholders complete visibility into system layouts and design intent. Teams assess constructability, identify conflicts, and make informed decisions before construction begins.
                  </p>
                </div>
              </div>
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_SCHED_COST} alt="Optimized project scheduling and costing" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Optimized Project Scheduling &amp; Costing
                  </h4>
                  <p className="ben-txt text-secondary">
                    4D and 5D BIM dimensions allow accurate construction sequencing and reliable cost forecasting. Quantity take-offs and cost estimates come directly from the coordinated model, improving planning and financial control.
                  </p>
                </div>
              </div>
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_PREFAB} alt="Faster prefabrication and modular construction" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Faster Prefabrication &amp; Modular Construction
                  </h4>
                  <p className="ben-txt text-secondary">
                    Clash-free MEPF models support generation of accurate spool and shop drawings for off-site fabrication. Coordinated models accelerate installation timelines, reduce material waste, and improve quality through construction.
                  </p>
                </div>
              </div>
              <div className="ben-card rv">
                <div className="ben-vis ben-vis--icon">
                  <img src={IMG_BEN_COORD} alt="Seamless multidisciplinary coordination" width={200} height={110} loading="lazy" decoding="async" />
                </div>
                <div className="ben-body">
                  <h4 className="ben-ttl">
                    Seamless Multidisciplinary Coordination
                  </h4>
                  <p className="ben-txt text-secondary">
                    Integrated BIM workflows foster seamless, real-time collaboration among all project disciplines. Early-stage coordination catches design clashes before construction, eliminating costly change orders and project delays.

                  </p>
                </div>
              </div>
            </div>
            <div className="s4-cta rv d-flex justify-content-center">
              <PrimaryCtaButton fullWidth={false} onClick={handleBookMeeting}>
                Schedule a BIM Consultation
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
        )}

        {/* ════ WHY CHOOSE US — replaced by MepWhyChooseSection when contentOnly ════ */}
        {!contentOnly && (
        <section className="sec" id="why-choose-us">
          <div className="wrap-why-us">
            <div className="center rv" style={{ marginBottom: "48px" }}>
              {/* <div className="tag" style={{ justifyContent: "center" }}>Why VBS</div> */}
              <h2 className="h2">
                Why Leading Firms Choose Our <span style={{ color: "var(--red)" }}>MEP BIM Services</span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "12px", marginInline: "auto" }}>
                Work with a BIM partner that delivers accuracy, speed, and results across every stage of your project from pre-bid to as-built handover.
              </p>
            </div>
            <div className="why-grid">
              <div className="why-card rv">
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D70416" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div className="why-ttl">Top 1% BIM Experts</div>
                <p className="why-txt text-secondary">Highly experienced MEP BIM professionals trained on global standards and complex US projects worldwide.</p>
              </div>
              <div className="why-card rv">
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D70416" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="why-ttl">US Code-Compliant Delivery</div>
                <p className="why-txt text-secondary">
                  Models align with ASHRAE, NFPA, IPC, SMACNA, NEC, and regional AHJ compliance requirements.
                </p>
              </div>
              <div className="why-card rv">
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D70416" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="why-ttl">Fast Turnaround Cycles</div>
                <p className="why-txt text-secondary">
                  Accelerate project timelines with efficient BIM workflows and quick delivery cycles tuned for US contractor schedules.
                </p>
              </div>
              <div className="why-card rv">
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D70416" strokeWidth="2">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </div>
                <div className="why-ttl">Flexible Engagement Models</div>
                <p className="why-txt text-secondary">
                  Scale your BIM team with dedicated resources, task support, or full project teams with zero long-term lock-in.

                </p>
              </div>
              <div className="why-card rv">
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D70416" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="why-ttl">End-to-End BIM Support</div>
                <p className="why-txt text-secondary">
                  From pre-bid modeling to as-built documentation complete MEP project lifecycle support under one roof.
                </p>
              </div>
            </div>
            <div className="why-cta rv">
              <PrimaryCtaButton fullWidth={false} onClick={scrollToMepContactForm}>
                Get the Right BIM Team Onboard
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
        )}

        {/* ════ CASE STUDIES — replaced by shared redesign sections when contentOnly ════ */}
        {!contentOnly && (
        <div className="cs-outer" id="casestudies" ref={csOuterRef}>
          <div className="cs-sticky" id="csSticky">
            <div className="cs-section-hd">

              <h2 className="h2">
                Client Success Stories That <span style={{ color: "var(--red)" }}>Deliver Real Results</span>
              </h2>
            </div>
            <div className="cs-card-wrap">
              <div className="cs-card">
                <div
                  className="cs-slides"
                  id="csSlides"
                  style={{ transform: `translateX(-${(csStickyIdx * 100) / MEP_CS_STICKY_TOTAL}%)` }}
                >
                  {MEP_CS_STICKY_SLIDES.map((slide) => (
                    <div className="cs-slide" key={slide.to}>
                      <div className="cs-content">
                        {/* <div className="cs-slide-tag">{slide.tag}</div> */}
                        <h2 className="cs-slide-title">
                          <span className="cs-slide-title-acc">{slide.titleAccent}</span>
                          {slide.titleRest}
                        </h2>
                        <p className="cs-slide-desc">{slide.desc}</p>
                        <div className="cs-meta-grid">
                          {slide.meta.map((m) => (
                            <div className="cs-meta-item" key={m.lbl}>
                              <div className="cs-meta-lbl">{m.lbl}</div>
                              <div className="cs-meta-val">{m.val}</div>
                            </div>
                          ))}
                        </div>
                        <Link href={slide.to} className="cs-slide-cta">
                          View Case Study <CsSlideCtaArrow />
                        </Link>
                      </div>
                      <div className="cs-visual">
                        <div className="cs-visual-overlay" aria-hidden />
                        <img className="cs-visual-img" src={slide.imageSrc} alt={slide.imageAlt} loading="lazy" decoding="async" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs-footer-center">
                <div className="cs-dots">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={`cs-dot${csStickyIdx === i ? " active" : ""}`}
                      data-idx={i}
                      aria-label={`Case study slide ${i + 1}`}
                      onClick={() => csGoTo(i)}
                    />
                  ))}
                </div>
                <PrimaryCtaButton fullWidth={false} href="/projects/?filter=MEP" className="cs-more-btn">
                  View more case studies
                </PrimaryCtaButton>
              </div>
            </div>


          </div>
        </div>
        )}

        {/* ════ SECTORS — replaced by IndustriesSection when contentOnly ════ */}
        {!contentOnly && (
        <section id="sectors" className="sec sec-alt">
          <div className="wrap">
            <div className="center rv" style={{ marginBottom: "48px" }}>
              {/* <div className="tag" style={{ justifyContent: "center" }}>Sectors We Serve</div> */}
              <h2 className="h2">
                Our MEP BIM <span style={{ color: "var(--red)" }}>Sector</span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "12px", marginInline: "auto" }}>
                Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve.
              </p>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {PROJECT_EXPERTISE.map((item) => (
                <div
                  key={item.title}
                  className="rv"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "14px",
                    minHeight: "168px",
                    boxShadow: "0 5px 24px rgba(0,0,0,.09)",
                    border: "1px solid #e6e6e6",
                  }}
                >
                  <img src={item.imageUrl} alt={item.title} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: "auto 0 0 0",
                      padding: "1.25rem 1.25rem 1.1rem",
                      background: "linear-gradient(0deg, rgba(0, 0, 0, .78), transparent)",

                    }}
                  >
                    <div style={{ color: "#fff", fontSize: "0.95rempx", fontWeight: 600, lineHeight: "20px", letterSpacing: ".2px" }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ind-cta rv">
              <PrimaryCtaButton fullWidth={false} onClick={handleBookMeeting}>
                Book a Free Consultation
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
        )}



        {/* ════ FAQ — replaced by FaqSection when contentOnly ════ */}
        {!contentOnly && (
        <section id="faqs" className="sec sec-alt">
          <div className="wrap">
            <div className="center rv" style={{ marginBottom: "48px" }}>
              {/* <div className="tag" style={{ justifyContent: "center" }}>FAQs</div> */}
              <h2 className="h2">
                Frequently Asked <span style={{ color: "var(--red)" }}>Questions</span>
              </h2>
            </div>
            <div className="faq-wrap">
              {MEP_FAQS.map((item, idx) => (
                <div className="faq-item rv" key={item.q}>
                  <div
                    className={"faq-q" + (openFaq === idx ? " open" : "")}
                    onClick={() => toggleFaq(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
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
            <div className="center rv" style={{ marginTop: "40px" }}>
              <p style={{ marginBottom: "16px", fontWeight: 600, color: "var(--blk)" }}>Have more questions about our MEP BIM Services?</p>
              <PrimaryCtaButton fullWidth={false} onClick={scrollToMepContactForm}>
                Ask Our MEP Modelers
              </PrimaryCtaButton>
            </div>
          </div>
        </section>
        )}

        {/* ════ FINAL CTA — replaced by EvaluateDeliveryCtaSection when contentOnly ════ */}
        {!contentOnly && (
        <section className="sec mep-final-cta-sec">
          <div className="wrap">
            <div className="center rv">

              <h2 className="h2">
                Start Your Next Project with <span style={{ color: "var(--red)" }}>MEP BIM Services That Deliver</span>
              </h2>
              <p className="text-secondary" style={{ marginTop: "14px", marginInline: "auto" }}>
                From pre-bid modeling to as-built documentation Virtual Building Studio delivers end-to-end BIM MEP Services that drive accuracy, coordination,
                and efficiency across every project phase.
              </p>
              <div className="hero-ctas mep-final-ctas" style={{ justifyContent: "center", marginTop: "28px" }}>
                <PrimaryCtaButton fullWidth={false} onClick={handleBookMeeting}>
                  Schedule Your 30-Minute Discovery Call
                </PrimaryCtaButton>
                <PrimaryCtaButton fullWidth={false} href="/success-stories/">
                  View Sample Projects
                </PrimaryCtaButton>
              </div>

            </div>
          </div>
        </section>
        )}
      </PageRoot>

      {/* ════ CONTACT — replaced by GetInTouchSection when contentOnly ════ */}
      {!contentOnly && (
        <div className="mep-page-contact-outer">
          <GetInTouchSection sectionId="mep-page-contact" sectionClassName="scroll-mt-24" />
        </div>
      )}
      {!contentOnly && <SiteFooter />}
    </>
  );
}

