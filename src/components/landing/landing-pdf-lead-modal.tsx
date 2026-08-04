"use client";

import React, { useRef, useState, type ReactElement } from "react";
import { Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { sendGatedPdfLeadEmail } from "@/utils/gated-pdf-lead-email";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
});

type LandingPdfLeadModalProps = {
  title: string;
  downloadUrl: string;
  trigger: ReactElement<{ onClick?: (e: React.MouseEvent) => void }>;
  onBeforeOpen?: () => void;
  neutralModalShell?: boolean;
};

export default function LandingPdfLeadModal({
  title,
  downloadUrl,
  trigger,
  onBeforeOpen,
  neutralModalShell,
}: LandingPdfLeadModalProps) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const submitLockRef = useRef(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async ({ email }, { resetForm }) => {
      if (submitLockRef.current) return;
      submitLockRef.current = true;
      setLoading(true);
      setSuccess("");
      try {
        await sendGatedPdfLeadEmail({
          email,
          downloadUrl,
          pageTitle: title,
        });
        setSuccess("Thanks! Your download is opening.");
        resetForm();
        if (downloadUrl) window.open(downloadUrl, "_blank", "noopener,noreferrer");
        setTimeout(() => setShow(false), 900);
      } catch {
        setSuccess("Something went wrong. Please try again.");
      } finally {
        submitLockRef.current = false;
        setLoading(false);
      }
    },
  });

  const handleOpen = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (typeof onBeforeOpen === "function") onBeforeOpen();
    setShow(true);
  };

  return (
    <>
      {React.isValidElement(trigger) ? React.cloneElement(trigger, { onClick: handleOpen }) : null}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className={`landing-pdf-modal${neutralModalShell ? " landing-pdf-modal--neutral-shell" : ""}`}
      >
        <Modal.Body>
          <button type="button" onClick={() => setShow(false)} aria-label="Close" className="top-closebtn text-dark">
            <span className="icon fa fa-times" />
          </button>
          <div className="landing-pdf-modal__head">
            <h3>{title}</h3>
            <p>Enter your email to access the PDF.</p>
          </div>
          <Form className="landing-pdf-modal__form" onSubmit={formik.handleSubmit}>
            <Form.Group className="landing-pdf-modal__field">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>
            <PrimaryCtaButton type="submit" fullWidth disabled={loading} className="landing-pdf-modal__submit">
              {loading ? "Submitting..." : "Submit"}
            </PrimaryCtaButton>
            {success ? <p className="landing-pdf-modal__msg">{success}</p> : null}
          </Form>
        </Modal.Body>
      </Modal>
      <style>{`
        .landing-pdf-modal--neutral-shell .modal-content{
          background-color:#fff!important;
          border:none!important;
          box-shadow:none!important;
          border-radius:18px!important;
        }
        .landing-pdf-modal--neutral-shell .modal-content .form-label{
          display:block!important;
        }
        .landing-pdf-modal .modal-dialog{
          max-width:440px;
          margin-left:auto;
          margin-right:auto;
        }
        .landing-pdf-modal{
          border-radius:18px;border:1px solid rgba(17,24,39,.08);box-shadow:0 24px 60px rgba(17,24,39,.2)
        }
        .landing-pdf-modal .modal-body{
          position:relative;
          padding:40px 32px 36px;
          background:#fff;
          border-radius:24px;
        }
        .landing-pdf-modal .top-closebtn{
          position:absolute!important;
          top:14px!important;
          right:14px!important;
          left:auto!important;
          z-index:1056;
          background:#fff;
          border:none;
          border-radius:50%;
          width:36px;
          height:36px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:16px;
          box-shadow:0 0 8px rgba(0,0,0,.15);
          cursor:pointer;
        }
        .landing-pdf-modal .top-closebtn:hover{
          background:#f1f1f1;
        }
        .landing-pdf-modal__head{
          text-align:center;
          margin-bottom:28px;
          padding-right:24px;
        }
        .landing-pdf-modal__head h3{
          font-size:1.5rem;
          line-height:1.3;
          margin:0 0 10px;
          color:#111827;
        }
        .landing-pdf-modal__head p{
          margin:0;
          color:#6b7280;
          font-size:.95rem;
          line-height:1.5;
        }
        .landing-pdf-modal__form{
          display:flex;
          flex-direction:column;
          gap:20px;
        }
        .landing-pdf-modal__field{
          margin:0;
        }
        .landing-pdf-modal .form-label{
          display:block;
          margin-bottom:8px;
          font-weight:600;
          color:#374151;
          font-size:.9rem;
        }
        .landing-pdf-modal .form-control{
          min-height:48px;
          border:1.4px solid #e5e7eb;
          border-radius:10px;
          padding:12px 14px;
          font-size:.95rem;
        }
        .landing-pdf-modal .form-control:focus{border-color:#D70416;box-shadow:0 0 0 3px rgba(215,4,22,.12)}
        .landing-pdf-modal__submit.primary-cta{
          width:100%;
          min-height:52px;
          margin-top:4px;
          isolation:isolate;
          overflow:hidden;
          background-color:#d70416!important;
          border-color:#d70416!important;
          backdrop-filter:blur(50px);
        }
        .landing-pdf-modal__submit.primary-cta .primary-cta-blobs{
          transform:translate(-32px,-198px);
        }
        .landing-pdf-modal__submit.primary-cta .primary-cta-label{
          color:#fff!important;
          transition:color .65s ease .2s;
        }
        .landing-pdf-modal__submit.primary-cta:hover:not(:disabled),
        .landing-pdf-modal__submit.primary-cta:focus-visible:not(:disabled){
          background-color:#fff!important;
          border-color:#d70416!important;
        }
        .landing-pdf-modal__submit.primary-cta:hover:not(:disabled) .primary-cta-blobs,
        .landing-pdf-modal__submit.primary-cta:focus-visible:not(:disabled) .primary-cta-blobs{
          transform:translate(-422px,22px);
        }
        .landing-pdf-modal__submit.primary-cta:hover:not(:disabled) .primary-cta-label,
        .landing-pdf-modal__submit.primary-cta:focus-visible:not(:disabled) .primary-cta-label{
          color:#d70416!important;
        }
        .landing-pdf-modal__submit.primary-cta:disabled{
          opacity:.7;
          cursor:not-allowed;
        }
        .landing-pdf-modal__msg{
          margin:4px 0 0;
          font-size:.9rem;
          line-height:1.45;
          color:#6b7280;
          text-align:center;
        }
      `}</style>
    </>
  );
}
