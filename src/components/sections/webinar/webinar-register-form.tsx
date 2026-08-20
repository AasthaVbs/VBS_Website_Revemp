"use client";

import emailjs from "@emailjs/browser";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";

const EMAILJS_FALLBACKS = {
  serviceId: "service_kcynjnc",
  templateId: "template_1suv721",
  publicKey: "cIYcVmNphZxLGAeRA",
};

type WebinarRegisterValues = {
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  job_title: string;
};

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("First Name is required")
    .matches(/^[aA-zZ\s]+$/, "First Name is invalid"),
  last_name: yup
    .string()
    .required("Last Name is required")
    .matches(/^[aA-zZ\s]+$/, "Last Name is invalid"),
  email: yup.string().required("Business Email is required").email("Business Email is invalid"),
  company_name: yup.string().required("Company name is required"),
  job_title: yup.string().required("Job Title is required"),
});

export function WebinarRegisterForm() {
  const router = useRouter();
  const formUrl = typeof window !== "undefined" ? window.location.href : null;
  const [curCountry, setCountry] = useState<string | undefined>();
  const [curCity, setCity] = useState<string | undefined>();
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [curIp, setIp] = useState<string | undefined>();

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json")
      .then((result) => {
        setIp(result.data["ip"]);
        setCountry(result.data["country"]);
        setCity(result.data["city"]);
      })
      .catch(() => {
        /* optional geo enrichment */
      });
  }, []);

  const sendToEmailJS = (formValues: WebinarRegisterValues & Record<string, string | null | undefined>) => {
    const SERVICE_ID =
      process.env.NEXT_PUBLIC_SERVICE_ID_WEBINAR ||
      process.env.SERVICE_ID_WEBINAR ||
      EMAILJS_FALLBACKS.serviceId;
    const TEMPLATE_ID =
      process.env.NEXT_PUBLIC_TEMPLATE_ID_WEBINAR ||
      process.env.TEMPLATE_ID_WEBINAR ||
      EMAILJS_FALLBACKS.templateId;
    const PUBLIC_KEY =
      process.env.NEXT_PUBLIC_PUBLIC_KEY_WEBINAR ||
      process.env.PUBLIC_KEY_WEBINAR ||
      EMAILJS_FALLBACKS.publicKey;

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formValues as Record<string, unknown>, PUBLIC_KEY);
  };

  const formikLogin = useFormik<WebinarRegisterValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      job_title: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      setIsLoading(true);

      const formValues = {
        ...values,
        Source: formUrl,
        city: curCity,
        country: curCountry,
        ip: curIp,
      };

      try {
        await sendToEmailJS(formValues);
        setSuccessMsg("Your message has been sent successfully");
        resetForm();
        router.push("/thank-you/");
      } catch {
        setSuccessMsg("Some error occurred");
      } finally {
        setDisable(false);
        setIsLoading(false);
      }
    },
  });

  const { errors, touched } = formikLogin;

  return (
    <section className="cantact-bg vbs-static-webinar-register">
      <Container className="py-10 position-relative" style={{ backgroundRepeat: "no-repeat" }}>
        <div
          className="vbs-static-webinar-register__bg"
          style={{ backgroundImage: "url(/image/contact-bg-image.png)" }}
          aria-hidden="true"
        />
        <div className="text-center mb-5 position-relative">
          <h2 className="text-white">Register Now</h2>
        </div>
        <Col lg={7} md={7} xs={12} className="mx-auto position-relative">
          <div className="contact-form">
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                formikLogin.handleSubmit();
              }}
            >
              <Row lg={2} xs={1} className="g-2">
                <Col>
                  <Form.Group controlId="webinarFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      maxLength={25}
                      name="first_name"
                      value={formikLogin.values.first_name}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.first_name && touched.first_name ? errors.first_name : null}
                  </p>
                </Col>
                <Col>
                  <Form.Group controlId="webinarLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      maxLength={25}
                      name="last_name"
                      value={formikLogin.values.last_name}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.last_name && touched.last_name ? errors.last_name : null}
                  </p>
                </Col>
                <Col>
                  <Form.Group controlId="webinarEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      maxLength={64}
                      value={formikLogin.values.email}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.email && touched.email ? errors.email : null}
                  </p>
                </Col>
                <Col>
                  <Form.Group controlId="webinarCompany">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      name="company_name"
                      maxLength={64}
                      value={formikLogin.values.company_name}
                      onChange={formikLogin.handleChange}
                    />
                    <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                      {errors.company_name && touched.company_name ? errors.company_name : null}
                    </p>
                  </Form.Group>
                </Col>
                <Col lg={12} md={12}>
                  <Form.Group controlId="webinarJobTitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Job Title"
                      rows={3}
                      name="job_title"
                      value={formikLogin.values.job_title}
                      onChange={formikLogin.handleChange}
                    />
                  </Form.Group>
                  <p className="form-text text-danger mt-lg-2 mb-0 font-size-14">
                    {errors.job_title && touched.job_title ? errors.job_title : null}
                  </p>
                </Col>
                <Col lg={12} className="text-center text-lg-end">
                  <Button
                    type="submit"
                    className="btn btn-light text-primary text-uppercase px-3 py-2 rounded-pill fs-4 fw-semibold"
                    disabled={disable}
                  >
                    {isLoading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit <i className="icon ms-1 fa fa-lg fa-long-arrow-alt-right" />
                      </>
                    )}
                  </Button>
                </Col>
              </Row>
              {successMsg ? <div className="alert alert-success mt-4">{successMsg}</div> : null}
            </Form>
          </div>
        </Col>
      </Container>
    </section>
  );
}
