"use client";

import React, { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import heroImage from "@/assets/images/calculator-cost-of-one-more-project.png";
import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { PageContainer } from "@/components/layout/page-container";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { ZohoWebToLeadToolPage } from "@/components/zoho/zoho-web-to-lead-tool-page";

import "@/styles/calculator-cost-of-one-more-project.scss";

const BASE = 22;

type ComputeInput = {
  util: number;
  load: number;
  ot: number;
  rw: number;
  hiringPenalty: number;
};

function compute({ util, load, ot, rw, hiringPenalty }: ComputeInput) {
  const loadPct = load;
  const otPct = ot;
  const rwPct = rw;
  const effUtil = util + loadPct;
  const overtimeImpact = otPct * (effUtil / 100);
  const overtimeMarginImpact = overtimeImpact * 0.3;
  const reworkMultiplier = 1 + (rwPct / 100) * 2;
  const reworkImpact = (reworkMultiplier - 1) * 10;
  const coordImpact = effUtil > 80 ? (effUtil - 80) * 1.5 : 0;
  const projMargin = BASE - overtimeMarginImpact - coordImpact - reworkImpact - hiringPenalty;
  const marginLoss = BASE - projMargin;
  const risk = effUtil > 85 ? "red" : effUtil >= 70 ? "yel" : "grn";
  return {
    effUtil,
    overtimeImpact,
    overtimeMarginImpact,
    reworkMultiplier,
    reworkImpact,
    coordImpact,
    projMargin,
    marginLoss,
    risk,
  };
}

/** Projected margin → gauge / meter accent (green / amber / red). */
function getMarginHealth(projMargin: number) {
  if (projMargin < 0) return { clr: "#D70416", key: "dang" };
  if (projMargin < 10) return { clr: "#F0B300", key: "neu" };
  return { clr: "#42AA32", key: "pos" };
}

const sliderStyle = (value: number, min = 0, max = 100, tone: "ok" | "warn" = "warn"): CSSProperties => ({
  background: `linear-gradient(to right,${tone === "ok" ? "#2f8f2f" : "#D70416"} ${((value - min) / (max - min)) * 100}%,${tone === "ok" ? "rgba(47,143,47,.14)" : "rgba(215,4,22,.14)"} ${((value - min) / (max - min)) * 100}%)`,
});

type RangeFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  ariaLabel: string;
  display: (value: number) => string;
  ticks?: string[];
  ariaValueText?: (value: number) => string;
  onRangeDragStart?: () => void;
  min?: number;
  max?: number;
  step?: number;
  note?: string;
  noteTone?: "ok" | "warn";
  sliderTone?: "ok" | "warn";
};

function RangeField({
  label,
  value,
  onChange,
  ariaLabel,
  display,
  ticks,
  ariaValueText,
  onRangeDragStart,
  min = 0,
  max = 100,
  step = 1,
  note,
  noteTone = "ok",
  sliderTone = "warn",
}: RangeFieldProps) {
  const leftPct = ((value - min) / (max - min)) * 100;
  const pillLeft = Math.min(96, Math.max(4, leftPct));
  const text = display(value);
  const valText = ariaValueText ? ariaValueText(value) : text;
  return (
    <div className="mch-field">
      <div className="mch-fhd">
        <span className="mch-fname">{label}</span>
      </div>
      <div className="mch-range-wrap">
        <span className={`mch-range-pill mch-range-pill-${sliderTone}`} style={{ left: `${pillLeft}%` }} aria-hidden>
          {text}
        </span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          className={`mch-range mch-range-${sliderTone}`}
          style={sliderStyle(value, min, max, sliderTone)}
          onChange={(e) => onChange(+e.target.value)}
          onPointerDown={() => onRangeDragStart?.()}
          aria-label={ariaLabel}
          aria-valuetext={valText}
        />
        <div className="mch-ticks">
          {(ticks || [`${min}%`, `${Math.round((min + max) / 2)}%`, `${max}%`]).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        {note ? (
          <div className={`mch-note mch-note-${noteTone}`}>
            {noteTone === "warn" ? <span className="mch-note-status mch-note-status-warn" aria-hidden /> : null}
            <span>{note}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Map projected margin (%) → semicircle fill: at/below min = empty, at/above max = full. */
const MARGIN_GAUGE_MIN = -45;
const MARGIN_GAUGE_MAX = 28;
const UTIL_METER_MAX = 130;

function RiskBannerIcon({ risk }: { risk: string }) {
  const a = { "aria-hidden": true as const, width: 24, height: 24, fill: "none", viewBox: "0 0 24 24" };
  if (risk === "red") {
    return (
      <svg {...a}>
        <path
          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 9v4M12 17h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (risk === "yel") {
    return (
      <svg {...a}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...a}>
      <path
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalculatorCostOfOneMoreProjectView() {
  const [util, setUtil] = useState(70);
  const [activeProjects, setActiveProjects] = useState(13);
  const [load, setLoad] = useState(5);
  const [ot, setOt] = useState(15);
  const [rw, setRw] = useState(5);
  const [hiringPenalty, setHiringPenalty] = useState(0);
  const [rangeDragging, setRangeDragging] = useState(false);
  const [showCapacityModal, setShowCapacityModal] = useState(false);

  const d = useMemo(() => compute({ util, load, ot, rw, hiringPenalty }), [util, load, ot, rw, hiringPenalty]);

  const {
    effUtil,
    overtimeImpact,
    overtimeMarginImpact,
    reworkMultiplier,
    reworkImpact,
    coordImpact,
    projMargin,
    marginLoss,
    risk,
  } = d;

  const { clr: marginClr, key: marginKey } = getMarginHealth(projMargin);
  const riskCls = risk === "red" ? "mch-neg" : risk === "yel" ? "mch-warn" : "mch-pos";
  const bfillCls = `mch-mg-${marginKey}`;

  const gaugeFillPct = useMemo(() => {
    const span = MARGIN_GAUGE_MAX - MARGIN_GAUGE_MIN;
    const clamped = Math.max(MARGIN_GAUGE_MIN, Math.min(MARGIN_GAUGE_MAX, projMargin));
    return span > 0 ? ((clamped - MARGIN_GAUGE_MIN) / span) * 100 : 0;
  }, [projMargin]);

  const utilBarClr = risk === "red" ? "#D70416" : risk === "yel" ? "#F0B300" : "#42AA32";

  const uPct = Math.min(Math.max((effUtil / UTIL_METER_MAX) * 100, 0), 100);
  const uTick80 = (80 / UTIL_METER_MAX) * 100;
  const uTick85 = (85 / UTIL_METER_MAX) * 100;

  const onHiring = useCallback((penalty: number) => {
    setHiringPenalty(penalty);
  }, []);

  const utilWarn = util < 50;
  const loadWarn = load < 5 || load > 30;
  const otWarn = ot < 15 || ot > 30;
  const rwWarn = rw < 5 || rw > 25;

  const startRangeDrag = useCallback(() => setRangeDragging(true), []);

  const openCapacityModal = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowCapacityModal(true);
  }, []);

  useEffect(() => {
    if (!rangeDragging) return undefined;
    const end = () => setRangeDragging(false);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    return () => {
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
    };
  }, [rangeDragging]);

  const uFillRatio = Math.max(0, Math.min(1, uPct / 100));
  const bOvertimeRatio = Math.max(0, Math.min(overtimeImpact / 30, 1));
  const bCoordRatio = Math.max(0, Math.min(coordImpact / 30, 1));
  const bReworkRatio = Math.max(0, Math.min((reworkMultiplier - 1) / 1, 1));
  const bHiringRatio = Math.max(0, Math.min(hiringPenalty / 5, 1));

  return (
    <>
      <LandingTopHeader fixed />
      <main className={`margin-calc-page${rangeDragging ? " mch-range-dragging" : ""}`}>
        <ToastContainer
          position="top-right"
          autoClose={4500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="mch-toast"
          className="mch-toast-container"
        />

        <section className="mch-hero">
          <PageContainer className="mch-hero-inner">
            <div className="mch-hero-copy">
              <div className="mch-hero-copy-main">
                <h1>
                  The Real Cost of &quot;
                  <span className="mch-red mch-hero-accent">One&nbsp;More</span>
                  &quot; Project
                </h1>
                <p className="mch-hero-sub">
                  That next project might look profitable until capacity, rework, and hiring lag start
                  eating into your margins.
                </p>
              </div>
              <PrimaryCtaButton fullWidth={false} href="#calc" className="mch-hero-cta">
                Calculate The Real Cost Before You Commit
              </PrimaryCtaButton>
            </div>

            <div className="mch-hero-media">
              <Image
                src={heroImage}
                alt="Architect overwhelmed by project workload and documentation at a busy desk"
                width={650}
                height={530}
                priority
                className="mch-hero-media-img"
                sizes="(max-width: 1023px) 100vw, 650px"
              />
            </div>
          </PageContainer>
        </section>

        <section className="mch-section" id="calc">
          <div className="mch-s-hd">
            <h2>
              Project Margin <span className="mch-red mch-s-hd-accent">Risk&nbsp;Calculator</span>
            </h2>
            <p>
              Input your current workload and project assumptions to reveal the hidden cost layers
              affecting your margins.
            </p>
          </div>

          <div className="mch-grid">
            <div className="mch-card">
              <div className="mch-fname" style={{ marginBottom: 18, fontSize: 16 }}>
                Enter Your Details
              </div>
              <div className="mch-sec-lbl">
                <div className="mch-sec-icon">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                </div>
                Current Capacity
              </div>

              <RangeField
                label="Team Utilization (%)"
                value={util}
                onChange={setUtil}
                ariaLabel="Team utilization"
                display={(v) => `${v}%`}
                onRangeDragStart={startRangeDrag}
                note={utilWarn ? "Results may not reflect real project conditions." : "Below 50% utilization, capacity risk is minimal."}
                noteTone={utilWarn ? "warn" : "ok"}
                sliderTone={utilWarn ? "warn" : "ok"}
              />

              <div className="mch-field">
                <div className="mch-fhd">
                  <span className="mch-fname">Active Projects</span>
                </div>
                <select
                  className="form-select"
                  aria-label="Active projects count"
                  value={activeProjects}
                  onChange={(e) => setActiveProjects(+e.target.value)}
                >
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mch-sep" />

              <div className="mch-sec-lbl">
                <div className="mch-sec-icon">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                New Project Load
              </div>

              <RangeField
                label="Additional Workload (%)"
                value={load}
                onChange={setLoad}
                ariaLabel="Additional workload"
                display={(v) => `${v}%`}
                onRangeDragStart={startRangeDrag}
                min={0}
                max={100}
                ticks={["0%", "50%", "100%"]}
                note={
                  loadWarn
                    ? "Outside recommended range: keep workload between 5% and 30%."
                    : load <= 10
                      ? "5-10%: Manageable addition."
                      : load <= 20
                        ? "10-20%: Typical load."
                        : "20-30%: Aggressive stretch."
                }
                noteTone={loadWarn ? "warn" : "ok"}
                sliderTone={loadWarn ? "warn" : "ok"}
              />

              <div className="mch-sep" />

              <div className="mch-sec-lbl">
                <div className="mch-sec-icon">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Cost Factors
              </div>

              <RangeField
                label="Overtime Rate Increase (%)"
                value={ot}
                onChange={setOt}
                ariaLabel="Overtime rate increase"
                display={(v) => `${v}%`}
                onRangeDragStart={startRangeDrag}
                min={0}
                max={100}
                ticks={["0%", "50%", "100%"]}
                note={otWarn ? "Unrealistic data: keep overtime between 15% and 30%." : "Typical overtime raises 15-30% labor cost."}
                noteTone={otWarn ? "warn" : "ok"}
                sliderTone={otWarn ? "warn" : "ok"}
              />

              <RangeField
                label="Estimated Rework Rate (%)"
                value={rw}
                onChange={setRw}
                ariaLabel="Estimated rework rate"
                display={(v) => `${v}%`}
                onRangeDragStart={startRangeDrag}
                min={0}
                max={100}
                ticks={["0%", "50%", "100%"]}
                note={rwWarn ? "Need consultation: rework should stay within 5-25%." : "Usual rework range is 5-25%."}
                noteTone={rwWarn ? "warn" : "ok"}
                sliderTone={rwWarn ? "warn" : "ok"}
              />

              <div className="mch-sep" />

              <div className="mch-sec-lbl">
                <div className="mch-sec-icon">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Hiring Status
              </div>

              <div className="mch-rlist" role="radiogroup" aria-label="Hiring status">
                <button
                  type="button"
                  className={`mch-ritem ${hiringPenalty === 0 ? "mch-on" : ""}`}
                  onClick={() => onHiring(0)}
                  role="radio"
                  aria-checked={hiringPenalty === 0}
                >
                  <div className="mch-rcircle">
                    <div className="mch-rpip" />
                  </div>
                  No Hiring
                  <span className="mch-rpen">+0% penalty</span>
                </button>
                <button
                  type="button"
                  className={`mch-ritem ${hiringPenalty === 5 ? "mch-on" : ""}`}
                  onClick={() => onHiring(5)}
                  role="radio"
                  aria-checked={hiringPenalty === 5}
                >
                  <div className="mch-rcircle">
                    <div className="mch-rpip" />
                  </div>
                  Hiring in Progress
                  <span className="mch-rpen">+5% penalty</span>
                </button>
                <button
                  type="button"
                  className={`mch-ritem ${hiringPenalty === 3 ? "mch-on" : ""}`}
                  onClick={() => onHiring(3)}
                  role="radio"
                  aria-checked={hiringPenalty === 3}
                >
                  <div className="mch-rcircle">
                    <div className="mch-rpip" />
                  </div>
                  Recent Hire <small style={{ fontSize: 12, fontWeight: 400, marginLeft: 3 }}>(Within 8 weeks)</small>
                  <span className="mch-rpen">+3% penalty</span>
                </button>
              </div>
            </div>

            <div className="mch-ocard">
              <div className="mch-ohd">Margin Impact</div>

              <div className="mch-gauge-wrap">
                <div className="mch-gauge-track" aria-hidden>
                  <svg className="mch-gauge-svg-bg" viewBox="0 0 200 105">
                    <path className="mch-g-bg" d="M 15 100 A 85 85 0 0 1 185 100" />
                  </svg>
                  <div className="mch-gauge-fill-clip" style={{ width: `${gaugeFillPct}%` }}>
                    <svg className="mch-gauge-svg-fill" viewBox="0 0 200 105">
                      <path className="mch-g-fill" d="M 15 100 A 85 85 0 0 1 185 100" stroke={marginClr} />
                    </svg>
                  </div>
                </div>
                <div className="mch-gauge-ctr">
                  <div className="mch-gval" style={{ color: marginClr }}>
                    {projMargin.toFixed(1)}%
                  </div>
                  <div className="mch-glbl">Projected Margin</div>
                </div>
              </div>

              <div className="mch-mrow">
                <span className="mch-mlbl">Expected Margin</span>
                <span className="mch-mval mch-sm">22.0%</span>
              </div>
              <div className="mch-mrow">
                <span className="mch-mlbl">Effective Utilization</span>
                <span className={`mch-mval mch-sm ${riskCls}`}>{effUtil.toFixed(0)}%</span>
              </div>
              <div className="mch-mrow">
                <span className="mch-mlbl">Projected Margin</span>
                <span className={`mch-mval ${projMargin < 0 ? "mch-neg" : projMargin < 10 ? "mch-warn" : "mch-pos"}`}>
                  {projMargin.toFixed(1)}%
                </span>
              </div>
              <div className="mch-mrow">
                <span className="mch-mlbl">Margin Loss</span>
                <span className={`mch-mval ${marginLoss > 12 ? "mch-neg" : marginLoss > 3 ? "mch-warn" : "mch-pos"}`}>
                  {marginLoss > 0 ? "−" : "+"}
                  {Math.abs(marginLoss).toFixed(1)}%
                </span>
              </div>

              <div className="mch-umeter">
                <div className="mch-umhd">
                  <span className="mch-umlbl">Utilization Load</span>
                  <span className="mch-umval">{effUtil.toFixed(0)}%</span>
                </div>
                <div className="mch-utrack">
                  <div className="mch-ufill" style={{ transform: `scaleX(${uFillRatio})`, background: utilBarClr }} />
                  <div className="mch-utick" style={{ left: `${uTick80}%` }} />
                  <div className="mch-utick" style={{ left: `${uTick85}%` }} />
                </div>
                <div className="mch-umeta">
                  <span>0</span>
                  <span>80% ▲</span>
                  <span>85% ▲</span>
                  <span>130%</span>
                </div>
              </div>

              <div className={`mch-rbanner mch-r${risk}`} role="status">
                <div className="mch-rb-icon">
                  <RiskBannerIcon risk={risk} />
                </div>
                <div className="mch-rb-body">
                  <div className="mch-rbtxt">
                    {risk === "red" ? "High risk" : risk === "yel" ? "Caution zone" : "Safe to proceed"}
                  </div>
                  <div className="mch-rbsub">
                    {risk === "red"
                      ? "Effective utilization above 85% — critical threshold exceeded"
                      : risk === "yel"
                        ? "Effective utilization 70–85% — monitor closely"
                        : "Effective utilization below 70% — comfortable buffer"}
                  </div>
                </div>
              </div>

              <div className="mch-bhd2">Hidden Cost Breakdown</div>
              <div className="mch-brow">
                <div className="mch-brtop">
                  <span className="mch-brname">Overtime Cost Pressure</span>
                  <span className="mch-brval">{overtimeImpact.toFixed(2)}%</span>
                </div>
                <div className="mch-btrack">
                  <div className={`mch-bfill ${bfillCls}`} style={{ transform: `scaleX(${bOvertimeRatio})` }} />
                </div>
              </div>
              <div className="mch-brow">
                <div className="mch-brtop">
                  <span className="mch-brname">Coordination Overhead</span>
                  <span className="mch-brval">{coordImpact.toFixed(2)}%</span>
                </div>
                <div className="mch-btrack">
                  <div className={`mch-bfill ${bfillCls}`} style={{ transform: `scaleX(${bCoordRatio})` }} />
                </div>
              </div>
              <div className="mch-brow">
                <div className="mch-brtop">
                  <span className="mch-brname">Rework Multiplier</span>
                  <span className="mch-brval">{reworkMultiplier.toFixed(2)}x</span>
                </div>
                <div className="mch-btrack">
                  <div className={`mch-bfill ${bfillCls}`} style={{ transform: `scaleX(${bReworkRatio})` }} />
                </div>
              </div>
              <div className="mch-brow">
                <div className="mch-brtop">
                  <span className="mch-brname">Hiring Lag Penalty</span>
                  <span className="mch-brval">{hiringPenalty}%</span>
                </div>
                <div className="mch-btrack">
                  <div className={`mch-bfill ${bfillCls}`} style={{ transform: `scaleX(${bHiringRatio})` }} />
                </div>
              </div>

              <div className="mch-fbox">
                <div className="mch-frow">
                  <span>22.0% base margin</span>
                  <span>22.00%</span>
                </div>
                <div className="mch-frow">
                  <span>− Overtime impact (×0.3)</span>
                  <span>−{overtimeMarginImpact.toFixed(2)}%</span>
                </div>
                <div className="mch-frow">
                  <span>− Coordination overhead</span>
                  <span>−{coordImpact.toFixed(2)}%</span>
                </div>
                <div className="mch-frow">
                  <span>− Rework impact</span>
                  <span>−{reworkImpact.toFixed(2)}%</span>
                </div>
                <div className="mch-frow">
                  <span>− Hiring lag penalty</span>
                  <span>−{hiringPenalty.toFixed(1)}%</span>
                </div>
                <div className="mch-frow">
                  <span>= Projected Margin</span>
                  <span>{projMargin.toFixed(2)}%</span>
                </div>
              </div>

              <div className={`mch-insight mch-mg-${marginKey}`}>
                &ldquo;
                {risk === "red"
                  ? "Your team is operating beyond optimal capacity. Adding this project will likely increase rework and reduce margin significantly."
                  : risk === "yel"
                    ? "Capacity buffer is limited. Proceeding with this project may require tighter coordination and controlled scope to protect margins."
                    : "You have sufficient capacity buffer. This project is likely to maintain expected margins."}
                &rdquo;
              </div>

              <button type="button" className="mch-octa" onClick={openCapacityModal}>
                Get a Capacity Plan
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <div className="mch-trust">
          <div className="mch-titem">
            <div className="mch-ticon">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            Built on AEC project data
          </div>
          <div className="mch-titem">
            <div className="mch-ticon">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            Research-backed rework model
          </div>
          <div className="mch-titem">
            <div className="mch-ticon">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Real-time calculation engine
          </div>
        </div>

        <GetInTouchSection />
        <SiteFooter />

        <Modal
          className="mch-capacity-modal"
          contentClassName="mch-capacity-modal-content"
          backdropClassName="mch-capacity-backdrop"
          show={showCapacityModal}
          onHide={() => setShowCapacityModal(false)}
          centered
          aria-labelledby="mch-capacity-modal-title"
        >
          <Modal.Header className="mch-capacity-modal-head" closeButton>
            <Modal.Title id="mch-capacity-modal-title">Enter Your Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mch-capacity-modal-body">
            <ZohoWebToLeadToolPage
              onSuccess={(msg) => {
                toast.success(msg || "Our team will contact you soon.");
                setShowCapacityModal(false);
              }}
              onError={(msg) => toast.error(msg || "Something went wrong. Please try again.")}
            />
          </Modal.Body>
        </Modal>
      </main>
    </>
  );
}

export default CalculatorCostOfOneMoreProjectView;
