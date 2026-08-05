"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { LandingTopHeader } from "@/components/landing/landing-top-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { ZohoPipelineForm } from "@/components/zoho/zoho-pipeline-form";
import {
  buildPipelineDiagnosticEmailHtml,
  buildPipelineDiagnosticEmailTemplateParams,
  formatPipelineDiagnosticEmailFull,
  sendPipelineDiagnosticResultEmail,
} from "@/utils/pipeline-diagnostic-result-email";
import { ensureNimbusBookingScript, openBookMeetingModal } from "@/utils/nimbus-booking";

import "@/styles/pipeline-health-diagnostic.scss";

const TOTAL_QUESTIONS = 12;
const SECTION_MAX_SCORE = 12;
const TOTAL_MAX_SCORE = 36;
const SCORE_CIRCUMFERENCE = 2 * Math.PI * 58;
const PIPELINE_DIAGNOSTIC_HIDE_FLOAT_UI = "vbs-pipeline-diagnostic-hide-float-ui";

/** Hardcoded EmailJS fallbacks from gatsby-config pipelineDiagnosticEmailJS. */
const PIPELINE_EMAILJS_FALLBACKS = {
  serviceId: "service_8vrhp0u",
  templateId: "template_zpwbzwg",
  publicKey: "hAnNwo2uM0YHl8sO4",
};

/** Hardcoded EmailJS fallbacks from gatsby-config contactFormEmailJS. */
const CONTACT_EMAILJS_FALLBACKS = {
  serviceId: "service_9wb2zcp",
  templateId: "template_n60yl3r",
  publicKey: "AS5XWYUjScR53EFRu",
};

const DIAGNOSES = {
  low: {
    tier: "0-9 · Below the Ceiling",
    headline: "This project isn't the leak.",
    copy: "Run the diagnostic on a different project - ideally one you suspect is bleeding margin. Watch for senior staff doing production work, repeated rework, and time disappearing into wait states.",
  },
  approaching: {
    tier: "10-18 · Approaching the Ceiling",
    headline: "Early signs are showing in at least one section.",
    copy: "The intervention is preventive, not reactive. Address whichever section scored highest before it compounds. Small fixes now prevent the cascade later.",
  },
  under: {
    tier: "19-27 · Under the Ceiling",
    headline: "This project is structurally exposed.",
    copy: "Margin is leaking - possibly invisibly. The section with the highest score is where you intervene first. Don't try to fix all three at once. Sequence matters.",
  },
  deep: {
    tier: "28-36 · Deep Under the Ceiling",
    headline: "This project isn't a project anymore - it's a resource sink.",
    copy: "The fix isn't tactical. It's structural, and it likely extends beyond this single project. A 30-minute conversation is more useful than another diagnostic.",
  },
};

const INTERVENTIONS = {
  1: {
    title: "Senior Time Reallocation",
    copy: "Map where senior staff are continuously embedded. Replace continuous engagement with checkpoint-based engagement and move execution ownership to the delivery layer.",
  },
  2: {
    title: "Documentation Load Control",
    copy: "Establish single ownership for every major documentation decision. Lock decision points. The drag isn't volume - it's how many people are still allowed to weigh in after a decision should have been closed.",
  },
  3: {
    title: "Delivery Flow Visibility",
    copy: "Map where teams are waiting - not where they're working slowly. Fix flow before adding effort. Most firms have never named blocked movement as a structural issue.",
  },
};

const SECTIONS = [
  {
    id: 1,
    num: "01",
    title: "Senior Time",
    diagnosis: "Diagnoses · The Senior Staff Bottleneck",
    questions: [
      {
        id: "q1",
        text: "In an average week on this project, how many hours of senior staff time (Principal / Associate / Senior Architect) are spent on production-level work - drawing, detailing, redlining, rewriting documentation?",
        options: ["Less than 4 hours / week", "4-10 hours / week", "10-20 hours / week", "More than 20 hours / week"],
      },
      {
        id: "q2",
        text: "When a coordination issue arises on this project, who is most often the one resolving it?",
        options: [
          "Project manager or mid-level lead, independently",
          "Project manager, after escalating to senior staff",
          "Senior staff, directly",
          "Senior staff, because the issue keeps recurring",
        ],
      },
      {
        id: "q3",
        text: "How many decision points on this project - in the last 30 days - were waiting on a specific senior person before the project could move forward?",
        options: ["Fewer than 3", "3-6", "7-12", "More than 12"],
      },
      {
        id: "q4",
        text: "If your two most senior people on this project were unavailable for one full week, what would happen?",
        options: [
          "Continue normally - execution owned at delivery layer",
          "Slow slightly but continue",
          "Stall on most active fronts",
          "Stop almost entirely",
        ],
      },
    ],
  },
  {
    id: 2,
    num: "02",
    title: "Documentation Load",
    diagnosis: "Diagnoses · Documentation Creep",
    questions: [
      {
        id: "q5",
        text: "How many revision cycles has this project gone through in its current phase that were not triggered by client changes?",
        options: ["0-1", "2-3", "4-6", "More than 6"],
      },
      {
        id: "q6",
        text: "For the documentation work currently active on this project, can you name a single owner for each major decision (drawing set, spec section, coordination zone)?",
        options: [
          "Yes, ownership is fully clear and locked",
          "Mostly clear, with some gaps",
          "Partially clear - multiple people, no defined ownership",
          "Unclear - most decisions are committee-style",
        ],
      },
      {
        id: "q7",
        text: "In the last 60 days on this project, how many late-stage direction changes have caused work to be redone?",
        options: ["0", "1-2", "3-5", "More than 5"],
      },
      {
        id: "q8",
        text: "What percentage of the hours billed on this project in the last month do you estimate were spent on rework, RFI response, or unbilled clarifications - work that didn't exist in the original scope?",
        options: ["Less than 10%", "10-20%", "20-35%", "More than 35%"],
      },
    ],
  },
  {
    id: 3,
    num: "03",
    title: "Delivery Flow",
    diagnosis: "Diagnoses · Blocked Movement",
    questions: [
      {
        id: "q9",
        text: "When you look at this project's progress over the last 30 days, where did time go?",
        options: [
          "Mostly active execution - teams working forward",
          "Mix of execution and waiting",
          "Significant time waiting on reviews / approvals",
          "Mostly waiting - execution in short bursts",
        ],
      },
      {
        id: "q10",
        text: "How long, on average, does a documentation package or design decision sit in review before it moves forward?",
        options: ["Less than 2 days", "2-5 days", "5-10 days", "More than 10 days"],
      },
      {
        id: "q11",
        text: "Does this project have defined checkpoints where senior staff engage - and clear ownership in between those checkpoints?",
        options: [
          "Yes - checkpoints exist and are respected",
          "Checkpoints exist but are bypassed regularly",
          "Informal - engagement is reactive",
          "No defined checkpoints - engagement is random",
        ],
      },
      {
        id: "q12",
        text: "When a team member on this project is blocked, what's the most common reason?",
        options: [
          "External - waiting on client or consultant",
          "Mixed external and internal",
          "Internal - waiting on internal review or decision",
          "Internal - and they don't know who to escalate to",
        ],
      },
    ],
  },
];

const getDiagnosisTier = (total: number): keyof typeof DIAGNOSES => {
  if (total <= 9) return "low";
  if (total <= 18) return "approaching";
  if (total <= 27) return "under";
  return "deep";
};

type ResultLead = {
  name: string;
  email: string;
  firm: string;
  role: string;
};

export function PipelineHealthDiagnosticView() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");
  const [errorIds, setErrorIds] = useState<string[]>([]);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [resultLead, setResultLead] = useState<ResultLead | null>(null);
  const [showHowToPoints, setShowHowToPoints] = useState(false);
  const [animatedTotalScore, setAnimatedTotalScore] = useState(0);
  const [animatedSectionWidths, setAnimatedSectionWidths] = useState({ 1: 0, 2: 0, 3: 0 });
  const [animatedSectionScores, setAnimatedSectionScores] = useState({ 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    document.body.classList.add(PIPELINE_DIAGNOSTIC_HIDE_FLOAT_UI);
    return () => {
      document.body.classList.remove(PIPELINE_DIAGNOSTIC_HIDE_FLOAT_UI);
    };
  }, []);

  useEffect(() => {
    ensureNimbusBookingScript().catch(() => {});
  }, []);

  const sectionScores = useMemo(() => {
    const bySection: Record<number, number> = {};
    SECTIONS.forEach((section) => {
      bySection[section.id] = section.questions.reduce((sum, q) => sum + (Number(answers[q.id]) || 0), 0);
    });
    return bySection;
  }, [answers]);

  const totalScore = useMemo(
    () => Object.values(sectionScores).reduce((sum, n) => sum + n, 0),
    [sectionScores],
  );

  const highestSection = useMemo(() => {
    let highest = 1;
    [1, 2, 3].forEach((sec) => {
      if (sectionScores[sec] > sectionScores[highest]) highest = sec;
    });
    return highest;
  }, [sectionScores]);

  const diagnosisTier = useMemo(() => getDiagnosisTier(totalScore), [totalScore]);
  const diagnosis = DIAGNOSES[diagnosisTier];
  const intervention = INTERVENTIONS[highestSection as keyof typeof INTERVENTIONS];
  const isAllSectionScoresEqual = useMemo(
    () => sectionScores[1] === sectionScores[2] && sectionScores[2] === sectionScores[3],
    [sectionScores],
  );

  const ctaCopy = useMemo(() => {
    if (diagnosisTier === "low") {
      return {
        heading: "Find the leaking project",
        copy: "30-min session to spot which project in your portfolio is most exposed.",
      };
    }
    if (diagnosisTier === "approaching") {
      return {
        heading: "Lock the preventive fix",
        copy: "30-min session to map your structural intervention before it compounds.",
      };
    }
    if (diagnosisTier === "under") {
      return {
        heading: "Stop the margin leak",
        copy: "30-min session to walk through your scores and map the first 30 days.",
      };
    }
    return {
      heading: "Time for a conversation",
      copy: "30-min session to map the structural pattern across your portfolio.",
    };
  }, [diagnosisTier]);

  const showResults = resultLead !== null;

  useEffect(() => {
    if (showResults && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showResults]);

  useEffect(() => {
    if (!showResults) {
      setAnimatedTotalScore(0);
      setAnimatedSectionWidths({ 1: 0, 2: 0, 3: 0 });
      setAnimatedSectionScores({ 1: 0, 2: 0, 3: 0 });
      return undefined;
    }

    let rafId = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      setAnimatedTotalScore(Math.round(totalScore * eased));
      setAnimatedSectionWidths({
        1: (sectionScores[1] / SECTION_MAX_SCORE) * 100 * eased,
        2: (sectionScores[2] / SECTION_MAX_SCORE) * 100 * eased,
        3: (sectionScores[3] / SECTION_MAX_SCORE) * 100 * eased,
      });
      setAnimatedSectionScores({
        1: Math.round(sectionScores[1] * eased),
        2: Math.round(sectionScores[2] * eased),
        3: Math.round(sectionScores[3] * eased),
      });
      if (t < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [showResults, sectionScores, totalScore]);

  const setAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setErrorIds((prev) => prev.filter((id) => id !== questionId));
    setErrorMsg("");
  };

  const validateAllAnswered = () => {
    const missing: string[] = [];
    SECTIONS.forEach((section) => {
      section.questions.forEach((q) => {
        if (answers[q.id] === undefined) missing.push(q.id);
      });
    });
    if (missing.length > 0) {
      setErrorIds(missing);
      setErrorMsg(`Please answer all ${TOTAL_QUESTIONS} questions to continue. ${missing.length} remaining.`);
      return false;
    }
    return true;
  };

  const onSubmitQuiz = () => {
    if (!validateAllAnswered()) return;
    setShowLeadModal(true);
  };

  const closeModal = () => {
    setShowLeadModal(false);
  };

  const handleZohoLeadSuccess = useCallback(
    (leadData: { name?: string; email?: string; firm?: string; role?: string }) => {
      setResultLead({
        name: leadData?.name || "",
        email: leadData?.email || "",
        firm: leadData?.firm || "",
        role: leadData?.role || "",
      });
      setShowLeadModal(false);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });

      const emailJsConfig = {
        serviceId:
          process.env.NEXT_PUBLIC_PIPELINE_DIAG_SERVICE_ID ||
          process.env.GATSBY_PIPELINE_DIAG_SERVICE_ID ||
          PIPELINE_EMAILJS_FALLBACKS.serviceId ||
          process.env.NEXT_PUBLIC_SERVICE_ID ||
          process.env.GATSBY_SERVICE_ID ||
          CONTACT_EMAILJS_FALLBACKS.serviceId ||
          "",
        templateId:
          process.env.NEXT_PUBLIC_PIPELINE_DIAG_TEMPLATE_ID ||
          process.env.GATSBY_PIPELINE_DIAG_TEMPLATE_ID ||
          PIPELINE_EMAILJS_FALLBACKS.templateId ||
          process.env.NEXT_PUBLIC_TEMPLATE_ID ||
          process.env.GATSBY_TEMPLATE_ID ||
          CONTACT_EMAILJS_FALLBACKS.templateId ||
          "",
        publicKey:
          process.env.NEXT_PUBLIC_PIPELINE_DIAG_PUBLIC_KEY ||
          process.env.GATSBY_PIPELINE_DIAG_PUBLIC_KEY ||
          PIPELINE_EMAILJS_FALLBACKS.publicKey ||
          "",
      };

      const fullPlain = formatPipelineDiagnosticEmailFull({
        fullName: leadData?.name,
        totalScore,
        diagnosis,
        intervention,
        sectionScores,
        sections: SECTIONS,
        highestSection,
        isAllSectionScoresEqual,
        ctaCopy,
        firm: leadData?.firm,
        role: leadData?.role,
      });

      const fullHtml = buildPipelineDiagnosticEmailHtml({
        totalScore,
        diagnosis,
        intervention,
        sectionScores,
        sections: SECTIONS,
        highestSection,
        isAllSectionScoresEqual,
        ctaCopy,
        firm: leadData?.firm,
        role: leadData?.role,
      });

      const templateParams = {
        ...buildPipelineDiagnosticEmailTemplateParams({
          recipientName: leadData?.name,
          totalScore,
          diagnosis,
          intervention,
          sectionScores,
          sections: SECTIONS,
          highestSection,
          isAllSectionScoresEqual,
          ctaCopy,
          firm: leadData?.firm,
          role: leadData?.role,
        }),
        submission_date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        current_year: String(new Date().getFullYear()),
        diagnosis_tier_short: (diagnosis?.tier || "").slice(0, 120),
      };

      void sendPipelineDiagnosticResultEmail(emailJsConfig, {
        toEmail: leadData?.email,
        recipientName: leadData?.name,
        companyName: leadData?.firm,
        diagnosticPlainText: fullPlain,
        diagnosticHtml: fullHtml,
        diagnosticTemplateParams: templateParams,
      });
    },
    [diagnosis, intervention, sectionScores, totalScore, highestSection, isAllSectionScoresEqual, ctaCopy],
  );

  const restart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAnswers({});
    setErrorMsg("");
    setErrorIds([]);
    setResultLead(null);
    setShowLeadModal(false);
    setAnimatedTotalScore(0);
    setAnimatedSectionWidths({ 1: 0, 2: 0, 3: 0 });
    setAnimatedSectionScores({ 1: 0, 2: 0, 3: 0 });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="pipeline-health-page">
        <LandingTopHeader maxWidth={1400} />

        {!showResults && (
          <div id="quizScreen">
            {errorMsg ? (
              <div className="error-toast show">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMsg}</span>
              </div>
            ) : null}

            <header className="intro">
              <div className="container">
                <h1 className="title">THE PIPELINE HEALTH DIAGNOSTIC</h1>
                <p className="meta-line">
                  <span>12 Questions</span>
                  <span className="meta-beep" aria-hidden="true">•</span>
                  <span>5 Minutes</span>
                  <span className="meta-beep" aria-hidden="true">•</span>
                  <span>One Active Project</span>
                </p>
              </div>
            </header>

            <div className="container">
              <div className="how-to-block">
                <button
                  type="button"
                  className="how-to-toggle"
                  onClick={() => setShowHowToPoints((prev) => !prev)}
                  aria-expanded={showHowToPoints}
                >
                  <span>How to Use This</span>
                  <span className={`how-to-caret ${showHowToPoints ? "open" : ""}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {showHowToPoints ? (
                  <>
                    <ul className="how-to-points">
                      <li>
                        <span className="ben-chk">✔</span>
                        <span>Pick one specific project currently in your pipeline — ideally one in CD, CA, or late DD phase. Not a hypothetical. A real one with a name and a project number.</span>
                      </li>
                      <li>
                        <span className="ben-chk">✔</span>
                        <span>Answer all 12 questions about that project. Don't average across your portfolio. Stay specific.</span>
                      </li>
                      <li>
                        <span className="ben-chk">✔</span>
                        <span>At the end, you'll see exactly which of the three intervention points is highest-leverage for this project — and by extension, where your firm is most exposed to the Delivery Ceiling.</span>
                      </li>
                    </ul>
                  </>
                ) : null}
              </div>
            </div>

            <main className="container">
              {SECTIONS.map((section) => {
                const answeredInSection = section.questions.filter((q) => answers[q.id] !== undefined).length;
                return (
                  <div className="section-block" key={section.id}>
                    <div className="section-head">
                      <div className="section-num">{section.num}</div>
                      <div className="section-title-stack">
                        <span className="title">{section.title}</span>
                        <span className="diag">{section.diagnosis}</span>
                      </div>
                      <span className={`section-pill ${answeredInSection === 4 ? "done" : ""}`}>{answeredInSection} / 4</span>
                    </div>

                    {section.questions.map((q, qIndex) => {
                      const qNumber = (section.id - 1) * 4 + qIndex + 1;
                      const selectedValue = answers[q.id];
                      const hasError = errorIds.includes(q.id);
                      return (
                        <div key={q.id} className={`question ${selectedValue !== undefined ? "answered" : ""} ${hasError ? "error-flash" : ""}`}>
                          <div className="q-body">
                            <p className="q-text">
                              <span className="q-num-inline">{qNumber}.</span>
                              <span>{q.text}</span>
                            </p>
                            <div className="options">
                              {q.options.map((opt, index) => {
                                const value = String(index);
                                const checked = selectedValue === value;
                                return (
                                  <label className={`option ${checked ? "selected" : ""}`} key={`${q.id}-${value}`}>
                                    <input
                                      type="radio"
                                      name={q.id}
                                      value={value}
                                      checked={checked}
                                      onChange={() => setAnswer(q.id, value)}
                                    />
                                    <span className="radio-mark" />
                                    <span className="label-text">{opt}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              <div className="submit-block">
                <div className="submit-block-text">
                  <h4>See your personalized diagnosis</h4>
                  <p>Section scores · diagnosis tier · highest-leverage intervention.</p>
                </div>
                <button className="btn" type="button" onClick={onSubmitQuiz}>
                  Submit & Get My Diagnosis
                  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </main>
          </div>
        )}

        {showLeadModal ? (
          <div className="lead-modal-backdrop show" onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <div className="lead-modal">
              <button className="lead-modal-close" onClick={closeModal} aria-label="Close" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <h3>Where should we send your diagnosis?</h3>
              <p className="lead-modal-sub">We'll generate your result on the next screen and email a copy you can share with your team.</p>
              <ZohoPipelineForm onSuccess={handleZohoLeadSuccess} />
            </div>
          </div>
        ) : null}

        {showResults ? (
          <div id="resultsScreen" className="show">
            <div className="container">
              <div className="results-wrap">
                <div className="results-topbar">
                  <span className="results-eyebrow">Your Pipeline Diagnosis</span>
                  <span className="greeting-tag hi-highlight">
                    <span className="wave" aria-hidden="true">👋</span>
                    Hi <strong>{resultLead?.name?.split(" ")[0] || "there"}</strong>
                  </span>
                </div>

                <div className="result-top">
                  <div className="score-card">
                    <div className="score-circle">
                      <svg viewBox="0 0 130 130">
                        <circle className="track" cx="65" cy="65" r="58" />
                        <circle
                          className="fill"
                          cx="65"
                          cy="65"
                          r="58"
                          style={{ strokeDashoffset: SCORE_CIRCUMFERENCE - (animatedTotalScore / TOTAL_MAX_SCORE) * SCORE_CIRCUMFERENCE }}
                        />
                      </svg>
                      <div className="score-inner">
                        <div className="score-num">{animatedTotalScore}</div>
                        <div className="score-of">/ 36</div>
                      </div>
                    </div>
                    <span className="score-card-label">Total Score</span>
                  </div>

                  <div className="diag-card">
                    <h3>{diagnosis.headline}</h3>
                    <p>{diagnosis.copy}</p>
                  </div>
                </div>

                <div className="breakdown">
                  <div className="breakdown-title-row">
                    <h4>Section Breakdown</h4>
                    <span className="legend">
                      <span className="dot" />Highest score = your highest-leverage intervention
                    </span>
                  </div>

                  {SECTIONS.map((section) => {
                    const isHighest = !isAllSectionScoresEqual && section.id === highestSection;
                    const width = animatedSectionWidths[section.id as 1 | 2 | 3] || 0;
                    return (
                      <div className={`bar-row ${isHighest ? "highest" : ""}`} key={`breakdown-${section.id}`}>
                        <div className="bar-label">
                          <span className="nm">
                            {section.title}
                            {isHighest ? <span className="highest-flag">Highest</span> : null}
                          </span>
                          <span className="sub">{section.diagnosis.replace("Diagnoses · ", "")}</span>
                        </div>
                        <div className="bar-track">
                          <div className="bar-fill" style={{ width: `${width}%` }} />
                        </div>
                        <div className="bar-value">
                          <span>{animatedSectionScores[section.id as 1 | 2 | 3]}</span>
                          <span className="total"> / 12</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="action-strip">
                  <div className="intervention-card">
                    <div className="lbl">Where You Intervene First</div>
                    <h4>{intervention.title}</h4>
                    <p>{intervention.copy}</p>
                  </div>
                  <div className="cta-card">
                    <h4>{ctaCopy.heading}</h4>
                    <p>{ctaCopy.copy}</p>
                    <button type="button" className="btn" onClick={openBookMeetingModal}>
                      Book Now
                      <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>

                <a href="#" className="restart-link" onClick={restart}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  Diagnose Another Project
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}

export default PipelineHealthDiagnosticView;
