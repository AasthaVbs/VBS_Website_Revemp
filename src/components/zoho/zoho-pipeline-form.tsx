"use client";

import React, { useEffect, useMemo, useState } from "react";

const ZOHO_FORM_ACTION = "https://crm.zoho.com/crm/WebToLeadForm";
/** Web-to-Lead + analytics from Zoho embed `webform6261408000135419263` / `WebToLeads6261408000135419263`. */
const ZOHO_ANALYTICS_SRC =
  "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=3958ba524c4151f67c1ac01e125e72ced35c66df55d98fcf59adb9fae6fd948fd28e6745b0d57e41b18ac67fac859250gidec127bf7cd2ac346b396038dc9574f3731e248b5faa0be3630ae2695471e3631gide1d3a29bfc029da925ad603e66df8e7ac3a1ac3fff31d1b8023e70496216e91dgida5b598e5d520286586b3d1e3a4cb4394c31ae5f40469fd298ce817ba8d939837&tw=41e8d72119440258c2e71f7327308a18fa29d82f7688511efd84fee428c43a24";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const initialValues = {
  firstName: "",
  lastName: "",
  workEmail: "",
  contactNumber: "",
  company: "",
  role: "",
};

type FormValues = typeof initialValues;
type FormErrors = Partial<Record<keyof FormValues, string>>;

export type ZohoPipelineLeadData = {
  name: string;
  email: string;
  phone: string;
  firm: string;
  role: string;
};

type ZohoPipelineFormProps = {
  onSuccess?: (data: ZohoPipelineLeadData) => void;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Digits and common phone formatting (matches Zoho contact-style fields). */
const phoneRegex = /^[\d\s\-+().]{7,30}$/;

export function ZohoPipelineForm({ onSuccess }: ZohoPipelineFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [splashMsg, setSplashMsg] = useState("");
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    if (document.getElementById("wf_anal_pipeline")) return undefined;
    const script = document.createElement("script");
    script.id = "wf_anal_pipeline";
    script.src = ZOHO_ANALYTICS_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {};
  }, []);

  const payload = useMemo(
    () => ({
      "First Name": values.firstName.trim(),
      "Last Name": values.lastName.trim(),
      LEADCF26: values.workEmail.trim(),
      LEADCF22: values.contactNumber.trim(),
      Company: values.company.trim(),
      Description: values.role.trim(),
      xnQsjsdp: "27ff8dbdf7b26457fe025cf2e0f464d0bd0c293e51afcb512073a2fe780bab19",
      zc_gad: "",
      xmIwtLD:
        "64c5434a59c307816ce5f9ece31b65b85a2011c33543ff202232ecbe48d41aec3f1ca970c48962feaa1cb04ba0338955",
      actionType: "TGVhZHM=",
      returnURL: "null",
      aG9uZXlwb3Q: "",
    }),
    [values],
  );

  const handleChange = (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = e.target.value;
    setValues((prev) => ({ ...prev, [key]: next }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!payload["First Name"]) nextErrors.firstName = "First Name cannot be empty.";
    if (!payload["Last Name"]) nextErrors.lastName = "Last Name cannot be empty.";
    if (!payload.LEADCF26) {
      nextErrors.workEmail = "Work Email cannot be empty.";
    } else if (!emailRegex.test(payload.LEADCF26)) {
      nextErrors.workEmail = "Please enter a valid email address.";
    }
    if (!payload.LEADCF22) {
      nextErrors.contactNumber = "Contact Number cannot be empty.";
    } else if (!phoneRegex.test(payload.LEADCF22)) {
      nextErrors.contactNumber = "Please enter a valid contact number.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setShowLoader(true);

    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

    let actionValue = "Form submitted successfully.";
    try {
      const response = await fetch(ZOHO_FORM_ACTION, {
        method: "POST",
        body: formData,
      });

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await response.json();
        if (data?.actionvalue) actionValue = data.actionvalue;
      } else {
        const text = await response.text();
        if (!response.ok && text) actionValue = "Something went wrong. Please try again.";
      }

      await wait(1000);
      setShowLoader(false);
      setSplashMsg(actionValue);
      setShowSplash(true);

      await wait(1200);
      setShowSplash(false);
      setValues(initialValues);
      onSuccess?.({
        name: `${payload["First Name"]} ${payload["Last Name"]}`.trim(),
        email: payload.LEADCF26,
        phone: payload.LEADCF22,
        firm: payload.Company,
        role: payload.Description,
      });
    } catch {
      await wait(1000);
      setShowLoader(false);
      setSplashMsg("An error occurred. Please try again.");
      setShowSplash(true);
      setTimeout(() => setShowSplash(false), 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="zoho-pipeline-form-wrap">
      {showLoader ? (
        <div className="zpl-loader-overlay" aria-live="polite">
          <div className="zpl-loader" />
        </div>
      ) : null}

      {showSplash ? (
        <div className="wf_customMessageBox">
          <div className="wf_customCircle">
            <div className="wf_customCheckMark" />
          </div>
          <span>{splashMsg}</span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate>
        <div className="zpl-two-col">
          <div className={`form-row ${errors.firstName ? "has-error" : ""}`}>
            <label htmlFor="zpl_first_name">First Name</label>
            <input
              id="zpl_first_name"
              type="text"
              value={values.firstName}
              onChange={handleChange("firstName")}
              className={errors.firstName ? "error" : ""}
            />
            <p className="err-msg">{errors.firstName || ""}</p>
          </div>

          <div className={`form-row ${errors.lastName ? "has-error" : ""}`}>
            <label htmlFor="zpl_last_name">Last Name</label>
            <input
              id="zpl_last_name"
              type="text"
              value={values.lastName}
              onChange={handleChange("lastName")}
              className={errors.lastName ? "error" : ""}
            />
            <p className="err-msg">{errors.lastName || ""}</p>
          </div>
        </div>

        <div className={`form-row ${errors.workEmail ? "has-error" : ""}`}>
          <label htmlFor="zpl_work_email">Work Email</label>
          <input
            id="zpl_work_email"
            type="email"
            value={values.workEmail}
            onChange={handleChange("workEmail")}
            className={errors.workEmail ? "error" : ""}
          />
          <p className="err-msg">{errors.workEmail || ""}</p>
        </div>

        <div className={`form-row ${errors.contactNumber ? "has-error" : ""}`}>
          <label htmlFor="zpl_contact_number">Contact Number</label>
          <input
            id="zpl_contact_number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.contactNumber}
            onChange={handleChange("contactNumber")}
            className={errors.contactNumber ? "error" : ""}
            maxLength={30}
          />
          <p className="err-msg">{errors.contactNumber || ""}</p>
        </div>

        <div className="form-row">
          <label htmlFor="zpl_firm_name">Company Name</label>
          <input
            id="zpl_firm_name"
            type="text"
            value={values.company}
            onChange={handleChange("company")}
          />
        </div>

        <div className="form-row">
          <label htmlFor="zpl_role">Your Role</label>
          <textarea
            id="zpl_role"
            rows={2}
            value={values.role}
            onChange={handleChange("role")}
            aria-multiline="true"
          />
        </div>

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get Your Diagnosis"}
          <svg
            className="arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ZohoPipelineForm;
