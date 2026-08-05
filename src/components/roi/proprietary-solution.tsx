"use client";

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import * as yup from "yup";

import type { RoiLeadFormValues, StaffRow } from "@/components/roi/types";

import "react-phone-input-2/lib/bootstrap.css";

const GROUP_ICON_1 = "/icon/group.png";
const GROUP_ICON_2 = "/icon/number-of-resources-icon.png";
const GROUP_ICON_3 = "/icon/contract-tenure-icon.png";

/** Contact-form EmailJS fallbacks (matches Gatsby GATSBY_SERVICE_ID / .env). */
const EMAILJS_FALLBACKS = {
  serviceId: "service_9wb2zcp",
  templateId: "template_n60yl3r",
  publicKey: "AS5XWYUjScR53EFRu",
};

type ProprietarySolutionProps = {
  page?: string;
  onFormSubmit: (values: RoiLeadFormValues) => void;
  staffRows: StaffRow[];
  setStaffRows: React.Dispatch<React.SetStateAction<StaffRow[]>>;
  formValues: RoiLeadFormValues | null;
  text?: string;
};

export default function ProprietarySolution({
  page = "DRM_ROI_Calculator_Data",
  onFormSubmit,
  staffRows,
  setStaffRows,
  formValues,
  text,
}: ProprietarySolutionProps) {
  const formUrl = typeof window !== "undefined" ? window.location.href : null;
  const [curCountry, setCountry] = useState<string | undefined>();
  const [curCity, setCity] = useState<string | undefined>();
  const [successMsg, setSuccessMsg] = useState("");
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [curIp, setIp] = useState<string | undefined>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json")
      .then((result) => {
        setIp(result.data["ip"]);
        setCountry(result.data["country"]);
        setCity(result.data["city"]);
      })
      .catch(() => {
        /* geo enrichment is optional */
      });
  }, []);

  const validationSchema = yup.object().shape({
    full_name: yup
      .string()
      .required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Name is invalid"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    mobile_number: yup
      .string()
      .required("Mobile Number is required")
      .min(4, "Mobile number is invalid"),
    looking_for: yup.string().required("This field is required"),
    message: yup.string().required("Message is required"),
  });

  const sendToEmailJS = (leadValues: RoiLeadFormValues) => {
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
    // EmailJS accepts flat template params; pass lead payload as Gatsby did (includes staffRows).
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...leadValues } as Record<string, unknown>, PUBLIC_KEY);
  };

  const formikLogin = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      mobile_number: "",
      looking_for: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      setIsLoading(true);

      const leadValues: RoiLeadFormValues = {
        ...values,
        Source: formUrl,
        city: curCity,
        country: curCountry,
        page,
        ip: curIp,
        staffRows,
      };
      try {
        let emailSent = false;
        try {
          await sendToEmailJS(leadValues);
          emailSent = true;
        } catch (emailError) {
          console.log("EmailJS failed");
          console.log((emailError as Error)?.message || emailError);
        }
        await onFormSubmit(leadValues);
        setSuccessMsg(emailSent ? "Showing ROI. Email sent." : "Showing ROI. Email not sent.");
        resetForm();
      } catch {
        setSuccessMsg("Some error occurred");
      } finally {
        setDisable(false);
        setIsLoading(false);
      }
    },
  });

  const resetStaffRows = () => {
    setStaffRows([{ typeOfResource: 2, numberOfResources: 0, contractTenure: 0 }]);
  };

  const { errors, touched } = formikLogin;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleIncrementResources = (index: number) => {
    const newStaffRows = [...staffRows];
    newStaffRows[index].numberOfResources++;
    setStaffRows(newStaffRows);
  };

  const handleDecrementResources = (index: number) => {
    const newStaffRows = [...staffRows];
    if (newStaffRows[index].numberOfResources > 1) {
      newStaffRows[index].numberOfResources--;
      setStaffRows(newStaffRows);
    }
  };

  const handleIncrementContractTenure = (index: number) => {
    const newStaffRows = [...staffRows];
    newStaffRows[index].contractTenure++;
    setStaffRows(newStaffRows);
  };

  const handleDecrementContractTenure = (index: number) => {
    const newStaffRows = [...staffRows];
    if (newStaffRows[index].contractTenure > 1) {
      newStaffRows[index].contractTenure--;
      setStaffRows(newStaffRows);
    }
  };

  const handleAddStaff = () => {
    setStaffRows([...staffRows, { typeOfResource: 2, numberOfResources: 0, contractTenure: 0 }]);
  };

  const handleRemoveStaff = (index: number) => {
    if (staffRows.length > 1) {
      const newStaffRows = [...staffRows];
      newStaffRows.splice(index, 1);
      setStaffRows(newStaffRows);
    }
  };

  const handleSelectTypeOfResource = (index: number, value: number) => {
    const newStaffRows = [...staffRows];
    newStaffRows[index].typeOfResource = value;
    setStaffRows(newStaffRows);
  };

  useEffect(() => {
    if (formValues === null) {
      resetStaffRows();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- match Gatsby: reset only when formValues cleared
  }, [formValues]);

  return (
    <section className="py-10 bg-primary bg-opacity-10 roi-calculator-section">
      <Container>
        <Col xs={12} className="text-center mx-auto mb-5 mb-lg-8">
          {!text && (
            <h2>
              <span className="text-accent">ROI Calculator : </span>
              <br />
              Discover the Cost-Effectiveness of On-Site vs. Remote Licensed Architects
            </h2>
          )}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </Col>
        <div>
          {staffRows.map((staff, index) => (
            <div key={index} className="g-0 d-block d-md-flex proprietary-solution mb-2">
              <div className="p-2 d-flex align-items-center justify-content-between border-end">
                <div className="d-flex align-items-center pe-2">
                  <Image
                    src={GROUP_ICON_1}
                    alt="Type of Resource"
                    width={32}
                    height={32}
                    className="me-1"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mb-0 fw-semibold table-text">Type of Resource</p>
                </div>
                <div>
                  <select
                    className="form-select border-0"
                    value={staff.typeOfResource}
                    onChange={(e) => handleSelectTypeOfResource(index, parseInt(e.target.value, 10))}
                    aria-label="Type of Resource"
                    title="Type of Resource"
                  >
                    <option value={2}>Sr. Executive</option>
                    <option value={3}>Specialist</option>
                    <option value={4}>Sr. Specialist</option>
                    <option value={5}>Manager</option>
                  </select>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center justify-content-between border-end">
                <div className="d-flex align-items-center pe-2">
                  <Image
                    src={GROUP_ICON_2}
                    alt="Number of Architects"
                    width={32}
                    height={32}
                    className="me-1"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mb-0 fw-semibold table-text">Number of Architects</p>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="fs-1 text-decoration-none text-dark border-0 bg-transparent p-0"
                    onClick={() => handleDecrementResources(index)}
                    aria-label="Decrease number of resources"
                  >
                    -
                  </button>
                  <p className="mb-0 px-3">{staff.numberOfResources}</p>
                  <button
                    type="button"
                    className="fs-1 text-decoration-none text-dark border-0 bg-transparent p-0"
                    onClick={() => handleIncrementResources(index)}
                    aria-label="Increase number of resources"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center pe-4">
                  <Image
                    src={GROUP_ICON_3}
                    alt="Contract Tenure"
                    width={32}
                    height={32}
                    className="me-1"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mb-0 fw-semibold table-text">Contract Tenure</p>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="fs-1 text-decoration-none text-dark border-0 bg-transparent p-0"
                    onClick={() => handleDecrementContractTenure(index)}
                    aria-label="Decrease contract tenure"
                  >
                    -
                  </button>
                  <p className="mb-0 px-3">{staff.contractTenure}</p>
                  <button
                    type="button"
                    className="fs-1 text-decoration-none text-dark border-0 bg-transparent p-0"
                    onClick={() => handleIncrementContractTenure(index)}
                    aria-label="Increase contract tenure"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="ms-auto p-2 p-md-0">
                {index === 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary d-sm-block h-100 rounded-start-0 px-4"
                    onClick={handleAddStaff}
                  >
                    + Add Staff
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-primary d-sm-block h-100 rounded-start-0 px-3"
                    onClick={() => handleRemoveStaff(index)}
                  >
                    Remove Staff
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 mt-md-0">
          <div>
            <Button
              className="btn btn-lightblue text-white text-uppercase px-3 py-2 rounded-pill fs-4 fw-semibold"
              onClick={handleShow}
              disabled={staffRows[0].numberOfResources <= 0 || staffRows[0].contractTenure <= 0}
            >
              Calculate ROI
              <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" />
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="roi-lead-modal-title"
              centered
              className="roi-lead-modal"
              dialogClassName="roi-lead-modal__dialog"
            >
              <Modal.Body className="roi-lead-modal__body">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="roi-lead-modal__close"
                >
                  <span className="icon fa fa-times" aria-hidden />
                </button>

                <div className="roi-lead-modal__header">
                  <h2 id="roi-lead-modal-title" className="roi-lead-modal__title">
                    Share Your Information to Get Instant ROI Report
                  </h2>
                </div>

                <div className="roi-lead-modal__form contact-form">
                  <Form onSubmit={formikLogin.handleSubmit} noValidate>
                    <Row className="g-3 g-md-4">
                      <Col md={6}>
                        <Form.Group controlId="roiFormName" className="roi-lead-modal__field">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="full_name"
                            maxLength={25}
                            value={formikLogin.values.full_name}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            isInvalid={Boolean(touched.full_name && errors.full_name)}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.full_name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="roiFormPhone" className="roi-lead-modal__field">
                          <Form.Label>Phone Number</Form.Label>
                          <PhoneInput
                            country="us"
                            value={formikLogin.values.mobile_number}
                            onChange={(phone) => formikLogin.setFieldValue("mobile_number", phone)}
                            inputClass="form-control"
                            containerClass="roi-lead-modal__phone"
                            placeholder="Phone number"
                            countryCodeEditable={false}
                          />
                          {touched.mobile_number && errors.mobile_number ? (
                            <p className="roi-lead-modal__error">{errors.mobile_number}</p>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="roiFormEmail" className="roi-lead-modal__field">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formikLogin.values.email}
                            maxLength={64}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            isInvalid={Boolean(touched.email && errors.email)}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="roiFormLookingFor" className="roi-lead-modal__field">
                          <Form.Label>Looking for</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Looking for..."
                            name="looking_for"
                            value={formikLogin.values.looking_for}
                            maxLength={25}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            isInvalid={Boolean(touched.looking_for && errors.looking_for)}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.looking_for}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="roiFormMessage" className="roi-lead-modal__field">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Message"
                            rows={4}
                            name="message"
                            value={formikLogin.values.message}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            isInvalid={Boolean(touched.message && errors.message)}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="roi-lead-modal__actions">
                        <Button
                          className="roi-lead-modal__submit btn btn-light text-white btn-text-white text-uppercase"
                          type="submit"
                          disabled={disable}
                        >
                          {isLoading ? (
                            "Sending..."
                          ) : (
                            <>
                              <span>Show ROI</span>
                              <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" aria-hidden />
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                    {successMsg ? (
                      <div className="alert alert-success mt-3 mb-0">{successMsg}</div>
                    ) : null}
                  </Form>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Container>
    </section>
  );
}
