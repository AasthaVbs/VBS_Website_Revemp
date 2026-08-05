import emailjs from "@emailjs/browser";

const HEADER_BOOK_MEETING_URL =
  "https://booknow.virtualbuildingstudio.com/portal-embed#/4689125000003492031";

function escapeHtml(s: unknown): string {
  if (s == null || s === "") return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain text for EmailJS {{message}}. */
export function formatPipelineDiagnosticEmailFull(_payload: unknown): string {
  void _payload;
  return "";
}

const RED = "#D70416";
const BLACK = "#000000";
const FONT = "'Segoe UI',Arial,Helvetica,sans-serif";

function clampPct(n: unknown): number {
  const x = Number(n);
  if (Number.isNaN(x)) return 0;
  return Math.max(0, Math.min(100, Math.round(x)));
}

type DiagnosisBlock = {
  tier?: string;
  headline?: string;
  copy?: string;
};

type InterventionBlock = {
  title?: string;
  copy?: string;
};

type CtaCopy = {
  heading?: string;
  copy?: string;
};

type SectionDef = {
  id: number;
  title: string;
  diagnosis: string;
};

type EmailBuildPayload = {
  recipientName?: string;
  fullName?: string;
  totalScore?: number | string;
  diagnosis?: DiagnosisBlock;
  intervention?: InterventionBlock;
  sectionScores?: Record<number | string, number>;
  sections?: SectionDef[];
  highestSection?: number;
  isAllSectionScoresEqual?: boolean;
  ctaCopy?: CtaCopy;
  firm?: string;
  role?: string;
};

type EmailJsConfig = {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
};

type SendEmailPayload = {
  toEmail?: string;
  recipientName?: string;
  companyName?: string;
  diagnosticPlainText?: string;
  diagnosticHtml?: string;
  diagnosticTemplateParams?: Record<string, string>;
};

/** Nested track + red fill (matches diagnosis-email-template bar markup for Outlook/Gmail). */
function nestedRedBarHtml(pct: number, marginTop = "18px"): string {
  const w = clampPct(pct);
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:${marginTop};"><tr><td style="background-color:#eaeaea;border-radius:100px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="8" width="${w}%" style="background-color:${RED};border-radius:100px;line-height:8px;font-size:0;height:8px;">&nbsp;</td><td height="8" style="line-height:8px;font-size:0;height:8px;">&nbsp;</td></tr></table></td></tr></table>`;
}

function highestBadgeHtml(): string {
  return `<span style="display:inline-block;background-color:${RED};color:#ffffff;font-size:9px;font-weight:700;letter-spacing:0.10em;padding:2px 8px;border-radius:100px;margin-left:6px;vertical-align:middle;text-transform:uppercase;">Highest</span>`;
}

function sectionBlockHtml(
  section: SectionDef,
  sectionScores: Record<number | string, number> | undefined,
  highestSection: number | undefined,
  isAllSectionScoresEqual: boolean | undefined,
): string {
  const score = sectionScores?.[section.id] ?? 0;
  const isHighest = !isAllSectionScoresEqual && section.id === highestSection;
  const sub = escapeHtml(section.diagnosis.replace(/^Diagnoses ·\s*/i, ""));
  const title = escapeHtml(section.title);
  const pct = clampPct((score / 12) * 100);
  const badge = isHighest ? highestBadgeHtml() : "";
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #e5e5e5;"><tr><td style="padding:14px 0 6px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td valign="middle" style="font-family:${FONT};"><p style="margin:0;font-size:15px;font-weight:600;color:${BLACK};line-height:20px;">${title}${badge}</p><p style="margin:3px 0 0;font-size:12px;color:#666666;line-height:16px;">${sub}</p></td><td align="right" valign="middle" width="70" style="font-family:${FONT};font-size:16px;font-weight:700;color:${BLACK};white-space:nowrap;">${score}<span style="color:#999999;font-weight:500;font-size:13px;"> / 12</span></td></tr></table></td></tr><tr><td style="padding:6px 0 14px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#eaeaea;border-radius:100px;"><tr><td height="8" width="${pct}%" style="background-color:${RED};border-radius:100px;line-height:8px;font-size:0;height:8px;">&nbsp;</td><td height="8" style="line-height:8px;font-size:0;height:8px;">&nbsp;</td></tr></table></td></tr></table>`;
}

/**
 * Scalar fields for EmailJS templates that use {{total_score}}, {{section_1_pct}}, etc.
 * (Same numbers as buildPipelineDiagnosticEmailHtml.)
 */
export function buildPipelineDiagnosticEmailTemplateParams({
  recipientName,
  totalScore,
  diagnosis,
  intervention,
  sectionScores,
  sections,
  highestSection,
  isAllSectionScoresEqual,
  ctaCopy,
  firm,
  role,
}: EmailBuildPayload): Record<string, string> {
  const ts = Number(totalScore) || 0;
  const first =
    String(recipientName || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)[0] || "there";

  const out: Record<string, string> = {
    first_name: first,
    total_score: String(ts),
    total_score_pct: String(clampPct((ts / 36) * 100)),
    diagnosis_tier: diagnosis?.tier || "",
    diagnosis_headline: diagnosis?.headline || "",
    diagnosis_copy: diagnosis?.copy || "",
    intervention_title: intervention?.title || "",
    intervention_copy: intervention?.copy || "",
    cta_heading: ctaCopy?.heading || "",
    cta_copy: ctaCopy?.copy || "",
    company_firm: firm || "",
    role_title: role || "",
  };

  (sections || []).forEach((s, i) => {
    const n = i + 1;
    const score = sectionScores?.[s.id] ?? 0;
    const isH = !isAllSectionScoresEqual && s.id === highestSection;
    const pct = clampPct((score / 12) * 100);
    out[`section_${n}_title`] = s.title;
    out[`section_${n}_sub`] = String(s.diagnosis || "").replace(/^Diagnoses ·\s*/i, "");
    out[`section_${n}_score`] = String(score);
    out[`section_${n}_pct`] = String(pct);
    out[`section_${n}_bar_width`] = String(pct);
    out[`section_${n}_flag_display`] = isH ? "inline-block" : "none";
    out[`section_${n}_badge_html`] = isH ? highestBadgeHtml() : "";
  });

  return out;
}

/**
 * HTML fragment for EmailJS {{{html_results}}} — same layout as diagnosis-email-template:
 * big total score, nested red progress bar, diagnosis card, section rows with scores + red bars.
 */
export function buildPipelineDiagnosticEmailHtml({
  totalScore,
  diagnosis,
  intervention,
  sectionScores,
  sections,
  highestSection,
  isAllSectionScoresEqual,
  ctaCopy,
  firm,
  role,
}: EmailBuildPayload): string {
  const ts = Number(totalScore) || 0;
  const totalPct = clampPct((ts / 36) * 100);
  const tier = escapeHtml(diagnosis?.tier || "");
  const headline = escapeHtml(diagnosis?.headline || "");
  const copy = escapeHtml(diagnosis?.copy || "");
  const intTitle = escapeHtml(intervention?.title || "");
  const intCopy = escapeHtml(intervention?.copy || "");
  const ctaH = escapeHtml(ctaCopy?.heading || "");
  const ctaP = escapeHtml(ctaCopy?.copy || "");

  const secRows = (sections || [])
    .map((s) => sectionBlockHtml(s, sectionScores, highestSection, isAllSectionScoresEqual))
    .join("");

  const firmBlock =
    firm || role
      ? `<p style="margin:16px 0 0;font-family:${FONT};font-size:13px;line-height:1.55;color:#555555;">${firm ? `<strong style="color:${BLACK};">Firm</strong> · ${escapeHtml(firm)}<br/>` : ""}${role ? `<strong style="color:${BLACK};">Role</strong> · ${escapeHtml(role)}` : ""}</p>`
      : "";

  return `
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-family:${FONT};">
  <tr>
    <td style="padding:24px 32px 0;" class="px-mob">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td class="stack-col score-cell" valign="top" width="210" style="width:210px;padding-right:16px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#ffffff;border:2px solid ${BLACK};border-radius:12px;">
              <tr>
                <td align="center" style="padding:24px 16px;">
                  <p style="margin:0;font-family:${FONT};font-size:56px;line-height:56px;font-weight:700;color:${RED};letter-spacing:-0.02em;">${ts}</p>
                  <p style="margin:4px 0 0;font-family:${FONT};font-size:13px;color:#666666;font-weight:500;">out of 36</p>
                  ${nestedRedBarHtml(totalPct, "18px")}
                  <p style="margin:14px 0 0;font-family:${FONT};font-size:10px;font-weight:700;letter-spacing:0.18em;color:${RED};text-transform:uppercase;">Total Score</p>
                </td>
              </tr>
            </table>
          </td>
          <td class="stack-col" valign="top">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#ffffff;border:2px solid ${RED};border-radius:12px;">
              <tr>
                <td style="padding:22px;">
                  <p style="margin:0 0 6px;font-family:${FONT};font-size:10px;font-weight:700;letter-spacing:0.20em;color:${RED};text-transform:uppercase;">Your Diagnosis</p>
                  <p style="margin:0 0 10px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.10em;color:#666666;text-transform:uppercase;">${tier}</p>
                  <h2 style="margin:0 0 8px;font-family:${FONT};font-size:20px;line-height:26px;font-weight:600;color:${BLACK};">${headline}</h2>
                  <p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:#555555;">${copy}</p>
                  ${firmBlock}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 32px 0;" class="px-mob">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#ffffff;border:1px solid #e5e5e5;border-radius:12px;">
        <tr>
          <td style="padding:20px 22px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-family:${FONT};font-size:13px;font-weight:700;letter-spacing:0.04em;color:${BLACK};text-transform:uppercase;padding-bottom:16px;">Section Breakdown</td>
                <td align="right" class="hide-mob" style="font-family:${FONT};font-size:11px;color:#666666;padding-bottom:16px;">Highest = your highest-leverage intervention</td>
              </tr>
            </table>
            ${secRows}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:18px 32px 0;" class="px-mob">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:${BLACK};border-radius:12px;">
        <tr>
          <td style="padding:24px 26px;">
            <p style="margin:0 0 8px;font-family:${FONT};font-size:10px;font-weight:700;letter-spacing:0.18em;color:${RED};text-transform:uppercase;">Where You Intervene First</p>
            <h3 style="margin:0 0 10px;font-family:${FONT};font-size:20px;line-height:26px;font-weight:600;color:#ffffff;">${intTitle}</h3>
            <p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:#cccccc;">${intCopy}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:18px 32px 0;" class="px-mob">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:${RED};border-radius:12px;">
        <tr>
          <td align="center" style="padding:26px;">
            <h3 style="margin:0 0 8px;font-family:${FONT};font-size:20px;line-height:26px;font-weight:600;color:#ffffff;">${ctaH}</h3>
            <p style="margin:0 0 18px;font-family:${FONT};font-size:14px;line-height:22px;color:#ffe1e3;">${ctaP}</p>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
              <tr>
                <td style="border-radius:6px;background-color:#ffffff;">
                  <a href="${HEADER_BOOK_MEETING_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:14px 28px;font-family:${FONT};font-size:14px;font-weight:700;color:${RED};text-decoration:none;border-radius:6px;letter-spacing:0.02em;">Book the 30-Minute Call &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim();
}

/** Send diagnostic email via EmailJS. Merges diagnosticTemplateParams (per-field) with html_results. */
export async function sendPipelineDiagnosticResultEmail(
  config: EmailJsConfig,
  { toEmail, recipientName, companyName, diagnosticPlainText, diagnosticHtml, diagnosticTemplateParams }: SendEmailPayload,
) {
  const logPrefix = "[Pipeline Diagnostic EmailJS]";
  const { serviceId, templateId, publicKey } = config || {};

  if (!toEmail?.trim()) {
    console.log(logPrefix, "Not sent: missing recipient email (toEmail).");
    return { sent: false, reason: "missing_email" };
  }
  if (!templateId) {
    console.log(
      logPrefix,
      "Not sent: no EmailJS template id. Set NEXT_PUBLIC_PIPELINE_DIAG_TEMPLATE_ID or GATSBY_PIPELINE_DIAG_TEMPLATE_ID (or TEMPLATE_ID fallbacks).",
    );
    return { sent: false, reason: "missing_template_id" };
  }
  if (!serviceId) {
    console.log(
      logPrefix,
      "Not sent: missing service id. Set NEXT_PUBLIC_PIPELINE_DIAG_SERVICE_ID or GATSBY_PIPELINE_DIAG_SERVICE_ID.",
    );
    return { sent: false, reason: "missing_service_id" };
  }
  if (!publicKey) {
    console.log(
      logPrefix,
      "Not sent: missing public key. Set NEXT_PUBLIC_PIPELINE_DIAG_PUBLIC_KEY or GATSBY_PIPELINE_DIAG_PUBLIC_KEY.",
    );
    return { sent: false, reason: "missing_public_key" };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        email: toEmail.trim(),
        to_email: toEmail.trim(),
        name: recipientName || "",
        company: companyName || "",
        message: diagnosticPlainText || "",
        html_results: diagnosticHtml || "",
        page: "Pipeline Health Diagnostic",
        ...(diagnosticTemplateParams && typeof diagnosticTemplateParams === "object" ? diagnosticTemplateParams : {}),
      },
      publicKey,
    );
    console.log(logPrefix, "Email sent successfully to", toEmail.trim());
    return { sent: true };
  } catch (err: unknown) {
    const e = err as { text?: string; message?: string };
    console.warn(logPrefix, "Send failed:", e?.text || e?.message || err);
    return { sent: false, reason: "emailjs_error", error: err };
  }
}
