import type { StaticImageData } from "next/image";

export type CaseImage = {
  src: string;
  label: string;
};

export type CaseChip = {
  label: string;
  icon: string | StaticImageData;
};

export type CaseTool = {
  name: string;
  icon: string;
  className?: string;
};

export type CaseCard = {
  title: string;
  text: string;
  zeroColor?: string;
};

export type CaseExecutionStep = {
  number: string;
  title: string;
  text: string;
};

export type ProjectCaseStudyContent = {
  hero: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  overview: {
    image: string;
    imageAlt: string;
    paragraphs: string[];
    chips: CaseChip[];
  };
  tools: {
    description: string;
    items: CaseTool[];
  };
  io: {
    description: string;
    inputImages: CaseImage[];
    outputImages: CaseImage[];
    inputPoints: string[];
    outputPoints: string[];
  };
  pain: {
    description: string;
    items: CaseCard[];
  };
  approach: {
    description: string;
    items: CaseCard[];
  };
  execution: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    steps: CaseExecutionStep[];
  };
  outcomes: {
    description: string;
    items: CaseCard[];
  };
};
