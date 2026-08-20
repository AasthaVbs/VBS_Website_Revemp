"use client";

import emailjs from "@emailjs/browser";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import * as yup from "yup";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";

import "react-phone-input-2/lib/bootstrap.css";

/** Contact-form EmailJS fallbacks (matches Gatsby SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY). */
const EMAILJS_FALLBACKS = {
  serviceId: "service_9wb2zcp",
  templateId: "template_n60yl3r",
  publicKey: "AS5XWYUjScR53EFRu",
};

type ServicesUsaContactValues = {
  full_name: string;
  email: string;
  mobile_number: string;
  project_type: string;
  message: string;
};

const validationSchema = yup.object().shape({
  full_name: yup
    .string()
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Name is invalid"),
  email: yup.string().required("Work Email is required").email("Work Email is invalid"),
  mobile_number: yup.string().required("Phone Number is required").min(4, "Phone number is invalid"),
  project_type: yup.string().required("Project Type is required"),
  message: yup.string().required("Message is required"),
});

type ServicesUsaContactProps = {
  buttonText?: string;
  headingText?: string;
  /** Split title for Figma glass hero: "Get a " + "Drafting Estimate" */
  headingLead?: string;
  headingAccent?: string;
  /** `glass` = Figma frosted panel (ads USA hero). `default` = legacy blue form. */
  variant?: "default" | "glass";
  className?: string;
};

function FieldError({ show, message }: { show?: boolean; message?: string }) {
  if (!show || !message) return null;
  return <p className="services-usa-contact__error">{message}</p>;
}

/**
 * Gatsby `services-usa-contact.js` — EmailJS lead form used on
 * `/architectural-drafting-services-usa` hero (and other USA service pages).
 */
export function ServicesUsaContact({
  buttonText = "Offload Your Drafting Today",
  headingText = "Get Started Your Project Today!",
  headingLead,
  headingAccent,
  variant = "default",
  className = "",
}: ServicesUsaContactProps) {
  const router = useRouter();
  const formUrl = typeof window !== "undefined" ? window.location.href : null;
  const [curCountry, setCountry] = useState<string | undefined>();
  const [curCity, setCity] = useState<string | undefined>();
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isGlass = variant === "glass";

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json")
      .then((result) => {
        setCountry(result.data["country"]);
        setCity(result.data["city"]);
      })
      .catch(() => {
        /* optional geo enrichment */
      });
  }, []);

  const formikLogin = useFormik<ServicesUsaContactValues>({
    initialValues: {
      full_name: "",
      email: "",
      mobile_number: "",
      project_type: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setDisable(true);
      setIsLoading(true);

      const formValues = {
        full_name: values.full_name,
        email: values.email,
        mobile_number: values.mobile_number,
        project_type: values.project_type,
        message: values.message,
        Source: formUrl,
        city: curCity,
        country: curCountry,
      };

      const SERVICE_ID =
        process.env.NEXT_PUBLIC_SERVICE_ID ||
        process.env.GATSBY_SERVICE_ID ||
        process.env.SERVICE_ID ||
        EMAILJS_FALLBACKS.serviceId;
      const TEMPLATE_ID =
        process.env.NEXT_PUBLIC_TEMPLATE_ID ||
        process.env.GATSBY_TEMPLATE_ID ||
        process.env.TEMPLATE_ID ||
        EMAILJS_FALLBACKS.templateId;
      const PUBLIC_KEY =
        process.env.NEXT_PUBLIC_PUBLIC_KEY ||
        process.env.GATSBY_PUBLIC_KEY ||
        process.env.PUBLIC_KEY ||
        EMAILJS_FALLBACKS.publicKey;

      try {
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          formValues as Record<string, unknown>,
          PUBLIC_KEY,
        );
        if (response.status === 200) {
          setSuccessMsg("Your message has been sent successfully");
          router.push("/thank-you/");
        } else {
          setSuccessMsg("Some error occurred else");
        }
      } catch {
        setSuccessMsg("Some error occurred catch");
      } finally {
        setDisable(false);
        setIsLoading(false);
      }
    },
  });

  const { errors, touched } = formikLogin;

  const submit = () => {
    void formikLogin.handleSubmit();
  };

  if (isGlass) {
    return (
      <div className={cn("services-usa-contact services-usa-contact--glass", className)}>
        <div className="contact-form">
          <h3 className="services-usa-contact__title">
            {headingLead != null || headingAccent != null ? (
              <>
                <span className="services-usa-contact__title-lead">{headingLead ?? "Get a "}</span>
                <span className="services-usa-contact__title-accent">
                  {headingAccent ?? "Drafting Estimate"}
                </span>
              </>
            ) : (
              headingText
            )}
          </h3>

          <div className="services-usa-contact__fields">
            <Form.Group className="services-usa-contact__field">
              <Form.Label>
                Name<span className="services-usa-contact__req">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="full_name"
                maxLength={25}
                value={formikLogin.values.full_name}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
              />
              <FieldError show={Boolean(touched.full_name)} message={errors.full_name} />
            </Form.Group>

            <Form.Group className="services-usa-contact__field">
              <Form.Label>
                Work Email<span className="services-usa-contact__req">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Work Email"
                name="email"
                value={formikLogin.values.email}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
              />
              <FieldError show={Boolean(touched.email)} message={errors.email} />
            </Form.Group>

            <div className="services-usa-contact__row">
              <Form.Group className="services-usa-contact__field">
                <Form.Label>
                  Phone Number<span className="services-usa-contact__req">*</span>
                </Form.Label>
                <PhoneInput
                  country="us"
                  value={formikLogin.values.mobile_number}
                  onChange={(phone) => formikLogin.setFieldValue("mobile_number", phone)}
                  onBlur={() => formikLogin.setFieldTouched("mobile_number", true)}
                  inputClass="form-control"
                  placeholder="Phone Number"
                  countryCodeEditable={false}
                />
                <FieldError show={Boolean(touched.mobile_number)} message={errors.mobile_number} />
              </Form.Group>

              <Form.Group className="services-usa-contact__field" controlId="project_type_select_glass">
                <Form.Label htmlFor="project_type_select_glass">
                  Project Type<span className="services-usa-contact__req">*</span>
                </Form.Label>
                <Form.Select
                  id="project_type_select_glass"
                  name="project_type"
                  value={formikLogin.values.project_type}
                  onChange={formikLogin.handleChange}
                  onBlur={formikLogin.handleBlur}
                  aria-label="Select project type"
                >
                  <option value="" disabled hidden>
                    Project Type
                  </option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Educational">Educational</option>
                  <option value="Other">Other</option>
                </Form.Select>
                <FieldError show={Boolean(touched.project_type)} message={errors.project_type} />
              </Form.Group>
            </div>

            <Form.Group className="services-usa-contact__field">
              <Form.Label>
                Message<span className="services-usa-contact__req">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write a Description"
                rows={3}
                name="message"
                value={formikLogin.values.message}
                onChange={formikLogin.handleChange}
                onBlur={formikLogin.handleBlur}
              />
              <FieldError show={Boolean(touched.message)} message={errors.message} />
            </Form.Group>

            <PrimaryCtaButton
              type="button"
              fullWidth
              disabled={disable}
              onClick={submit}
              className="ads-usa-hero__submit !h-auto !min-h-[56px] !border-white !bg-white/10 !px-5 !py-4 !text-white backdrop-blur-[50px]"
            >
              {isLoading ? "Sending..." : buttonText}
            </PrimaryCtaButton>
          </div>

          {successMsg ? <div className="alert alert-success mt-3 mb-0">{successMsg}</div> : null}
        </div>
      </div>
    );
  }

  return (
    <section className={`services-usa-contact ${className}`.trim()}>
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col lg={12} className="py-0">
            <div className="contact-form">
              <Row lg={2} xs={1} className="g-2">
                <Col lg={12} xs={12}>
                  <h3 className="text-center text-white mb-3">{headingText}</h3>
                </Col>

                <Col lg={12} xs={12}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="full_name"
                      maxLength={25}
                      value={formikLogin.values.full_name}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.full_name && touched.full_name ? errors.full_name : null}
                  </p>
                </Col>

                <Col lg={12} md={12} xs={12}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formikLogin.values.email}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.email && touched.email ? errors.email : null}
                  </p>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <PhoneInput
                      country="us"
                      value={formikLogin.values.mobile_number}
                      onChange={(phone) => formikLogin.setFieldValue("mobile_number", phone)}
                      inputClass="form-control"
                      placeholder="Phone number"
                      countryCodeEditable={false}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.mobile_number && touched.mobile_number ? errors.mobile_number : null}
                  </p>
                </Col>

                <Col xs={12}>
                  <div className="banner-select">
                    <Form.Group controlId="project_type_select">
                      <Form.Label htmlFor="project_type_select">Project Type</Form.Label>
                      <Form.Select
                        id="project_type_select"
                        className="banner-select"
                        name="project_type"
                        value={formikLogin.values.project_type}
                        onChange={formikLogin.handleChange}
                        aria-label="Select project type"
                      >
                        <option value="" disabled hidden>
                          Select Project Type
                        </option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Educational">Educational</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.project_type && touched.project_type ? errors.project_type : null}
                  </p>
                </Col>

                <Col lg={12}>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={3}
                      name="message"
                      value={formikLogin.values.message}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.message && touched.message ? errors.message : null}
                  </p>
                </Col>

                <Col lg={12} className="text-center">
                  <Button
                    className="btn btn-light"
                    type="button"
                    onClick={submit}
                    disabled={disable}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        {buttonText} <i className="icon ms-2 fa fa-long-arrow-alt-right" />
                      </>
                    )}
                  </Button>
                </Col>
              </Row>

              {successMsg ? <div className="alert alert-success mt-4">{successMsg}</div> : null}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
