"use client";

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Cpu,
  ShieldCheck,
  User,
  Users,
  Zap,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  BOOKING_TIME_SLOTS,
  BUILD_YOUR_TEAM_TOTAL_STEPS,
  LOADER_MESSAGES,
  ORB_POSITIONS,
  PROJECT_STAGES,
  PROJECT_TYPES,
  SCOPE_OPTIONS,
  SINGLE_PROFILES,
  TEAM_PROFILES,
  type BuildYourTeamState,
  type SingleProfile,
  type TeamProfile,
} from "@/constants/build-your-team-data";
import { cn } from "@/lib/utils";

import styles from "./build-your-team.module.css";

const INITIAL_STATE: BuildYourTeamState = {
  type: null,
  stage: null,
  scope: [],
  mode: null,
  profile: null,
  day: null,
  time: null,
};

function StepPanel({ children }: { children: ReactNode }) {
  return (
    <div className={styles.stepPanel}>
      <div className={styles.screenInner}>{children}</div>
    </div>
  );
}

function LoaderStepPanel({ onComplete }: { onComplete: () => void }) {
  const [loaderMsgIndex, setLoaderMsgIndex] = useState(0);
  const [loaderRun, setLoaderRun] = useState(false);

  useEffect(() => {
    const startFill = window.setTimeout(() => setLoaderRun(true), 30);
    const msgInterval = window.setInterval(() => {
      setLoaderMsgIndex((i) => (i < LOADER_MESSAGES.length - 1 ? i + 1 : i));
    }, 580);
    const goNext = window.setTimeout(onComplete, 2500);
    return () => {
      window.clearTimeout(startFill);
      window.clearInterval(msgInterval);
      window.clearTimeout(goNext);
    };
  }, [onComplete]);

  return (
    <StepPanel>
      <div className={styles.loaderCenter}>
        <div className={styles.pulseRing}>
          <div className={styles.prInner} />
          <div className={styles.prMid} />
          <div className={styles.prDot} />
        </div>
        <div className={styles.lMsg}>{LOADER_MESSAGES[loaderMsgIndex][0]}</div>
        <div className={styles.lSub}>{LOADER_MESSAGES[loaderMsgIndex][1]}</div>
        <div className={styles.lTrack}>
          <div className={cn(styles.lFill, loaderRun && styles.lFillRun)} />
        </div>
      </div>
    </StepPanel>
  );
}

function OptionCard({
  selected,
  icon,
  label,
  sub,
  onClick,
  shake,
}: {
  selected: boolean;
  icon: string;
  label: string;
  sub?: string;
  onClick: () => void;
  shake?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(styles.opt, selected && styles.optSel)}
      onClick={onClick}
      style={shake ? { outline: "1.5px solid #e5232b" } : undefined}
    >
      <span className={styles.optCheck}>
        <Check size={9} strokeWidth={3} aria-hidden />
      </span>
      <span className={styles.optIco}>{icon}</span>
      <div className={styles.optLbl}>{label}</div>
      {sub ? <div className={styles.optSub}>{sub}</div> : null}
    </button>
  );
}

function ProfileCardSingle({
  profile,
  selected,
  onSelect,
  animateBars,
}: {
  profile: SingleProfile;
  selected: boolean;
  onSelect: () => void;
  animateBars: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(styles.pcard, selected && styles.pcardSel)}
      onClick={onSelect}
    >
      <div className={styles.pav} style={{ background: profile.bg }}>
        {profile.ini}
      </div>
      <div>
        <div className={styles.pName}>{profile.name}</div>
        <div className={styles.pRole}>{profile.role}</div>
        <div className={styles.pPills}>
          {profile.pills.map((pill) => (
            <div key={pill} className={styles.ppill}>
              {pill}
            </div>
          ))}
        </div>
        <div className={styles.pBars}>
          <div className={styles.pBarRow}>
            <span className={styles.pBarLbl}>Speed boost</span>
            <div className={styles.pBarTrack}>
              <div
                className={styles.pBarFill}
                style={{
                  background: profile.bg,
                  width: animateBars ? `${profile.speed}%` : 0,
                }}
              />
            </div>
            <span className={styles.pBarVal} style={{ color: profile.bg }}>
              +{profile.speed}%
            </span>
          </div>
          <div className={styles.pBarRow}>
            <span className={styles.pBarLbl}>Project fit</span>
            <div className={styles.pBarTrack}>
              <div
                className={styles.pBarFill}
                style={{
                  background: "#089adf",
                  width: animateBars ? `${profile.fit}%` : 0,
                }}
              />
            </div>
            <span className={styles.pBarVal} style={{ color: "#089adf" }}>
              {profile.fit}%
            </span>
          </div>
        </div>
      </div>
      <div className={styles.pselDot}>
        <Check size={9} strokeWidth={3} aria-hidden />
      </div>
    </button>
  );
}

function ProfileCardTeam({
  profile,
  selected,
  onSelect,
  animateBars,
}: {
  profile: TeamProfile;
  selected: boolean;
  onSelect: () => void;
  animateBars: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(styles.pcard, styles.pcardTeam, selected && styles.pcardSel)}
      onClick={onSelect}
    >
      <div>
        <div className={styles.avRow}>
          {profile.members.map((member) => (
            <div key={member.i} className={styles.smAv} style={{ background: member.bg }}>
              {member.i}
            </div>
          ))}
        </div>
        <div className={styles.pName}>{profile.name}</div>
        <div className={styles.pRole}>{profile.role}</div>
        <div className={styles.pPills}>
          {profile.pills.map((pill) => (
            <div key={pill} className={styles.ppill}>
              {pill}
            </div>
          ))}
        </div>
        <div className={styles.pBars}>
          <div className={styles.pBarRow}>
            <span className={styles.pBarLbl}>Speed</span>
            <div className={styles.pBarTrack}>
              <div
                className={styles.pBarFill}
                style={{
                  background: "#e5232b",
                  width: animateBars ? `${profile.speed}%` : 0,
                }}
              />
            </div>
            <span className={styles.pBarVal} style={{ color: "#e5232b" }}>
              +{profile.speed}%
            </span>
          </div>
          <div className={styles.pBarRow}>
            <span className={styles.pBarLbl}>Project fit</span>
            <div className={styles.pBarTrack}>
              <div
                className={styles.pBarFill}
                style={{
                  background: "#089adf",
                  width: animateBars ? `${profile.fit}%` : 0,
                }}
              />
            </div>
            <span className={styles.pBarVal} style={{ color: "#089adf" }}>
              {profile.fit}%
            </span>
          </div>
          <div className={styles.pBarRow}>
            <span className={styles.pBarLbl}>Coordination</span>
            <div className={styles.pBarTrack}>
              <div
                className={styles.pBarFill}
                style={{
                  background: "#7c3aed",
                  width: animateBars ? `${profile.coord}%` : 0,
                }}
              />
            </div>
            <span className={styles.pBarVal} style={{ color: "#7c3aed" }}>
              {profile.coord}%
            </span>
          </div>
        </div>
      </div>
      <div className={styles.pselDot}>
        <Check size={9} strokeWidth={3} aria-hidden />
      </div>
    </button>
  );
}

export function BuildYourTeamImmersive() {
  const [current, setCurrent] = useState(0);
  const [st, setSt] = useState<BuildYourTeamState>(INITIAL_STATE);
  const [animateBars, setAnimateBars] = useState(false);
  const [shakeType, setShakeType] = useState(false);
  const [shakeStage, setShakeStage] = useState(false);
  const [shakeMode, setShakeMode] = useState(false);
  const [shakeProfile, setShakeProfile] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [formError, setFormError] = useState({ name: false, email: false });

  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const screenWrapRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const selectedProfile = useMemo(() => {
    const all = [...SINGLE_PROFILES, ...TEAM_PROFILES];
    return all.find((p) => p.id === st.profile);
  }, [st.profile]);

  const calendarCells = useMemo(() => {
    const now = new Date();
    const first = new Date(now.getFullYear(), now.getMonth(), 1);
    const startDay = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const cells: { key: string; day?: number; past?: boolean; today?: boolean }[] = [];
    for (let i = 0; i < startDay; i++) cells.push({ key: `empty-${i}` });
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        key: `day-${d}`,
        day: d,
        past: d < now.getDate(),
        today: d === now.getDate(),
      });
    }
    return cells;
  }, []);

  const shiftOrbs = useCallback((n: number) => {
    const pos = ORB_POSITIONS[n] ?? ORB_POSITIONS[0];
    const base1 =
      "width:min(420px,35vw);height:min(420px,35vw);background:#089adf;filter:blur(60px);opacity:0.08;border-radius:50%;pointer-events:none;transition:all 1.2s cubic-bezier(.22,1,.36,1);position:absolute;";
    const base2 =
      "width:min(300px,28vw);height:min(300px,28vw);background:#e5232b;filter:blur(50px);opacity:0.08;border-radius:50%;pointer-events:none;transition:all 1.2s cubic-bezier(.22,1,.36,1);position:absolute;";
    if (orb1Ref.current) orb1Ref.current.style.cssText = base1 + pos.t1;
    if (orb2Ref.current) orb2Ref.current.style.cssText = base2 + pos.t2;
  }, []);

  const go = useCallback(
    (n: number) => {
      if (n === current || n < 0 || n >= BUILD_YOUR_TEAM_TOTAL_STEPS) return;
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      setCurrent(n);
      shiftOrbs(n);
      if (n === 6) setAnimateBars(false);
    },
    [current, shiftOrbs],
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [current]);

  useEffect(() => {
    shiftOrbs(0);
  }, [shiftOrbs]);

  const completeLoader = useCallback(() => go(6), [go]);

  useEffect(() => {
    if (current !== 6) return;
    const t = window.setTimeout(() => setAnimateBars(true), 100);
    return () => window.clearTimeout(t);
  }, [current, st.mode]);

  const requireField = (field: "type" | "stage", next: number) => {
    if (!st[field]) {
      if (field === "type") {
        setShakeType(true);
        window.setTimeout(() => setShakeType(false), 600);
      } else {
        setShakeStage(true);
        window.setTimeout(() => setShakeStage(false), 600);
      }
      return;
    }
    go(next);
  };

  const requireMode = () => {
    if (!st.mode) {
      setShakeMode(true);
      window.setTimeout(() => setShakeMode(false), 600);
      return;
    }
    go(5);
  };

  const requireProfile = () => {
    if (!st.profile) {
      setShakeProfile(true);
      window.setTimeout(() => setShakeProfile(false), 600);
      return;
    }
    go(7);
  };

  const confirmBook = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    if (!name || !email) {
      setFormError({ name: !name, email: !email });
      window.setTimeout(() => setFormError({ name: false, email: false }), 1000);
      return;
    }
    go(8);
  };

  const donePills = useMemo(() => {
    const now = new Date();
    return [
      selectedProfile?.name ?? "Your selection",
      st.day ? `${now.toLocaleString("default", { month: "short" })} ${st.day}` : "Date TBD",
      st.time ?? "Time TBD",
      st.mode === "team" ? "Integrated team" : "Individual specialist",
    ];
  }, [selectedProfile, st.day, st.time, st.mode]);

  useEffect(() => {
    const wrap = screenWrapRef.current;
    if (!wrap) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) < 50) return;
      if (dx > 0 && current > 0) go(current - 1);
    };
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, go]);

  return (
    <section
      ref={sectionRef}
      className={styles.root}
      aria-label="Build your team — guided project matching"
    >
      <div className={styles.orbLayer} aria-hidden>
        <div ref={orb1Ref} className={cn(styles.bgOrb, styles.orb1)} />
        <div ref={orb2Ref} className={cn(styles.bgOrb, styles.orb2)} />
        <div className={cn(styles.bgOrb, styles.orb3)} />
      </div>

      <div ref={screenWrapRef} className={styles.screenWrap}>
        {current === 0 ? (
        <StepPanel>
          <div className={styles.eyebrow}>60-minute guarantee</div>
          <h2 className={styles.title}>
            Show us your
            <br />
            project. We&apos;ll build
            <br />
            your <span className={styles.hiRed}>team</span> in <span className={styles.hiBlue}>60 min.</span>
          </h2>
          <p className={styles.sub}>
            Tell us a few things. Our system maps the exact resource or team for your architecture
            project — instantly.
          </p>
          <div className={styles.navRow}>
            <button type="button" className={styles.btnP} onClick={() => go(1)}>
              <ArrowRight size={18} aria-hidden />
              Get started
            </button>
            <div className={styles.noCommit}>
              <ShieldCheck size={16} className="text-[#2299D6]" aria-hidden />
              No commitment required
            </div>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <Cpu size={20} className="mb-[7px] text-[#2299D6]" aria-hidden />
              <div className={styles.featureTitle}>Smart matching</div>
              <div className={styles.featureSub}>AI-powered fit scoring</div>
            </div>
            <div className={styles.featureCard}>
              <Users size={20} className="mb-[7px] text-[#D70416]" aria-hidden />
              <div className={styles.featureTitle}>Vetted experts</div>
              <div className={styles.featureSub}>Architecture-focused</div>
            </div>
            <div className={styles.featureCard}>
              <Zap size={20} style={{ color: "#f59e0b", marginBottom: 7 }} aria-hidden />
              <div className={styles.featureTitle}>Start fast</div>
              <div className={styles.featureSub}>Within 60 minutes</div>
            </div>
          </div>
        </StepPanel>
        ) : null}

        {current === 1 ? (
        <StepPanel>
          <div className={styles.eyebrow}>Step 1 of 5</div>
          <h2 className={styles.title}>Project type</h2>
          <p className={styles.sub}>What kind of project are you working on?</p>
          <div className={styles.optsGrid}>
            {PROJECT_TYPES.map((t) => (
              <OptionCard
                key={t.id}
                selected={st.type === t.id}
                icon={t.i}
                label={t.l}
                sub={t.s}
                shake={shakeType}
                onClick={() => setSt((s) => ({ ...s, type: t.id }))}
              />
            ))}
          </div>
          <input
            className={cn(styles.otherInp, st.type === "other" && styles.otherInpShow)}
            placeholder="Describe your project type…"
            aria-label="Other project type"
          />
          <div className={styles.navRow}>
            <button type="button" className={styles.btnS} onClick={() => go(0)}>
              <ArrowLeft size={16} aria-hidden />
              Back
            </button>
            <button type="button" className={styles.btnP} onClick={() => requireField("type", 2)}>
              <ArrowRight size={16} aria-hidden />
              Next: Stage
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 2 ? (
        <StepPanel>
          <div className={styles.eyebrow}>Step 2 of 5</div>
          <h2 className={styles.title}>Project stage</h2>
          <p className={styles.sub}>What phase is your project currently in?</p>
          <div className={styles.optsGrid}>
            {PROJECT_STAGES.map((t) => (
              <OptionCard
                key={t.id}
                selected={st.stage === t.id}
                icon={t.i}
                label={t.l}
                sub={t.s}
                shake={shakeStage}
                onClick={() => setSt((s) => ({ ...s, stage: t.id }))}
              />
            ))}
          </div>
          <input
            className={cn(styles.otherInp, st.stage === "other" && styles.otherInpShow)}
            placeholder="Describe your stage…"
            aria-label="Other project stage"
          />
          <div className={styles.navRow}>
            <button type="button" className={styles.btnS} onClick={() => go(1)}>
              <ArrowLeft size={16} aria-hidden />
              Back
            </button>
            <button type="button" className={styles.btnP} onClick={() => requireField("stage", 3)}>
              <ArrowRight size={16} aria-hidden />
              Next: Scope
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 3 ? (
        <StepPanel>
          <div className={styles.eyebrow}>Step 3 of 5</div>
          <h2 className={styles.title}>Scope of work</h2>
          <p className={styles.sub}>Select all deliverables that apply.</p>
          <div className={styles.chipWrap}>
            {SCOPE_OPTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={cn(styles.chip, st.scope.includes(s.id) && styles.chipSel)}
                onClick={() =>
                  setSt((prev) => {
                    const scope = [...prev.scope];
                    const i = scope.indexOf(s.id);
                    if (i > -1) scope.splice(i, 1);
                    else scope.push(s.id);
                    return { ...prev, scope };
                  })
                }
              >
                {s.l}
              </button>
            ))}
          </div>
          <input
            className={cn(styles.otherInp, st.scope.includes("other") && styles.otherInpShow)}
            placeholder="Describe your scope…"
            aria-label="Other scope"
          />
          <div className={styles.navRow}>
            <button type="button" className={styles.btnS} onClick={() => go(2)}>
              <ArrowLeft size={16} aria-hidden />
              Back
            </button>
            <button type="button" className={styles.btnP} onClick={() => go(4)}>
              <ArrowRight size={16} aria-hidden />
              Next: Requirements
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 4 ? (
        <StepPanel>
          <div className={styles.eyebrow}>Step 4 of 5</div>
          <h2 className={styles.title}>What do you need?</h2>
          <p className={styles.sub}>This shapes everything we show you next.</p>
          <div className={styles.modeCards}>
            <button
              type="button"
              className={cn(
                styles.mcard,
                styles.mcardSingle,
                st.mode === "single" && styles.mcardSelSingle,
              )}
              style={shakeMode ? { outline: "1.5px solid #e5232b" } : undefined}
              onClick={() => setSt((s) => ({ ...s, mode: "single" }))}
            >
              <div className={cn(styles.mcIco, styles.mcIcoSingle)}>
                <User size={20} className="text-[#D70416]" aria-hidden />
              </div>
              <div className={styles.mcTitle}>Individual expertise</div>
              <div className={styles.mcDesc}>
                One specialist for focused, single-discipline delivery. Best for targeted tasks.
              </div>
              <span className={cn(styles.mcTag, styles.mcTagSingle)}>Focused</span>
            </button>
            <button
              type="button"
              className={cn(
                styles.mcard,
                styles.mcardTeam,
                st.mode === "team" && styles.mcardSelTeam,
              )}
              style={shakeMode ? { outline: "1.5px solid #e5232b" } : undefined}
              onClick={() => setSt((s) => ({ ...s, mode: "team" }))}
            >
              <div className={cn(styles.mcIco, styles.mcIcoTeam)}>
                <Users size={20} className="text-[#2299D6]" aria-hidden />
              </div>
              <div className={styles.mcTitle}>Integrated team</div>
              <div className={styles.mcDesc}>
                A coordinated group for end-to-end, multi-discipline delivery.
              </div>
              <span className={cn(styles.mcTag, styles.mcTagTeam)}>Coordinated</span>
            </button>
          </div>
          <div className={styles.navRow}>
            <button type="button" className={styles.btnS} onClick={() => go(3)}>
              <ArrowLeft size={16} aria-hidden />
              Back
            </button>
            <button type="button" className={styles.btnP} onClick={requireMode}>
              <Cpu size={16} aria-hidden />
              Find my matches
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 5 ? <LoaderStepPanel onComplete={completeLoader} /> : null}

        {current === 6 ? (
        <StepPanel>
          <div className={styles.eyebrow}>
            {st.mode === "team" ? "Step 5 of 5 — Teams" : "Step 5 of 5 — Specialists"}
          </div>
          <h2 className={cn(styles.title, styles.titleSm)}>
            {st.mode === "team" ? "Select a team" : "Select a specialist"}
          </h2>
          <p className={cn(styles.sub, styles.subSm)}>Choose one profile that fits your project.</p>
          <div className={styles.profilesList}>
            {st.mode === "team"
              ? TEAM_PROFILES.map((p) => (
                  <ProfileCardTeam
                    key={p.id}
                    profile={p}
                    selected={st.profile === p.id}
                    animateBars={animateBars}
                    onSelect={() => setSt((s) => ({ ...s, profile: p.id }))}
                  />
                ))
              : SINGLE_PROFILES.map((p) => (
                  <ProfileCardSingle
                    key={p.id}
                    profile={p}
                    selected={st.profile === p.id}
                    animateBars={animateBars}
                    onSelect={() => setSt((s) => ({ ...s, profile: p.id }))}
                  />
                ))}
          </div>
          <div className={styles.navRow}>
            <button type="button" className={styles.btnS} onClick={() => go(4)}>
              <ArrowLeft size={16} aria-hidden />
              Back
            </button>
            <button
              type="button"
              className={styles.btnP}
              onClick={requireProfile}
              style={shakeProfile ? { outline: "1.5px solid #e5232b" } : undefined}
            >
              <ArrowRight size={16} aria-hidden />
              Select this setup
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 7 ? (
        <StepPanel>
          <div className={styles.ctaBlock}>
            <div className={styles.ctaT}>You&apos;ve selected your setup.</div>
            <div className={styles.ctaS}>
              Schedule a 45-minute session — we&apos;ll review your project, align on scope, and get
              your selected setup ready to start within 60 minutes.
            </div>
            <div className={styles.ctaBadge}>
              <Check size={13} aria-hidden />
              {selectedProfile?.name ?? "Your selection"}
            </div>
            <div className={styles.microTxt}>Align. Start.</div>
          </div>
          <div className={styles.bookingGrid}>
            <div>
              <div className={styles.sectionLbl}>
                <Calendar size={13} aria-hidden />
                Choose a date
              </div>
              <div className={styles.calGrid}>
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                  <div key={d} className={cn(styles.cd, styles.cdHdr)}>
                    {d}
                  </div>
                ))}
                {calendarCells.map((cell) =>
                  cell.day === undefined ? (
                    <div key={cell.key} className={cn(styles.cd, styles.cdEmpty)} />
                  ) : (
                    <button
                      key={cell.key}
                      type="button"
                      disabled={cell.past}
                      className={cn(
                        styles.cd,
                        cell.past && styles.cdPast,
                        !cell.past && styles.cdAv,
                        cell.today && styles.cdTd,
                        st.day === cell.day && styles.cdSd,
                      )}
                      onClick={() => !cell.past && setSt((s) => ({ ...s, day: cell.day! }))}
                    >
                      {cell.day}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div>
              {st.day !== null ? (
                <div>
                  <div className={styles.sectionLbl}>
                    <Clock size={13} aria-hidden />
                    Pick a time
                  </div>
                  <div className={styles.timeWrap}>
                    {BOOKING_TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={cn(styles.tsl, st.time === t && styles.tslSt)}
                        onClick={() => setSt((s) => ({ ...s, time: t }))}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {st.time !== null ? (
                <div>
                  <div className={styles.sectionLbl}>
                    <User size={13} aria-hidden />
                    Your details
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div>
                      <div className={styles.flbl}>Name</div>
                      <input
                        className={styles.finp}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        style={formError.name ? { borderColor: "#e5232b" } : undefined}
                      />
                    </div>
                    <div>
                      <div className={styles.flbl}>Email</div>
                      <input
                        className={styles.finp}
                        placeholder="you@company.com"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        style={formError.email ? { borderColor: "#e5232b" } : undefined}
                      />
                    </div>
                    <div>
                      <div className={styles.flbl}>Company (optional)</div>
                      <input
                        className={styles.finp}
                        placeholder="Firm name"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      />
                    </div>
                    <button
                      type="button"
                      className={styles.btnB}
                      style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
                      onClick={confirmBook}
                    >
                      <Check size={16} aria-hidden />
                      Confirm Session
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.navRow} style={{ marginTop: 14 }}>
            <button type="button" className={styles.btnS} onClick={() => go(6)}>
              <ArrowLeft size={16} aria-hidden />
              Change Selection
            </button>
          </div>
        </StepPanel>
        ) : null}

        {current === 8 ? (
        <StepPanel>
          <div className={styles.doneCenter}>
            <div className={styles.doneRing}>
              <Check size={28} className="text-[#2299D6]" aria-hidden />
            </div>
            <div className={styles.doneT}>You&apos;re all set!</div>
            <div className={styles.doneS}>
              Your 45-minute session is confirmed. We&apos;ll review your project, align on scope, and
              have your setup ready to go within 60 minutes.
            </div>
            <div className={styles.donePills}>
              {donePills.map((pill) => (
                <div key={pill} className={styles.donePill}>
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </StepPanel>
        ) : null}
      </div>
    </section>
  );
}
