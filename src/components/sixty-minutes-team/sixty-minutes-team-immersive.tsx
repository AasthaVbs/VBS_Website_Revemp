// @ts-nocheck — ported from Gatsby BuildYourTeamImmersive.js
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AUTO_ANALYSIS_MESSAGES,
  AUTO_ANALYSIS_STEPS,
  BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN,
  BUILD_YOUR_TEAM_TOTAL_SCREENS,
  DELIVERABLES_BY_STAGE,
  FLOOR_OPTIONS,
  ORB_POSITIONS,
  PROJECT_STAGES,
  PROJECT_TYPES,
  SIXTY_MINUTES_INTRO_VIDEO_ID,
  SIXTY_MINUTES_QUICK_SUBMIT,
  SIXTY_MINUTES_TEAM_MAP_API_KEY,
  SUBMIT_MODES,
  TEAM_AVATARS,
  TEAM_TIMELINES,
  areaSliderPct,
  bracketForArea,
  fmtArea,
} from "@/constants/sixty-minutes-team-data";
import {
  buildSixtyMinutesTeamEmailParams,
  buildSixtyMinutesTeamUserSummaryEmailParams,
  sendSixtyMinutesTeamEmail,
  sendSixtyMinutesTeamUserSummaryEmail,
} from "@/utils/sixty-minutes-team-email";
import { getLocationLabel, isLocationValid } from "@/utils/sixty-minutes-team-location";
import { dataUrlToFile, uploadProjectImage } from "@/utils/sixty-minutes-team-upload-image";
import {
  loadSixtyMinutesTeamContact,
  resolveSixtyMinutesTeamBookingUrl,
  saveSixtyMinutesTeamContact,
} from "@/utils/sixty-minutes-team-contact-storage";
import { SixtyMinutesTeamIntroVideo } from "./sixty-minutes-team-intro-video";
import { SixtyMinutesTeamLocationInput } from "./sixty-minutes-team-location-input";

const INITIAL_STATE = {
  type: null,
  typeOther: "",
  area: 10000,
  floors: null,
  location: null,
  stage: null,
  deliverables: [],
  team: null,
  timeline: null,
  fname: "",
  lname: "",
  email: "",
};

function screenClass(index, current, exiting, forward) {
  const classes = ["screen"];
  if (index === current) classes.push("active");
  if (index === exiting) classes.push("exiting");
  return classes.join(" ");
}

function screenStyle(index, current, exiting, forward) {
  if (index === exiting) {
    return { transform: forward ? "translateX(-50px)" : "translateX(50px)" };
  }
  if (index === current && exiting !== null) {
    return { transform: forward ? "translateX(50px)" : "translateX(-50px)", opacity: 0 };
  }
  return undefined;
}

function getWizardHeaderOffset() {
  const legacyNavbar = document.querySelector("main .large-navbar");
  if (legacyNavbar) {
    return Math.ceil(legacyNavbar.getBoundingClientRect().height);
  }

  const header = document.querySelector(".vbs-site-header");
  return header ? Math.ceil(header.getBoundingClientRect().height) : 72;
}

function scrollWizardStepToTop(stepIndex) {
  const activeScreen = document.getElementById(`sc${stepIndex}`);
  const heading =
    activeScreen?.querySelector(".s-eyebrow") ||
    activeScreen?.querySelector(".s-title") ||
    activeScreen?.querySelector(".ty-hero");

  if (heading) {
    heading.scrollIntoView({ behavior: "auto", block: "start", inline: "nearest" });
    return;
  }

  const wizardRoot = document.querySelector(".sixty-minutes-team-page");
  const screenWrap = document.getElementById("screenWrap");
  const fallback = screenWrap ?? wizardRoot;
  if (!fallback) return;

  const headerOffset = getWizardHeaderOffset();
  const gap = 12;
  const top = Math.max(0, fallback.getBoundingClientRect().top + window.scrollY - headerOffset - gap);
  window.scrollTo({ top, left: 0, behavior: "auto" });
}

export function SixtyMinutesTeamImmersive({ hideQuickSubmit = false }: { hideQuickSubmit?: boolean }) {
  const mapApiKey =
    SIXTY_MINUTES_TEAM_MAP_API_KEY || BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN;

  const submitModes = useMemo(
    () => (hideQuickSubmit ? SUBMIT_MODES.filter((mode) => mode.id !== "image") : SUBMIT_MODES),
    [hideQuickSubmit],
  );

  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState(null);
  const [forward, setForward] = useState(true);
  const [st, setSt] = useState(INITIAL_STATE);
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitMode, setSubmitMode] = useState("form");
  const [submitMethod, setSubmitMethod] = useState(null);
  const [imageSaved, setImageSaved] = useState(false);
  const [capturedPreview, setCapturedPreview] = useState(null);
  const [pendingPhoto, setPendingPhoto] = useState(null);
  const [cameraError, setCameraError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraStarting, setCameraStarting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [autoMsgIndex, setAutoMsgIndex] = useState(0);
  const [autoRowsOn, setAutoRowsOn] = useState([]);

  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const screenWrapRef = useRef(null);
  const skipStepScrollRef = useRef(true);
  const cameraInputRef = useRef(null);
  const capturedPreviewRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const touchStartX = useRef(0);
  const autoTimersRef = useRef([]);
  const goRef = useRef(null);

  const stageLabel = useMemo(
    () => PROJECT_STAGES.find((s) => s.id === st.stage)?.l || "Schematic Design (SD)",
    [st.stage],
  );

  const typeLabel = useMemo(() => {
    if (st.type === "other") return st.typeOther || "Other";
    return PROJECT_TYPES.find((t) => t.id === st.type)?.l || "";
  }, [st.type, st.typeOther]);

  const shiftOrbs = useCallback((n) => {
    const pos = ORB_POSITIONS[n] ?? ORB_POSITIONS[0];
    const base1 =
      "width:440px;height:440px;background:#089adf;filter:blur(70px);opacity:0.07;border-radius:50%;pointer-events:none;transition:all 1.3s cubic-bezier(.22,1,.36,1);position:absolute;";
    const base2 =
      "width:320px;height:320px;background:#e5232b;filter:blur(60px);opacity:0.07;border-radius:50%;pointer-events:none;transition:all 1.3s cubic-bezier(.22,1,.36,1);position:absolute;";
    if (orb1Ref.current) orb1Ref.current.style.cssText = base1 + pos.a;
    if (orb2Ref.current) orb2Ref.current.style.cssText = base2 + pos.b;
  }, []);

  const go = useCallback(
    (n) => {
      if (n === current || n < 0 || n >= BUILD_YOUR_TEAM_TOTAL_SCREENS) return;
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      const isForward = n > current;
      setForward(isForward);
      setExiting(current);
      window.setTimeout(() => {
        setCurrent(n);
        setExiting(null);
        shiftOrbs(n);
      }, 300);
    },
    [current, shiftOrbs],
  );

  goRef.current = go;

  const clearAutoTimers = useCallback(() => {
    autoTimersRef.current.forEach((id) => {
      window.clearTimeout(id);
      window.clearInterval(id);
    });
    autoTimersRef.current = [];
  }, []);

  const runAuto = useCallback(() => {
    clearAutoTimers();
    setAutoMsgIndex(0);
    setAutoRowsOn([]);

    const msgInterval = window.setInterval(() => {
      setAutoMsgIndex((mi) => {
        if (mi < AUTO_ANALYSIS_MESSAGES.length - 1) return mi + 1;
        window.clearInterval(msgInterval);
        return mi;
      });
    }, 900);
    autoTimersRef.current.push(msgInterval);

    AUTO_ANALYSIS_STEPS.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setAutoRowsOn((prev) => [...prev, i]);
      }, 700 + i * 620);
      autoTimersRef.current.push(t);
    });

    const done = window.setTimeout(() => {
      goRef.current?.(6);
    }, 700 + AUTO_ANALYSIS_STEPS.length * 620 + 500);
    autoTimersRef.current.push(done);
  }, [clearAutoTimers]);

  useEffect(() => {
    shiftOrbs(0);
    return clearAutoTimers;
  }, [shiftOrbs, clearAutoTimers]);

  useEffect(() => {
    if (skipStepScrollRef.current) {
      skipStepScrollRef.current = false;
      return;
    }

    if (exiting !== null) return;

    const scrollAfterPaint = () => scrollWizardStepToTop(current);
    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(scrollAfterPaint);
    });
    const afterTransition = window.setTimeout(scrollAfterPaint, 480);

    return () => {
      window.cancelAnimationFrame(raf1);
      if (raf2) window.cancelAnimationFrame(raf2);
      window.clearTimeout(afterTransition);
    };
  }, [current, exiting]);

  useEffect(() => {
    if (current === 5) {
      runAuto();
      return;
    }
    clearAutoTimers();
    setAutoRowsOn([]);
    setAutoMsgIndex(0);
  }, [current, runAuto, clearAutoTimers]);

  useEffect(() => {
    const wrap = screenWrapRef.current;
    if (!wrap) return;
    const onTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx > 60 && current > 0 && current !== 5) go(current - 1);
    };
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, go]);

  const step1Valid = Boolean(st.type) && (st.type !== "other" || st.typeOther.trim());
  const step2Valid = Boolean(st.area && st.floors && isLocationValid(st.location));
  const step3Valid = Boolean(st.stage);
  const step6Valid = Boolean(st.team);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(st.email);
  const step7Valid = Boolean(st.fname && st.lname && emailOk);

  const deliverables = st.deliverables.length
    ? st.deliverables
    : DELIVERABLES_BY_STAGE[st.stage] || DELIVERABLES_BY_STAGE.sd;

  const teamBracket = bracketForArea(st.area);
  const teamTimelineData = st.stage ? TEAM_TIMELINES[teamBracket]?.[st.stage] : null;

  const bookingUrl = useMemo(
    () =>
      resolveSixtyMinutesTeamBookingUrl({
        firstName: st.fname,
        lastName: st.lname,
        email: st.email,
      }),
    [st.fname, st.lname, st.email],
  );

  useEffect(() => {
    const stored = loadSixtyMinutesTeamContact();
    if (!stored) return;

    setSt((prev) => ({
      ...prev,
      fname: prev.fname || stored.firstName,
      lname: prev.lname || stored.lastName,
      email: prev.email || stored.email,
    }));
  }, []);

  useEffect(() => {
    if (current !== 7) return;

    saveSixtyMinutesTeamContact({
      firstName: st.fname,
      lastName: st.lname,
      email: st.email,
    });
  }, [current, st.fname, st.lname, st.email]);

  const handleTypeSelect = (typeId) => {
    setSt((prev) => ({
      ...prev,
      type: typeId,
      typeOther: typeId === "other" ? prev.typeOther : "",
    }));
  };

  const handleAreaChange = (value) => {
    const area = Number(value);
    setSt((prev) => ({ ...prev, area }));
  };

  const handleConfirmDeliverables = () => {
    setSt((prev) => ({
      ...prev,
      deliverables: DELIVERABLES_BY_STAGE[prev.stage] || DELIVERABLES_BY_STAGE.sd,
    }));
    go(5);
  };

  const handleTeamSelect = (size, timeline) => {
    setSt((prev) => ({ ...prev, team: size, timeline }));
  };

  useEffect(() => {
    if (!st.team || !teamTimelineData) return;
    if (teamTimelineData[st.team] === null) {
      setSt((prev) => ({ ...prev, team: null, timeline: null }));
    }
  }, [st.team, teamTimelineData]);

  const teamEmailProjectFields = useCallback(
    () => ({
      projectType: typeLabel,
      area: st.area,
      noOfFloors: st.floors,
      projectStage: stageLabel,
      teamSize: st.team,
      timeline: st.timeline,
      deliverables,
      location: st.location,
    }),
    [deliverables, typeLabel, st.area, st.floors, st.location, stageLabel, st.team, st.timeline],
  );

  const finishSubmit = useCallback(
    (method) => {
      setSubmitMethod(method);
      setToastMessage(
        method === "image"
          ? "Project submitted — our team will be in touch shortly."
          : `Summary sent to ${st.email}`,
      );
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 3500);
      window.setTimeout(() => {
        setSubmitting(false);
        setImageSaved(false);
        go(8);
      }, method === "image" ? 900 : 700);
    },
    [go, st.email],
  );

  const submitLead = useCallback(async () => {
    if (!step7Valid || !consent || submitting || submitMode !== "form") return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const leadParams = buildSixtyMinutesTeamEmailParams({
        imagePassed: false,
        firstName: st.fname.trim(),
        lastName: st.lname.trim(),
        email: st.email.trim(),
        ...teamEmailProjectFields(),
        mapApiKey,
      });

      const userSummaryParams = buildSixtyMinutesTeamUserSummaryEmailParams({
        firstName: st.fname.trim(),
        lastName: st.lname.trim(),
        email: st.email.trim(),
        projectType: typeLabel,
        area: st.area,
        noOfFloors: st.floors,
        projectLocation: getLocationLabel(st.location),
        projectStage: stageLabel,
        teamSize: st.team,
        timeline: st.timeline,
        deliverables,
      });

      saveSixtyMinutesTeamContact({
        firstName: st.fname.trim(),
        lastName: st.lname.trim(),
        email: st.email.trim(),
      });

      await Promise.all([
        sendSixtyMinutesTeamEmail(leadParams),
        sendSixtyMinutesTeamUserSummaryEmail(userSummaryParams),
      ]);
      finishSubmit("form");
    } catch (e) {
      console.error("[VBS] Form submit EmailJS failed:", e);
      setSubmitError("Could not send your summary. Please try again.");
      setSubmitting(false);
    }
  }, [
    consent,
    finishSubmit,
    step7Valid,
    st.email,
    st.fname,
    st.lname,
    st.timeline,
    submitMode,
    submitting,
    teamEmailProjectFields,
    typeLabel,
    deliverables,
    stageLabel,
    st.area,
    st.floors,
    st.location,
    st.team,
    mapApiKey,
  ]);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      void submitLead();
    },
    [submitLead],
  );

  const clearCapturedPreview = useCallback(() => {
    if (capturedPreviewRef.current) {
      URL.revokeObjectURL(capturedPreviewRef.current);
      capturedPreviewRef.current = null;
    }
    setCapturedPreview(null);
    setPendingPhoto(null);
  }, []);

  const attachStreamToVideo = useCallback(async () => {
    const video = videoRef.current;
    const stream = streamRef.current;
    if (!video || !stream) return;

    if (video.srcObject !== stream) {
      video.srcObject = stream;
    }

    try {
      await video.play();
    } catch (err) {
      console.warn("video play failed", err);
    }
  }, []);

  useEffect(() => () => clearCapturedPreview(), [clearCapturedPreview]);

  const stopCameraStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const closeCamera = useCallback(() => {
    stopCameraStream();
    setCameraOpen(false);
    setCameraStarting(false);
  }, [stopCameraStream]);

  useEffect(() => {
    if (current !== 7 || submitMode !== "image") {
      closeCamera();
    }
  }, [current, submitMode, closeCamera]);

  useEffect(() => {
    if (!cameraOpen) {
      stopCameraStream();
      return undefined;
    }

    let cancelled = false;

    const startCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraError("Camera is not supported on this browser. Use gallery upload instead.");
        setCameraOpen(false);
        return;
      }

      setCameraStarting(true);
      setCameraError("");

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        await attachStreamToVideo();
      } catch (err) {
        console.warn("camera access failed", err);
        if (!cancelled) {
          setCameraError(
            "Could not open camera. Allow camera permission in your browser settings, then try again.",
          );
          setCameraOpen(false);
        }
      } finally {
        if (!cancelled) setCameraStarting(false);
      }
    };

    startCamera();

    return () => {
      cancelled = true;
      stopCameraStream();
    };
  }, [cameraOpen, stopCameraStream, attachStreamToVideo]);

  useEffect(() => {
    if (cameraOpen && !cameraStarting) {
      attachStreamToVideo();
    }
  }, [cameraOpen, cameraStarting, attachStreamToVideo]);

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("Could not read photo"));
      reader.readAsDataURL(file);
    });

  const saveCapturedPhoto = async (file) => {
    if (!file.type.startsWith("image/")) {
      setCameraError("Please capture or choose a photo.");
      return;
    }

    if (file.size > SIXTY_MINUTES_QUICK_SUBMIT.maxImageBytes) {
      setCameraError("Photo is too large. Please use an image under 10 MB.");
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      clearCapturedPreview();
      const previewUrl = URL.createObjectURL(file);
      capturedPreviewRef.current = previewUrl;
      setCapturedPreview(previewUrl);
      setPendingPhoto({
        name: file.name || "project-photo.jpg",
        type: file.type,
        size: file.size,
        dataUrl,
        file,
      });
      setCameraError("");
      setImageSaved(false);
    } catch (e) {
      console.warn("photo save failed", e);
      setCameraError("Could not save your photo. Please try again.");
    }
  };

  const openCamera = () => {
    if (submitting || imageSaved) return;
    setCameraError("");
    setCameraOpen(true);
  };

  const takePhoto = () => {
    const video = videoRef.current;
    if (!video) {
      setCameraError("Camera not ready. Please try again.");
      return;
    }

    const width = video.videoWidth;
    const height = video.videoHeight;
    if (!width || !height) {
      setCameraError("Camera is still loading. Wait a moment, then tap capture again.");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCameraError("Could not capture photo. Please try again.");
      return;
    }

    ctx.drawImage(video, 0, 0, width, height);
    closeCamera();

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setCameraError("Could not capture photo. Please try again.");
          return;
        }
        const file = new File([blob], `project-photo-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });
        saveCapturedPhoto(file);
      },
      "image/jpeg",
      0.92,
    );
  };

  const handleGalleryFallback = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    closeCamera();
    await saveCapturedPhoto(file);
  };

  const submitQuickImage = async () => {
    if (submitting || submitMode !== "image" || imageSaved || !pendingPhoto) return;
    setSubmitting(true);
    setCameraError("");
    setSubmitError("");
    try {
      const uploadFile =
        pendingPhoto.file ||
        (await dataUrlToFile(
          pendingPhoto.dataUrl,
          pendingPhoto.name || "project-photo.jpg",
          pendingPhoto.type || "image/jpeg",
        ));

      const imageUrl = await uploadProjectImage(uploadFile);

      const templateParams = buildSixtyMinutesTeamEmailParams({
        imagePassed: true,
        firstName: st.fname.trim(),
        lastName: st.lname.trim(),
        email: st.email.trim(),
        image: imageUrl,
        ...teamEmailProjectFields(),
        mapApiKey,
      });
      await sendSixtyMinutesTeamEmail(templateParams);
      setImageSaved(true);
      finishSubmit("image");
    } catch (e) {
      console.error("[VBS] Quick submit failed:", e);
      setCameraError(
        e instanceof Error && e.message
          ? e.message
          : "Could not send your project. Please try again.",
      );
      setSubmitting(false);
    }
  };

  const restart = () => {
    setSt(INITIAL_STATE);
    setConsent(true);
    setSubmitting(false);
    setSubmitMode("form");
    setSubmitMethod(null);
    setImageSaved(false);
    setCameraError("");
    setSubmitError("");
    closeCamera();
    clearCapturedPreview();
    setToastMessage("");
    go(0);
  };

  const renderScreen = (index, children, extraClass = "") => (
    <div
      key={index}
      id={`sc${index}`}
      className={[screenClass(index, current, exiting, forward), extraClass].filter(Boolean).join(" ")}
      style={screenStyle(index, current, exiting, forward)}
    >
      {children}
    </div>
  );

  return (
    <>
      <div className="byt-v3-shell-host">
        <div className="byt-v3-viewport-bg" aria-hidden>
          <div ref={orb1Ref} className="bg-orb orb1" id="orb1" />
          <div ref={orb2Ref} className="bg-orb orb2" id="orb2" />
          <div className="bg-orb orb3" />
          <div className="grain" />
        </div>
        <div className="vbs-shell">
        <div className="screen-wrap" id="screenWrap" ref={screenWrapRef}>
          {renderScreen(
            0,
            <div className="hero-split">
              <div className="hero-left">
                <div className="s-eyebrow">60-minute guarantee</div>
                <h1 className="s-title s-title--intro">
                  <span className="s-title-line">Show Us Your Project.</span>
                  <span className="s-title-line">
                    We&apos;ll Build Your <span className="hi-red">Team</span>
                  </span>
                  <span className="s-title-line">
                    in <span className="hi-blue">60 Minutes.</span>
                  </span>
                </h1>
                <div className="s-sub">
                  Answer a few quick questions. Our system scopes your architecture project, runs an
                  automation analysis, and maps the exact team, equipped with AI workflows, you need -
                  instantly.
                </div>
                <div className="nav-row" style={{ animationDelay: "0.32s" }}>
                  <button type="button" className="btn-p" onClick={() => go(1)}>
                    Get started <i className="ti ti-arrow-right" />
                  </button>
                  <div className="intro-hint">
                    <i className="ti ti-shield-check" style={{ fontSize: 16, color: "#089adf" }} />
                    No commitment required
                  </div>
                </div>
                <div className="intro-features">
                  <div className="intro-feat">
                    <i className="ti ti-cpu intro-feat-ico" style={{ color: "#089adf" }} />
                    <div className="intro-feat-t">Automation analysis</div>
                    <div className="intro-feat-s">AI-scoped deliverables</div>
                  </div>
                  <div className="intro-feat">
                    <i className="ti ti-users intro-feat-ico" style={{ color: "#e5232b" }} />
                    <div className="intro-feat-t">Right-sized teams</div>
                    <div className="intro-feat-s">Matched to your area</div>
                  </div>
                  <div className="intro-feat">
                    <i className="ti ti-bolt intro-feat-ico" style={{ color: "#f59e0b" }} />
                    <div className="intro-feat-t">Start fast</div>
                    <div className="intro-feat-s">Within 60 minutes</div>
                  </div>
                </div>
              </div>
              <SixtyMinutesTeamIntroVideo videoId={SIXTY_MINUTES_INTRO_VIDEO_ID} />
            </div>,
            "screen-intro",
          )}

          {renderScreen(
            1,
            <>
              <div className="s-eyebrow">Step 1 of 7</div>
              <div className="s-title">Project type</div>
              <div className="s-sub">What kind of project are you working on?</div>
              <div className="opts-grid" id="typeGrid">
                {PROJECT_TYPES.map((type) => (
                  <div
                    key={type.id}
                    className={`opt${st.type === type.id ? " sel" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleTypeSelect(type.id)}
                    onKeyDown={(e) => e.key === "Enter" && handleTypeSelect(type.id)}
                  >
                    <div className="opt-check">
                      <i className="ti ti-check" style={{ fontSize: 9 }} />
                    </div>
                    <span className="opt-ico">{type.i}</span>
                    <div className="opt-lbl">{type.l}</div>
                    <div className="opt-sub">{type.s}</div>
                  </div>
                ))}
              </div>
              <div id="typeOtherWrap">
                <input
                  className={`finp other-inp${st.type === "other" ? " show" : ""}`}
                  id="typeOtherInp"
                  placeholder="Describe your project type…"
                  value={st.typeOther}
                  onChange={(e) => setSt((prev) => ({ ...prev, typeOther: e.target.value }))}
                />
              </div>
              <div className="nav-row">
                <button type="button" className="btn-s" onClick={() => go(0)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-p" disabled={!step1Valid} onClick={() => go(2)}>
                  Next: Details <i className="ti ti-arrow-right" />
                </button>
              </div>
            </>,
          )}

          {renderScreen(
            2,
            <>
              <div className="s-eyebrow">Step 2 of 7</div>
              <div className="s-title">Project details</div>
              <div className="s-sub">A few specifics so we can scope it accurately.</div>

              <div className="detail-block">
                <div className="dlbl">
                  <i className="ti ti-ruler-2" style={{ color: "#e5232b" }} /> Total area{" "}
                  <span className="dval" id="areaVal">
                    {fmtArea(st.area)}
                  </span>
                </div>
                <div className="slider-wrap">
                  <input
                    type="range"
                    className="byt-area-range"
                    id="areaSlider"
                    min={500}
                    max={100000}
                    step={500}
                    value={st.area}
                    style={{ "--pct": areaSliderPct(st.area) }}
                    onInput={(e) => handleAreaChange(e.target.value)}
                  />
                </div>
                <div className="slider-ticks">
                  <span>500 sq ft</span>
                  <span>1 lakh sq ft</span>
                </div>
              </div>

              <div className="detail-block">
                <div className="dlbl">
                  <i className="ti ti-stack-2" style={{ color: "#089adf" }} /> Number of floors
                </div>
                <div className="chip-wrap" id="floorChips">
                  {FLOOR_OPTIONS.map((floor) => (
                    <div
                      key={floor}
                      className={`chip${st.floors === floor ? " sel" : ""}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSt((prev) => ({ ...prev, floors: floor }))}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSt((prev) => ({ ...prev, floors: floor }))
                      }
                    >
                      {floor}
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <div className="dlbl">
                  <i className="ti ti-map-pin" style={{ color: "#7c3aed" }} /> Location
                </div>
                <SixtyMinutesTeamLocationInput
                  id="locInp"
                  value={st.location}
                  isActive={current === 2}
                  onChange={(location) => setSt((prev) => ({ ...prev, location }))}
                />
              </div>

              <div className="nav-row">
                <button type="button" className="btn-s" onClick={() => go(1)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-p" disabled={!step2Valid} onClick={() => go(3)}>
                  Next: Stage <i className="ti ti-arrow-right" />
                </button>
              </div>
            </>,
            "screen-step-details",
          )}

          {renderScreen(
            3,
            <>
              <div className="s-eyebrow">Step 3 of 7</div>
              <div className="s-title">Project stage</div>
              <div className="s-sub">What scope of work do you need delivered?</div>
              <div className="stage-list" id="stageList">
                {PROJECT_STAGES.map((stage) => (
                  <div
                    key={stage.id}
                    className={`stage-card${stage.popular ? " pop" : ""}${st.stage === stage.id ? " sel" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSt((prev) => ({ ...prev, stage: stage.id }))}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setSt((prev) => ({ ...prev, stage: stage.id }))
                    }
                  >
                    {stage.popular ? <div className="pop-badge">Most popular</div> : null}
                    <div className="stage-ico">
                      <i className={`ti ${stage.i}`} />
                    </div>
                    <div className="stage-body">
                      <div className="stage-name">{stage.l}</div>
                      <div className="stage-desc">{stage.d}</div>
                    </div>
                    <div className="stage-radio">
                      <i className="ti ti-check" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="nav-row">
                <button type="button" className="btn-s" onClick={() => go(2)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-p" disabled={!step3Valid} onClick={() => go(4)}>
                  Next: Deliverables <i className="ti ti-arrow-right" />
                </button>
              </div>
            </>,
          )}

          {renderScreen(
            4,
            <>
              <div className="s-eyebrow">Step 4 of 7 — Scoped for you</div>
              <div className="s-title">Your deliverables</div>
              <div className="s-sub">
                Based on your stage, here&apos;s exactly what we&apos;ll produce. Confirm to continue.
              </div>
              <div className="deliv-panel">
                <div className="deliv-head">
                  <div className="deliv-head-ico">
                    <i className="ti ti-checklist" />
                  </div>
                  <div>
                    <div className="deliv-head-t" id="delivStageName">
                      {stageLabel}
                    </div>
                    <div className="deliv-head-s">Auto-populated deliverable set</div>
                  </div>
                </div>
                <div className="deliv-grid" id="delivGrid">
                  {(DELIVERABLES_BY_STAGE[st.stage] || DELIVERABLES_BY_STAGE.sd).map((item, i) => (
                    <div
                      key={item}
                      className="deliv-item"
                      style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                    >
                      <div className="deliv-tick">
                        <i className="ti ti-check" />
                      </div>
                      <div className="deliv-txt">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="nav-row">
                <button type="button" className="btn-s" onClick={() => go(3)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-p" onClick={handleConfirmDeliverables}>
                  <i className="ti ti-check" /> Confirm &amp; continue
                </button>
              </div>
            </>,
          )}

          {renderScreen(
            5,
            <>
              <div className="s-eyebrow">Step 5 of 7 — Automation analysis</div>
              <div className="s-title">Finding your team</div>
              <div id="autoLoading">
              <div className="auto-loader">
                <div className="scan-box">
                  <div className="scan-ring" />
                  <div className="scan-ring r2" />
                  <div className="scan-line" />
                  <div className="scan-core">
                    <i className="ti ti-cpu" />
                  </div>
                  <div className="scan-dot d1" />
                  <div className="scan-dot d2" />
                  <div className="scan-dot d3" />
                </div>
                <div className="auto-msg-title" id="autoMsg">
                  {AUTO_ANALYSIS_MESSAGES[autoMsgIndex][0]}
                </div>
                <div className="auto-msg-sub" id="autoSub">
                  {AUTO_ANALYSIS_MESSAGES[autoMsgIndex][1]}
                </div>
                <div className="auto-checks" id="autoChecks">
                  {AUTO_ANALYSIS_STEPS.map((step, i) => (
                    <div
                      key={step.t}
                      className={`auto-row${autoRowsOn.includes(i) ? " on" : ""}`}
                      id={`ar${i}`}
                    >
                      <div className="auto-row-ico">
                        <i className={`ti ${step.s}`} />
                      </div>
                      <div className="auto-row-txt">{step.t}</div>
                      <div className="auto-row-stat" id={`ars${i}`}>
                        {autoRowsOn.includes(i) ? (
                          <i className="ti ti-check" style={{ fontSize: 14 }} />
                        ) : (
                          <div className="auto-spin" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </>,
            "screen-step-analysis",
          )}

          {renderScreen(
            6,
            <>
              <div className="s-eyebrow">Step 6 of 7</div>
              <div className="s-title">Team size &amp; timeline</div>
              <div className="s-sub" id="teamSub">
                Delivery estimates for {fmtArea(st.area)} · {stageLabel}. Choose the
                setup that fits.
              </div>
              <div className="team-grid" id="teamGrid">
                {[1, 3, 5].map((size) => {
                  const tl = teamTimelineData?.[size];
                  const na = tl === null || tl === undefined;
                  const rec = size === 3 && !na;
                  const avatars = TEAM_AVATARS[size];
                  return (
                    <div
                      key={size}
                      className={`team-card${rec ? " rec" : ""}${na ? " inactive" : ""}${st.team === size ? " sel" : ""}`}
                      role={na ? undefined : "button"}
                      tabIndex={na ? undefined : 0}
                      onClick={() => !na && handleTeamSelect(size, tl)}
                      onKeyDown={(e) => !na && e.key === "Enter" && handleTeamSelect(size, tl)}
                    >
                      {rec ? <div className="rec-badge">Recommended</div> : null}
                      <div className="team-avatars">
                        {avatars.map((av) => (
                          <div key={av.i} className="tav" style={{ background: av.bg }}>
                            {av.i}
                          </div>
                        ))}
                      </div>
                      <div className="team-size">{size}</div>
                      <div className="team-size-lbl">{size === 1 ? "Person" : "People"}</div>
                      <div className="team-timeline">
                        <div className="tt-lbl">Est. delivery</div>
                        {na ? (
                          <div className="tt-na">Not applicable</div>
                        ) : (
                          <div className="tt-val">{tl}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="nav-row">
                <button type="button" className="btn-s" onClick={() => go(4)}>
                  <i className="ti ti-arrow-left" /> Back
                </button>
                <button type="button" className="btn-p" disabled={!step6Valid} onClick={() => go(7)}>
                  Next: Your details <i className="ti ti-arrow-right" />
                </button>
              </div>
            </>,
          )}

          {renderScreen(
            7,
            <>
              <div className="s-eyebrow">Step 7 of 7</div>
              <div className="s-title">Almost there</div>
              <div className="s-sub">
                {hideQuickSubmit
                  ? "Enter your details and we\u2019ll send your project summary."
                  : "Choose how you\u2019d like to send us your scoped project."}
              </div>

              {submitModes.length > 1 ? (
              <div className="submit-mode-row">
                {submitModes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    className={`submit-mode-card${submitMode === mode.id ? " sel" : ""}`}
                    onClick={() => {
                      setSubmitMode(mode.id);
                      setImageSaved(false);
                      setSubmitting(false);
                      setCameraError("");
                      setSubmitError("");
                      if (mode.id !== "image") {
                        closeCamera();
                        clearCapturedPreview();
                      }
                    }}
                  >
                    <span className="submit-mode-ico">
                      <i className={`ti ${mode.icon}`} />
                    </span>
                    <span className="submit-mode-lbl">{mode.label}</span>
                    <span className="submit-mode-sub">{mode.sub}</span>
                  </button>
                ))}
              </div>
              ) : null}

              {submitMode === "form" ? (
                <form className="byt-form-submit" noValidate onSubmit={handleFormSubmit}>
                  <div className="contact-grid">
                    <div>
                      <div className="flbl">First name *</div>
                      <input
                        className="finp"
                        id="fnameI"
                        placeholder="Jane"
                        value={st.fname}
                        onChange={(e) => setSt((prev) => ({ ...prev, fname: e.target.value }))}
                      />
                    </div>
                    <div>
                      <div className="flbl">Last name *</div>
                      <input
                        className="finp"
                        id="lnameI"
                        placeholder="Doe"
                        value={st.lname}
                        onChange={(e) => setSt((prev) => ({ ...prev, lname: e.target.value }))}
                      />
                    </div>
                    <div className="contact-full">
                      <div className="flbl">Work email *</div>
                      <input
                        className="finp"
                        id="emailI"
                        type="email"
                        placeholder="jane@firm.com"
                        value={st.email}
                        onChange={(e) => setSt((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="consent-row">
                    <div
                      className={`consent-box${consent ? " on" : ""}`}
                      id="consentBox"
                      role="button"
                      tabIndex={0}
                      onClick={() => setConsent((v) => !v)}
                      onKeyDown={(e) => e.key === "Enter" && setConsent((v) => !v)}
                    >
                      <i className="ti ti-check" />
                    </div>
                    <div className="consent-txt">
                      Email me my project summary and a link to book a 60-minute scoping session with
                      the VBS team.
                    </div>
                  </div>
                  {submitError ? (
                    <div className="quick-submit-error" role="alert">
                      <i className="ti ti-alert-circle" />
                      {submitError}
                    </div>
                  ) : null}
                  <div className="nav-row" style={{ animationDelay: "0.1s" }}>
                    <button type="button" className="btn-s" onClick={() => go(6)}>
                      <i className="ti ti-arrow-left" /> Back
                    </button>
                    <button
                      type="submit"
                      className="btn-p"
                      id="submitBtn"
                      disabled={!step7Valid || !consent || submitting}
                    >
                      {submitting ? (
                        <>
                          <div
                            className="auto-spin"
                            style={{
                              borderTopColor: "#fff",
                              borderColor: "rgba(255,255,255,0.4)",
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <i className="ti ti-send" /> Get my project summary
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="quick-submit-wrap">
                    <input
                      ref={cameraInputRef}
                      type="file"
                      accept="image/*"
                      className="quick-submit-camera-input"
                      aria-hidden
                      tabIndex={-1}
                      onChange={handleGalleryFallback}
                    />
                    <p className="quick-submit-hint">{SIXTY_MINUTES_QUICK_SUBMIT.hint}</p>
                    <button
                      type="button"
                      className={`quick-submit-image${imageSaved ? " is-saved" : ""}${submitting ? " is-busy" : ""}${capturedPreview ? " has-preview" : ""}`}
                      onClick={openCamera}
                      disabled={submitting || imageSaved}
                      aria-label={capturedPreview ? "Retake photo" : SIXTY_MINUTES_QUICK_SUBMIT.label}
                    >
                      <span className="quick-submit-image-inner">
                        {capturedPreview ? (
                          <img
                            src={capturedPreview}
                            alt="Captured project photo"
                            className="quick-submit-preview"
                          />
                        ) : (
                          <span className="quick-submit-camera-placeholder">
                            <i className="ti ti-camera" />
                            <span>Open camera</span>
                          </span>
                        )}
                      </span>
                      <span className="quick-submit-badge">
                        {capturedPreview ? (
                          <>
                            <i className="ti ti-check" /> Photo ready — tap Submit below
                          </>
                        ) : (
                          <>
                            <i className="ti ti-camera" /> {SIXTY_MINUTES_QUICK_SUBMIT.label}
                          </>
                        )}
                      </span>
                    </button>
                    {cameraError ? (
                      <div className="quick-submit-error" role="alert">
                        <i className="ti ti-alert-circle" />
                        {cameraError}
                      </div>
                    ) : null}
                    {imageSaved ? (
                      <div className="quick-submit-success" role="status">
                        <i className="ti ti-circle-check" />
                        Successfully submitted — our team will get back to you shortly.
                      </div>
                    ) : null}
                  </div>
                  <div className="nav-row" style={{ animationDelay: "0.1s" }}>
                    <button type="button" className="btn-s" onClick={() => go(6)}>
                      <i className="ti ti-arrow-left" /> Back
                    </button>
                    <button
                      type="button"
                      className="btn-p"
                      disabled={!pendingPhoto || submitting || imageSaved}
                      onClick={submitQuickImage}
                    >
                      {submitting ? (
                        <>
                          <div
                            className="auto-spin"
                            style={{
                              borderTopColor: "#fff",
                              borderColor: "rgba(255,255,255,0.4)",
                            }}
                          />
                          Submitting…
                        </>
                      ) : (
                        <>
                          <i className="ti ti-send" /> Submit project
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </>,
          )}

          {renderScreen(
            8,
            <div className="ty-wrap">
              <div className="ty-hero">
                <div className="ty-ring">
                  <i className="ti ti-check" />
                </div>
                <div className="ty-htxt">
                  <h2>
                    {submitMethod === "image" ? (
                      "You're all set!"
                    ) : (
                      <>
                        You&apos;re all set, <span id="tyName">{st.fname || "there"}</span>.
                      </>
                    )}
                  </h2>
                  <p id="tyEmailLine">
                    {submitMethod === "image" ? (
                      <>
                        Your project scope was submitted successfully. Our team will get back to you
                        shortly.
                      </>
                    ) : (
                      <>Your project summary is on its way to {st.email}.</>
                    )}
                  </p>
                </div>
              </div>

              <div className="ty-columns">
                <div className="ty-col ty-col-summary">
                  <div className="summary-card">
                    <div className="sum-title">
                      <i className="ti ti-file-description" /> Scoped project summary
                    </div>
                    <div className="sum-grid" id="sumGrid">
                      <div className="sum-item">
                        <div className="sum-k">Project type</div>
                        <div className="sum-v">{typeLabel}</div>
                      </div>
                      <div className="sum-item">
                        <div className="sum-k">Stage</div>
                        <div className="sum-v accent">{stageLabel}</div>
                      </div>
                      <div className="sum-item">
                        <div className="sum-k">Area</div>
                        <div className="sum-v">{fmtArea(st.area)}</div>
                      </div>
                      <div className="sum-item">
                        <div className="sum-k">Floors</div>
                        <div className="sum-v">{st.floors}</div>
                      </div>
                      <div className="sum-item">
                        <div className="sum-k">Location</div>
                        <div className="sum-v">{getLocationLabel(st.location)}</div>
                      </div>
                      <div className="sum-item">
                        <div className="sum-k">Team &amp; timeline</div>
                        <div className="sum-v accent">
                          {st.team} {st.team === 1 ? "person" : "people"} · {st.timeline}
                        </div>
                      </div>
                      <div className="sum-item sum-deliv">
                        <div className="sum-k" style={{ width: "100%", marginBottom: 4 }}>
                          Deliverables
                        </div>
                        {deliverables.map((d) => (
                          <div key={d} className="sum-pill">
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ty-col ty-col-booking">
                  <div className="book-cta">
                    <div className="book-urgency">
                      <span className="pulse-dot" />
                      Slots fill within the hour
                    </div>
                    <div className="book-t">Book your 60-minute scoping session</div>
                    <div className="book-s">
                      Lock in a quick call now. We&apos;ll review your project, confirm scope, and have
                      your selected team ready to start — all within 60 minutes of the session.
                    </div>
                    <div className="book-row">
                      <a
                        href={bookingUrl}
                        id="bookingBtn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-white"
                      >
                        <i className="ti ti-calendar-plus" /> Schedule quick meeting
                      </a>
                      <button type="button" className="btn-ghost" onClick={restart}>
                        <i className="ti ti-refresh" /> Start a new project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            "screen-thank-you",
          )}
        </div>
      </div>
      </div>

      {cameraOpen ? (
        <div className="byt-camera-overlay" role="dialog" aria-modal="true" aria-label="Camera">
          <div className="byt-camera-panel">
            <div className="byt-camera-header">
              <button type="button" className="byt-camera-close" onClick={closeCamera} aria-label="Close camera">
                <i className="ti ti-x" />
              </button>
              <span className="byt-camera-title">Take a photo</span>
              <span className="byt-camera-spacer" aria-hidden />
            </div>
            <div className="byt-camera-viewport">
              <video
                ref={videoRef}
                className="byt-camera-video"
                autoPlay
                playsInline
                muted
                aria-hidden={cameraStarting}
              />
              {cameraStarting ? (
                <div className="byt-camera-loading">
                  <span className="auto-spin byt-camera-loading-spin" />
                  Opening camera…
                </div>
              ) : null}
            </div>
            <div className="byt-camera-actions">
              <button
                type="button"
                className="byt-camera-gallery"
                onClick={() => cameraInputRef.current?.click()}
              >
                <i className="ti ti-photo" /> Gallery
              </button>
              <button
                type="button"
                className="byt-camera-shutter"
                onClick={takePhoto}
                disabled={cameraStarting}
                aria-label="Capture photo"
              >
                <span />
              </button>
              <span className="byt-camera-spacer" aria-hidden />
            </div>
          </div>
        </div>
      ) : null}

      <div className={`byt-toast${toastVisible ? " show" : ""}`} id="toast">
        <i className={`ti ${submitMethod === "image" ? "ti-circle-check" : "ti-mail-check"}`} />{" "}
        <span id="toastTxt">{toastMessage || `Summary sent to ${st.email}`}</span>
      </div>
    </>
  );
}
