"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import Form from "react-bootstrap/Form";

/** Interactive Tool MOFU — Web-to-Lead (matches Zoho embed webform6261408000134679330). */
const FORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";
const FORM_ID = "webform6261408000134679330";
const FORM_NAME = "WebToLeads6261408000134679330";

const ANALYTICS_SCRIPT_ID = "wf_anal_calc_mofu";
const ANALYTICS_SRC =
  "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=a30bdfec35ed77de7758fec94a1a868f6b8717c89a20f762ed7c9ebbb70e7e2e0207a9ba4b72230078a160d360490757gid16adc045929c28eaa1cfda49f1af69d5c4d4fcbf72b7fd8c318592275807b072gid21122007a727b7db7dd3fafa763210e29ff2fb2a6c594cf08a3ec9837113de1bgidd9f871bc0278e357767fc2a9a7154804fe9f2938a663984e402a187ff6baf269&tw=9190f528e0cc9d33990e04132eee8c04374cb10b2117dfa8a9dd8dcef594d747";

const XNQSJSDP = "fbe6d5df0b9def29937c9ad7c460c5de17c969745f06ff77f7b158be3db8ef6b";
const XMIWTLD =
  "da76d422a5a874a4158532fdab77d4b4f37e07e6116bae42aa33cf6f1f091f929c4074c4ce62c0c8e3ddb9f02be1765c";

function trimVal(value: unknown) {
  return String(value ?? "").replace(/^\s+|\s+$/g, "");
}

function validateEmail(emailVal: unknown) {
  const v = trimVal(emailVal);
  if (!v.length) return false;
  const atpos = v.indexOf("@");
  const dotpos = v.lastIndexOf(".");
  return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= v.length);
}

function asFormControl(el: Element | RadioNodeList | null): HTMLInputElement | null {
  if (!el || !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) {
    return null;
  }
  return el as HTMLInputElement;
}

/** Mirrors Zoho checkMandatory6261408000134679330 (field order matches mndFileds / fldLangVal). */
function validateToolForm(form: HTMLFormElement) {
  const pairs: [string, string][] = [
    ["First Name", "First Name"],
    ["Last Name", "Last Name"],
    ["LEADCF26", "Work Email"],
    ["LEADCF22", "Contact Number"],
  ];
  for (let i = 0; i < pairs.length; i += 1) {
    const [field, label] = pairs[i];
    const el = asFormControl(form.elements.namedItem(field));
    if (!el) continue;
    if (!trimVal(el.value).length) {
      window.alert(`${label} cannot be empty.`);
      el.focus();
      return false;
    }
  }
  const emailEl = asFormControl(form.elements.namedItem("LEADCF26"));
  if (emailEl && !validateEmail(emailEl.value)) {
    window.alert("Please enter a valid email address. ");
    emailEl.focus();
    return false;
  }
  return true;
}

async function postWebToLead(form: HTMLFormElement) {
  const fd = new FormData(form);
  if (typeof window !== "undefined") {
    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.get("service") === "smarturl") {
      fd.append("service", urlparams.get("service")!);
    }
  }

  const res = await fetch(FORM_ACTION, {
    method: "POST",
    body: fd,
    mode: "cors",
    credentials: "omit",
    cache: "no-store",
  });
  const text = await res.text();
  let message: string | null = null;
  try {
    const data = JSON.parse(text) as { actionvalue?: string };
    if (data && typeof data.actionvalue === "string") message = data.actionvalue;
  } catch {
    /* Zoho may return HTML or plain text */
  }
  if (!message && text) {
    const trimmed = text.trim();
    if (trimmed.length > 0 && trimmed.length < 400) message = trimmed;
  }
  return {
    ok: res.ok,
    message: message || "Thank you — your details were submitted successfully.",
  };
}

export type ZohoWebToLeadToolPageProps = {
  onSuccess?: (message?: string) => void;
  onError?: (message?: string) => void;
};

export function ZohoWebToLeadToolPage({ onSuccess, onError }: ZohoWebToLeadToolPageProps) {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    if (document.getElementById(ANALYTICS_SCRIPT_ID)) return undefined;
    const script = document.createElement("script");
    script.id = ANALYTICS_SCRIPT_ID;
    script.src = ANALYTICS_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {};
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (!validateToolForm(form)) return;

      setSubmitting(true);
      try {
        if (typeof window !== "undefined" && window._wfa_track?.wfa_submit) {
          window._wfa_track.wfa_submit(e.nativeEvent || e);
        }
      } catch {
        /* optional Zoho analytics hook */
      }

      try {
        const { ok, message } = await postWebToLead(form);
        if (ok) {
          form.reset();
          onSuccess?.(message);
        } else {
          onError?.("Something went wrong. Please try again.");
        }
      } catch {
        onError?.("Network error. Please check your connection and try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [onSuccess, onError],
  );

  return (
    <Form
      id={FORM_ID}
      name={FORM_NAME}
      className="mch-capacity-form"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
    >
      <input type="text" style={{ display: "none" }} name="xnQsjsdp" defaultValue={XNQSJSDP} readOnly />
      <input type="hidden" name="zc_gad" id="zc_gad_calc_mofu" defaultValue="" />
      <input type="text" style={{ display: "none" }} name="xmIwtLD" defaultValue={XMIWTLD} readOnly />
      <input type="text" style={{ display: "none" }} name="actionType" defaultValue="TGVhZHM=" readOnly />
      <input type="text" style={{ display: "none" }} name="returnURL" defaultValue="null" readOnly />

      <div className="mch-wtl-grid">
        <Form.Group className="mch-wtl-field mb-0" controlId="First_Name">
          <Form.Label className="mch-wtl-field-label" htmlFor="First_Name">
            First Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            id="First_Name"
            type="text"
            name="First Name"
            maxLength={40}
            autoComplete="given-name"
            placeholder="First name"
            aria-required="true"
            aria-label="First Name"
          />
        </Form.Group>

        <Form.Group className="mch-wtl-field mb-0" controlId="Last_Name">
          <Form.Label className="mch-wtl-field-label" htmlFor="Last_Name">
            Last Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            id="Last_Name"
            type="text"
            name="Last Name"
            maxLength={80}
            autoComplete="family-name"
            placeholder="Last name"
            aria-required="true"
            aria-label="Last Name"
          />
        </Form.Group>

        <Form.Group className="mch-wtl-field mb-0" controlId="LEADCF22">
          <Form.Label className="mch-wtl-field-label" htmlFor="LEADCF22">
            Contact Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            id="LEADCF22"
            type="text"
            name="LEADCF22"
            maxLength={30}
            autoComplete="tel"
            placeholder="Phone number"
            aria-required="true"
            aria-label="Contact number"
          />
        </Form.Group>

        <Form.Group className="mch-wtl-field mb-0" controlId="LEADCF26">
          <Form.Label className="mch-wtl-field-label" htmlFor="LEADCF26">
            Work Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            id="LEADCF26"
            type="text"
            name="LEADCF26"
            maxLength={100}
            autoComplete="email"
            placeholder="you@company.com"
            aria-required="true"
            aria-label="Work email"
            inputMode="email"
          />
        </Form.Group>
      </div>

      <input
        type="text"
        style={{ display: "none" }}
        name="aG9uZXlwb3Q"
        defaultValue=""
        readOnly
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mch-capacity-actions mch-wtl-submit-row">
        <button type="submit" className="mch-capacity-submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit"}
        </button>
      </div>
    </Form>
  );
}

export default ZohoWebToLeadToolPage;
