"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Col, Container, Form, Image, Modal } from "react-bootstrap";

import type { StaffRow } from "@/components/roi/types";

const TABLE_LOGO = "/icon/table-logo.png";
const ICON_1 = "/image/work.png";
const ICON_2 = "/image/group.png";
const ICON_3 = "/image/contract.png";
const PROPRIETARY_SOLUTION_BG = "/image/proprietary-solution-bg.png";

type SeparateCalc = {
  index: number;
  newConventionalHiringCost: number;
  newHiringFromVBSCost: number;
  newStaffHiringTime: string | undefined;
  newVbsStaffHiringTime: string | undefined;
  newOpportunityMissedCost: number;
  numberOfResources: number;
  typeOfResource: number;
  contractTenure: number;
};

type RoiResultsTableProps = {
  staffRows: StaffRow[];
  handleResetForm: () => void;
  text?: string;
};

const costs: Record<string, Record<string, number>> = {
  "1 Year": { "Conventional Hiring": 7800, "Hiring from VBS": 1800 },
  "2 Years": { "Conventional Hiring": 8900, "Hiring from VBS": 2200 },
  "3 Years": { "Conventional Hiring": 10000, "Hiring from VBS": 2500 },
  "4 Years": { "Conventional Hiring": 11200, "Hiring from VBS": 2900 },
  "5+ Years": { "Conventional Hiring": 12500, "Hiring from VBS": 3300 },
};

function getExperienceKey(yearsOfExperience: number) {
  if (yearsOfExperience >= 5) {
    return "5+ Years";
  } else if (yearsOfExperience >= 4) {
    return "4 Years";
  } else if (yearsOfExperience >= 3) {
    return "3 Years";
  } else if (yearsOfExperience >= 2) {
    return "2 Years";
  } else {
    return "1 Year";
  }
}

function calculateExpectedCost(
  yearsOfExperience: number,
  hiringType: string,
  numberOfResources: number,
  contractTenureMonths: number,
) {
  const experienceKey = getExperienceKey(yearsOfExperience);
  const costPerResource = costs[experienceKey][hiringType];
  return numberOfResources * costPerResource * contractTenureMonths;
}

function getStaffHiringTime(numberOfResources: number) {
  let result: string | undefined;

  if (numberOfResources > 0 && numberOfResources < 6) {
    result = "30 Days";
  } else if (numberOfResources > 5 && numberOfResources < 11) {
    result = "60 Days";
  } else if (numberOfResources > 10 && numberOfResources < 25) {
    result = "90 Days";
  } else if (numberOfResources > 25 && numberOfResources < 50) {
    result = "120 Days";
  } else if (numberOfResources > 50) {
    result = "180 Days";
  }

  return result;
}

function getVbsStaffHiringTime(numberOfResources: number) {
  let result: string | undefined;

  if (numberOfResources > 0 && numberOfResources < 6) {
    result = "3 Days";
  } else if (numberOfResources > 5 && numberOfResources < 11) {
    result = "5 Days";
  } else if (numberOfResources > 10 && numberOfResources < 25) {
    result = "7 Days";
  } else if (numberOfResources > 25 && numberOfResources < 50) {
    result = "15 Days";
  } else if (numberOfResources > 50) {
    result = "30 Days";
  }

  return result;
}

function getOpportunityMissedCost(
  numberOfResources: number,
  conventionalHiringCost: number,
  staffHiringTime: string | undefined,
) {
  if (!staffHiringTime) {
    return 0;
  }
  const staffHiringTimeInDays = parseInt(staffHiringTime.split(" ")[0], 10);
  const staffHiringTimeInMonths = staffHiringTimeInDays / 30;
  return Number(numberOfResources * 3 * conventionalHiringCost * staffHiringTimeInMonths);
}

function getTypeOfResourceValue(typeOfResource: number) {
  switch (typeOfResource) {
    case 2:
      return "Sr. Executive";
    case 3:
      return "Specialist";
    case 4:
      return "Sr. Specialist";
    case 5:
      return "Manager";
    default:
      return "Unknown";
  }
}

export default function RoiResultsTable({ staffRows, handleResetForm, text }: RoiResultsTableProps) {
  const [conventionalHiringCost, setConventionalHiringCost] = useState(0);
  const [hiringFromVBSCost, setHiringFromVBSCost] = useState(0);
  const [staffHiringTime, setStaffHiringTime] = useState("30 Days");
  const [vbsStaffHiringTime, setVbsStaffHiringTime] = useState("3 Days");
  const [opportunityMissedCost, setOpportunityMissedCost] = useState(0);
  const [separateCalculations, setSeparateCalculations] = useState<SeparateCalc[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let totalConventionalHiringCost = 0;
    let totalHiringFromVBSCost = 0;
    let totalOpportunityMissedCost = 0;
    let combinedStaffHiringTime = "30 Days";
    let combinedVbsStaffHiringTime = "3 Days";
    const separateCalcs: SeparateCalc[] = [];

    staffRows.forEach((staff, index) => {
      const newConventionalHiringCost = calculateExpectedCost(
        staff.typeOfResource,
        "Conventional Hiring",
        staff.numberOfResources,
        staff.contractTenure,
      );
      totalConventionalHiringCost += newConventionalHiringCost;

      const newHiringFromVBSCost = calculateExpectedCost(
        staff.typeOfResource,
        "Hiring from VBS",
        staff.numberOfResources,
        staff.contractTenure,
      );
      totalHiringFromVBSCost += newHiringFromVBSCost;

      const newStaffHiringTime = getStaffHiringTime(staff.numberOfResources);
      if (newStaffHiringTime) combinedStaffHiringTime = newStaffHiringTime;
      const newVbsStaffHiringTime = getVbsStaffHiringTime(staff.numberOfResources);
      if (newVbsStaffHiringTime) combinedVbsStaffHiringTime = newVbsStaffHiringTime;

      const newOpportunityMissedCost = getOpportunityMissedCost(
        staff.numberOfResources,
        newConventionalHiringCost,
        newStaffHiringTime,
      );
      totalOpportunityMissedCost += newOpportunityMissedCost;

      separateCalcs.push({
        index,
        newConventionalHiringCost,
        newHiringFromVBSCost,
        newStaffHiringTime,
        newVbsStaffHiringTime,
        newOpportunityMissedCost,
        numberOfResources: staff.numberOfResources,
        typeOfResource: staff.typeOfResource,
        contractTenure: staff.contractTenure,
      });
    });

    setConventionalHiringCost(totalConventionalHiringCost);
    setHiringFromVBSCost(totalHiringFromVBSCost);
    setStaffHiringTime(combinedStaffHiringTime);
    setVbsStaffHiringTime(combinedVbsStaffHiringTime);
    setOpportunityMissedCost(totalOpportunityMissedCost);
    setSeparateCalculations(separateCalcs);
  }, [staffRows]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="py-10 table-bg roi-results-section"
      style={{ backgroundImage: `url(${PROPRIETARY_SOLUTION_BG})` }}
    >
      <Container>
        <Col lg={9} xs={12} className="text-center mx-auto mb-5 mb-lg-8">
          {!text && (
            <h2>
              <span className="text-accent">Do it Yourself (DIY) ROI Validation</span>
              <br /> Conventional Hiring V/S Our Proprietary Solution
            </h2>
          )}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </Col>
        <div className="table-section mb-3">
          <Col lg={8} xs={12} className="mx-auto">
            <div className="position-relative">
              <Image src={TABLE_LOGO} height={56} className="table-icon" alt="table-icon" />
              <div className="table-responsive rounded-4">
                <table className="table mb-0 position-relative">
                  <thead>
                    <tr className="fs-3 ">
                      <th className="bg-primary text-white py-2 col">Overall Benefit</th>
                      <th className="bg-primary text-white text-center py-2 col">Conventional Hiring</th>
                      <th className="bg-primary text-white text-center py-2 col">Hiring with VBS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Efficiency of Outcome E(xi)</th>
                      <td className="text-center">75%</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiEffOutcome">
                          <Form.Control
                            aria-label="Table"
                            type="number"
                            placeholder="90%"
                            className="table-input-2"
                            min="0"
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>Expected CostE(ci)</th>
                      <td className="text-center">${conventionalHiringCost.toLocaleString()}</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiExpectedCost">
                          <Form.Control
                            aria-label="Table"
                            type="text"
                            className="table-input-2"
                            min="0"
                            max={5}
                            value={`$${hiringFromVBSCost.toLocaleString()}`}
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>Staff Hiring Time</th>
                      <td className="text-center">{staffHiringTime}</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiHiringTime">
                          <Form.Control
                            aria-label="Table"
                            type="text"
                            placeholder="5 Days"
                            className="table-input-2"
                            min="0"
                            value={vbsStaffHiringTime}
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>Opportunity Missed Cost</th>
                      <td className="text-center">${opportunityMissedCost.toLocaleString()}</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiOppMissed">
                          <Form.Control
                            aria-label="Table"
                            type="number"
                            placeholder="$0"
                            className="table-input-2"
                            min="0"
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <th>HR and Onboarding Cost</th>
                      <td className="text-center">
                        ${(5000 * staffRows[0].numberOfResources).toLocaleString()}
                      </td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiHrCost">
                          <Form.Control
                            aria-label="Table"
                            type="number"
                            placeholder="$0"
                            className="table-input-2"
                            min="0"
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr className="border-bottom-0">
                      <td colSpan={3} className="py-2 box-shadow bg-lightblue-100 border-light">
                        <h5 className="mb-0 text-lightblue fs-2 fst-italic">
                          What&apos;s visible is just the tip of the iceberg; there&apos;s a lot more
                          going on below.
                        </h5>
                      </td>
                    </tr>
                    <tr className="border-bottom-0">
                      <td
                        colSpan={3}
                        className="py-2 box-shadow border-light rounded-1"
                        style={{ backgroundColor: "#F5F5F4" }}
                      >
                        <h5 className="mb-0 text-lightblue fs-3">Intangible Revenue Impact</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>ROI (If you work with VBS)</td>
                      <td className="text-center">-</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiPct">
                          <Form.Control
                            aria-label="Table"
                            type="number"
                            placeholder="200%"
                            className="table-input-2"
                            min="0"
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Attrition Effect</td>
                      <td className="text-center">30%</td>
                      <td className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="roiAttrition">
                          <Form.Control
                            aria-label="Table"
                            type="number"
                            placeholder="0"
                            className="table-input-2"
                            min="0"
                            readOnly
                          />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-5">
          {staffRows.length > 1 && (
            <button
              type="button"
              className="btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold me-3"
              onClick={handleShow}
            >
              Show Breakdown
              <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" />
            </button>
          )}
          <button
            type="button"
            className="btn btn-outline-primary text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
            onClick={handleResetForm}
          >
            Reset Value
            <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" />
          </button>
        </div>
        <div className="text-center">
          <Link
            className="btn btn-lightblue text-white text-uppercase px-3 py-2 rounded-pill fs-4 fw-semibold mb-5"
            href="/"
          >
            Stop Outsourcing, Start Hiring
            <i className="icon ms-2 fa fa-lg fa-long-arrow-alt-right" />
          </Link>
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="table-model"
          >
            <div>
              <button onClick={handleClose} aria-label="Close" className="top-closebtn text-dark">
                <span className="icon fa fa-times" />
              </button>
            </div>
            <div>
              {separateCalculations.map((calc, index) => (
                <div key={index} className="rounded-4 table-responsive">
                  <table className="table position-relative">
                    <thead>
                      <tr className="fs-3">
                        <th className="bg-primary text-white py-2 w-50">
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center me-2">
                              <Image src={ICON_1} width={24} height={24} className="me-1" alt="" />
                              <p className="sm text-white mb-0">
                                {getTypeOfResourceValue(calc.typeOfResource)}
                              </p>
                            </div>
                            <div className="d-flex align-items-center me-2">
                              <Image src={ICON_2} width={24} height={24} className="me-1" alt="" />
                              <p className="sm text-white mb-0">{calc.numberOfResources}</p>
                            </div>
                            <div className="d-flex align-items-center">
                              <Image src={ICON_3} width={24} height={24} className="me-1" alt="" />
                              <p className="sm text-white mb-0">{calc.contractTenure} Yr </p>
                            </div>
                          </div>
                        </th>
                        <th className="bg-primary text-white text-center py-2 w-25">
                          Conventional Hiring
                        </th>
                        <th className="bg-primary text-white text-center py-2 w-25">Hiring with VBS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Efficiency of Outcome E(xi)</th>
                        <td className="text-center">95%</td>
                        <td className="d-flex align-items-center justify-content-center">
                          <Form.Group controlId={`roiBreakEff-${index}`}>
                            <Form.Control
                              aria-label="Table"
                              type="number"
                              placeholder="75%"
                              className="table-input-2"
                              min="0"
                              readOnly
                            />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <th className="left-popover">Expected CostE(ci)</th>
                        <td className="text-center">
                          ${calc.newConventionalHiringCost.toLocaleString()}
                        </td>
                        <td className="d-flex align-items-center justify-content-center right-popover">
                          <Form.Group controlId={`roiBreakCost-${index}`}>
                            <Form.Control
                              aria-label="Table"
                              type="text"
                              placeholder="place holder"
                              className="table-input-2"
                              min="0"
                              max={5}
                              value={`$${calc.newHiringFromVBSCost.toLocaleString()}`}
                              readOnly
                            />
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      </Container>
    </section>
  );
}
