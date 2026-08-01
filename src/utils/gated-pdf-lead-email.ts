import emailjs from "@emailjs/browser";

/** 60-minute team only — must never be used for gated PDF / landing downloads. */
export const SIXTY_MINUTES_TEAM_EMAILJS_IDS = {
  serviceId: "service_l2rd21s",
  templateId: "template_a20ff2v",
  publicKey: "7Zz8mADGX0_LQnMYH",
};

/** Blog / landing gated PDF user email. */
const GATED_PDF_EMAILJS = {
  serviceId:
    process.env.NEXT_PUBLIC_GATED_PDF_SERVICE_ID ||
    process.env.GATSBY_GATED_PDF_SERVICE_ID ||
    "service_dc1yhpj",
  templateId:
    process.env.NEXT_PUBLIC_GATED_PDF_TEMPLATE_ID ||
    process.env.GATSBY_GATED_PDF_TEMPLATE_ID ||
    "template_zuhm80w",
  publicKey:
    process.env.NEXT_PUBLIC_GATED_PDF_PUBLIC_KEY ||
    process.env.GATSBY_GATED_PDF_PUBLIC_KEY ||
    "9tqkzFBrsFIAvsU_H",
};

function isSixtyMinutesEmailJsConfig({
  serviceId,
  templateId,
  publicKey,
}: {
  serviceId: string;
  templateId: string;
  publicKey: string;
}) {
  return (
    serviceId === SIXTY_MINUTES_TEAM_EMAILJS_IDS.serviceId ||
    templateId === SIXTY_MINUTES_TEAM_EMAILJS_IDS.templateId ||
    publicKey === SIXTY_MINUTES_TEAM_EMAILJS_IDS.publicKey
  );
}

function assertGatedPdfEmailConfig({
  serviceId,
  templateId,
  publicKey,
}: {
  serviceId: string;
  templateId: string;
  publicKey: string;
}) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Gated PDF EmailJS is not configured.");
  }
  if (isSixtyMinutesEmailJsConfig({ serviceId, templateId, publicKey })) {
    throw new Error("Gated PDF email cannot use 60-minute team EmailJS credentials.");
  }
}

export function sendGatedPdfLeadEmail({
  email,
  firstName = "",
  lastName = "",
  downloadUrl,
  pageTitle,
  source,
}: {
  email: string;
  firstName?: string;
  lastName?: string;
  downloadUrl?: string;
  pageTitle?: string;
  source?: string;
}) {
  const { serviceId, templateId, publicKey } = GATED_PDF_EMAILJS;
  assertGatedPdfEmailConfig({ serviceId, templateId, publicKey });

  // Reset EmailJS init so a prior /60-minutes-team/ visit cannot leak credentials.
  emailjs.init(publicKey);

  return emailjs.send(
    serviceId,
    templateId,
    {
      first_name: firstName,
      last_name: lastName,
      email,
      Source: source || (typeof window !== "undefined" ? window.location.href : ""),
      page: pageTitle || "",
      download_link: downloadUrl || "",
    },
    publicKey,
  );
}
