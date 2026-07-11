import { ROUTES } from "@/constants/navigation";

export type LegalRichTextPart =
  | { type: "text"; value: string; muted?: boolean }
  | { type: "link"; href: string; label: string }
  | { type: "email"; value: string };

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "paragraph"; parts: LegalRichTextPart[] }
  | { type: "list"; items: string[] }
  | { type: "labeled-list"; items: Array<{ label: string; text: string }> }
  | { type: "labeled-lines"; items: Array<{ label: string; text: string }> }
  | { type: "line-break-list"; items: string[] };

export type LegalSection = {
  majorHeading?: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocumentContent = {
  title: string;
  lastUpdated: string;
  introduction: string | string[];
  sections: LegalSection[];
};

export const privacyPolicyContent: LegalDocumentContent = {
  title: "Privacy Policy",
  lastUpdated: "16th June'23",
  introduction:
    "Virtual Building Studio Private Limited and Virtual Building Studio Inc. (referred to as \"Virtual Building Studio,\" \"we,\" \"us,\" or \"our\") are committed to respecting your privacy and choices. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us through our website, virtualbuildingstudio.com, and participate in our events and campaigns.",
  sections: [
    {
      majorHeading: "Collection of Personal Data and its processing",
      heading: "Personal Information that we process",
      blocks: [
        {
          type: "paragraph",
          text: "For the purposes of this Privacy Policy, \"Personal Information\" refers to any data that can identify an individual or can be combined with other information to identify an individual, and which is in the possession of Virtual Building Studio.",
        },
        {
          type: "paragraph",
          text: "While you can browse our websites without providing any Personal Information, we may collect the following information:",
        },
        {
          type: "paragraph",
          text: "Personal data that you provide to us through our website, such as your name, email address, designation, and company, when you fill out forms or interact with our site.",
        },
        {
          type: "paragraph",
          text: "Information about your computer visits our website, and your use of the site, including your IP address, demographic data, operating system, browser type, and information collected through cookies. For more details on cookies, please refer to our Cookie Policy.",
        },
        {
          type: "paragraph",
          text: "We do not share your mobile information with third parties or affiliates for marketing or promotional purposes.",
        },
      ],
    },
    {
      heading: "Use of your Personal Data",
      blocks: [
        { type: "paragraph", text: "We use your Personal Data for the following purposes:" },
        {
          type: "list",
          items: [
            "To provide better usability, troubleshooting, and site maintenance.",
            "To understand which parts of our website are visited and how frequently.",
            "To provide access to desirable content based on your preferences.",
            "To process job applications submitted through our website.",
            "To provide information and services as requested by you.",
            "To assess queries, requirements, and process requests for products and services.",
            "To perform client communication, service, billing, and administration.",
            "To conduct data analysis and improve our services.",
            "To maintain leads and run marketing or promotional campaigns.",
            "To create brand awareness.",
            "To provide better services and generate demand.",
            "To market products and services based on legitimate business interests under applicable laws.",
            "To conduct processing necessary to fulfill other contractual obligations for the individual.",
          ],
        },
        {
          type: "paragraph",
          text: "All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.",
        },
      ],
    },
    {
      heading: "Legal basis for processing Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "We process your Personal Data based on legitimate interests to promote, market, and improve our services. We may process your Personal Data in the following circumstances:",
        },
        {
          type: "labeled-list",
          items: [
            {
              label: "Communication",
              text: "We may use your Personal Data to administer and provide services, communicate with you, process transactions, send newsletters, updates, and promotional materials, seek your opinion and feedback, and personalize our communications with you.",
            },
            {
              label: "Advertising",
              text: "We may use your Personal Data for advertising and market research, including behavioral metrics, geolocation data, demographic data, and marketing preferences.",
            },
            {
              label: "Activity Tracking",
              text: "We may use your Personal Data to track your activity on our digital platforms, personalize and improve your experience, and create an individual profile to understand and respect your preferences.",
            },
            {
              label: "Optimization",
              text: "We may use your Personal Data to operate, improve, and maintain our website and prevent fraud and abuse.",
            },
            {
              label: "Data Sharing",
              text: "We may share your Personal Data with third parties, such as business partners, service vendors, authorized third-party agents, and contractors, for the purposes outlined in this Privacy Policy.",
            },
          ],
        },
      ],
    },
    {
      heading: "Disclosure of Personal Data, Data Recipients, and Transfer",
      blocks: [
        {
          type: "paragraph",
          text: "Virtual Building Studio does not share your Personal Data with third parties for marketing purposes without your permission.",
        },
        {
          type: "paragraph",
          text: "We may share your Personal Data within Virtual Building Studio, including our subsidiaries, affiliates, and business partners. We may also share your Personal Data with service providers, agents, or contractors who work on our behalf. Sometimes, we may transfer Personal Data to countries outside the European Economic Area (EEA), which may have different data protection standards. When transferring Personal Data to such countries, we use appropriate safeguards, such as standard contractual clauses or controller-processor contracts, to protect your data.",
        },
      ],
    },
    {
      heading: "Use of cookies",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "Please refer to our " },
            { type: "link", href: ROUTES.cookies, label: "Cookie Policy" },
            { type: "text", value: " for information about cookies on our website." },
          ],
        },
        {
          type: "paragraph",
          text: "We may share your Personal Data within Virtual Building Studio, including our subsidiaries, affiliates, and business partners. We may also share your Personal Data with service providers, agents, or contractors who work on our behalf. Sometimes, we may transfer Personal Data to countries outside the European Economic Area (EEA), which may have different data protection standards. When transferring Personal Data to such countries, we use appropriate safeguards, such as standard contractual clauses or controller-processor contracts, to protect your data.",
        },
      ],
    },
    {
      heading: "Access, correction, objection of your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "Subject to local legal requirements, you have the following rights regarding your Personal Data:",
        },
        {
          type: "list",
          items: [
            "The right to access, correct, delete, or transfer your Personal Data, including your profile and preferences.",
            "The right to object to certain processing activities, including automated decision-making.",
            "The right to request the deletion or restriction of your personal information, where applicable by law.",
            "The right to data portability, allowing you to receive a copy of your Personal Data in a structured, machine-readable format.",
            "The right to withdraw the consent if you previously provided it.",
            "The right to be informed about our data processing activities.",
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "To exercise your rights or for any privacy-related inquiries, please contact us at " },
            { type: "email", value: "contact@virtualbuildingstudio.com" },
            { type: "text", value: ".", muted: false },
          ],
        },
      ],
    },
    {
      heading: "Security of your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "Virtual Building Studio is committed to protecting your Personal Data and maintaining its accuracy. We implement reasonable administrative, physical, and technical security controls to safeguard your Personal Data from unauthorized access, use, and disclosure.",
        },
      ],
    },
    {
      heading: "Retention of your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "Unless explicitly requested for deletion by the data subject or as required by applicable legal requirements, we retain Personal Data indefinitely.",
        },
      ],
    },
    {
      heading: "Partner Websites",
      blocks: [
        {
          type: "paragraph",
          text: "Our websites may contain links to third-party websites and services. Please note that Virtual Building Studio is not responsible for the privacy statements, practices, or contents of those third-party websites.",
        },
      ],
    },
    {
      heading: "How to contact us",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              value: "If you have any questions regarding our privacy practices or this Privacy Policy, please contact us at ",
            },
            { type: "email", value: "contact@virtualbuildingstudio.com" },
            { type: "text", value: ".", muted: false },
          ],
        },
      ],
    },
    {
      heading: "Updates to this Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy occasionally to reflect changes in our data privacy practices. We encourage you to review this Privacy Policy periodically for any updates, which will be available on our website.",
        },
      ],
    },
  ],
};

export const cookiePolicyContent: LegalDocumentContent = {
  title: "Cookie Policy",
  lastUpdated: "16th June'23",
  introduction: [
    "This Cookie Policy explains how Virtual Building Studio Private Limited and Virtual Building Studio Inc. (\"we,\" \"us,\" or \"our\") use cookies and similar tracking technologies when you visit our website. It outlines the types of cookies, the purposes for which we use them, and your options for managing them.",
    "By continuing to use our website, you consent to use cookies and similar technologies as described in this Cookie Policy.",
  ],
  sections: [
    {
      heading: "What are Cookies?",
      blocks: [
        {
          type: "paragraph",
          text: "Cookies are small text files placed on your device (such as a computer, smartphone, or tablet) when you visit a website. They store information about browsing activities, preferences, and interactions with the website. Cookies are returned to the originating website or another website that recognizes the cookie on subsequent visits.",
        },
      ],
    },
    {
      heading: "1. Types of Cookies We Use",
      blocks: [
        { type: "paragraph", text: "We primarily use two types of cookies:" },
        {
          type: "labeled-lines",
          items: [
            {
              label: "Permanent Cookies",
              text: "These cookies help us recognize you as an existing user, making it easier for you to navigate our website without signing in repeatedly. They remain on your computer or device for a specific period of time.",
            },
            {
              label: "Session Cookies",
              text: "Session cookies are temporary and are erased when you close your browser. They are essential for the proper functioning of certain features on our website.",
            },
          ],
        },
        { type: "paragraph", text: "In addition, cookies can be classified based on their domain:" },
        {
          type: "labeled-lines",
          items: [
            {
              label: "First-Party Cookies",
              text: "These cookies are set by your visiting website and share the same domain.",
            },
            {
              label: "Third-Party Cookies",
              text: "These cookies are stored by a domain different from the visited page's domain. They are typically used when a webpage references a file, such as JavaScript, located outside its domain.",
            },
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Cookies",
      blocks: [
        { type: "paragraph", text: "We use cookies for various purposes, including:" },
        {
          type: "labeled-lines",
          items: [
            {
              label: "Preferences",
              text: "Cookies help us remember your preferences and provide a personalized experience, such as your preferred language or region.",
            },
            {
              label: "Security/Optimization",
              text: "Cookies assist in maintaining website security, authenticating users, preventing fraudulent use of login credentials, and protecting user data from unauthorized access.",
            },
            {
              label: "Processing",
              text: "Cookies enable the efficient functioning of our website, allowing you to navigate web pages and access secure areas.",
            },
            {
              label: "Advertising",
              text: "We use cookies to make our advertising more engaging and relevant to you. They help us select advertisements based on your interests, improve campaign performance reporting, and avoid showing you ads you have already seen.",
            },
            {
              label: "Communication",
              text: "Information collected through cookies may be used to communicate with you, send newsletters, gather your opinions and feedback, and provide you with services and promotional materials.",
            },
            {
              label: "Analytics and Research",
              text: "Cookies provide insights into how people use our products/services, allowing us to improve them based on user behavior and preferences.",
            },
          ],
        },
      ],
    },
    {
      heading: "3. Disabling Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "Most web browsers allow you to manage your cookie preferences through their settings. You can accept or reject cookies or be notified when a cookie is being sent. Please refer to the instructions provided by your browser for more information on adjusting your cookie settings. Keep in mind that disabling cookies may impact the functionality and user experience of websites.",
        },
      ],
    },
    {
      heading: "4. Analytics Tools and Third-Party Technologies",
      blocks: [
        {
          type: "paragraph",
          text: "We utilize various analytics tools and third-party technologies, including Google Analytics, to collect and analyze cookies. These third-party analytics companies may combine the information collected from our website with data they have independently collected from other websites. Many of these companies have their own privacy policies.",
        },
      ],
    },
    {
      heading: "5. Your Privacy Rights and Contact Information",
      blocks: [
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              value:
                "We respect your privacy rights and provide mechanisms to exercise them. Please refer to our website privacy notice for details on your rights and how we process your personal data. If you have any questions, comments, or concerns regarding this Cookie Policy or wish to exercise your privacy rights, please contact us at ",
            },
            { type: "email", value: "contact@virtualbuildingstudio.com" },
            { type: "text", value: ".", muted: false },
          ],
        },
      ],
    },
    {
      heading: "6. Changes to the Cookie Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We reserve the right to update or change this Cookie Policy anytime. We will provide you with the updated policy when there are substantial changes, either by email or by prominently displaying the changes on our website. Please review this Cookie Policy periodically. Your continued use of our website after any modifications to the policy constitutes your acknowledgment of the changes and your consent to abide by the updated policy.",
        },
        {
          type: "paragraph",
          parts: [
            {
              type: "text",
              value:
                "Please note that this Cookie Policy applies to all individuals visiting our website and all information collected through cookies. For further information about how we handle your personally identifiable information, please refer to our website ",
            },
            { type: "link", href: ROUTES.privacy, label: "privacy policy" },
            { type: "text", value: ".", muted: false },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "If you have any questions or concerns about our Cookie Policy, please contact us at " },
            { type: "email", value: "contact@virtualbuildingstudio.com." },
          ],
        },
      ],
    },
  ],
};

export const termsOfUseContent: LegalDocumentContent = {
  title: "Terms of Use",
  lastUpdated: "16th June'23",
  introduction:
    "These Terms of Use (\"Terms\") govern your access to and use of the websites operated by Virtual Building Studio Private Limited and Virtual Building Studio Inc. (collectively referred to as \"Virtual Building Studio,\" \"we,\" \"us,\" or \"our\"). By accessing or using our websites, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please refrain from accessing or using our websites.",
  sections: [
    {
      heading: "Modifications to Terms",
      blocks: [
        {
          type: "paragraph",
          text: "Virtual Building Studio reserves the right to modify, change, or alter these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any updates or changes. Continued use of our websites after any modifications to the Terms constitutes your acceptance of the revised Terms.",
        },
      ],
    },
    {
      heading: "Website Access and Use",
      blocks: [
        {
          type: "labeled-lines",
          items: [
            {
              label: "Limited License",
              text: "Virtual Building Studio grants you a non-exclusive, non-transferable, limited right to access, use, and display our websites and the materials provided for personal and informational purposes only.",
            },
            {
              label: "Intellectual Property",
              text: "The websites, including their design, layout, code, and content (excluding any third-party materials), are the exclusive property of Virtual Building Studio and protected by copyright laws and other intellectual property rights. You may not copy, reproduce, modify, or create derivative works based on our websites without our express written permission.",
            },
            {
              label: "Trademarks",
              text: "The Virtual Building Studio name and logo are registered trademarks owned by Virtual Building Studio. Other product and company names mentioned on our websites may be trademarks or service marks of their respective owners. The unauthorized use of any trademarks is strictly prohibited.",
            },
          ],
        },
      ],
    },
    {
      heading: "Third-Party Content and Links",
      blocks: [
        {
          type: "labeled-lines",
          items: [
            {
              label: "Third-Party Content",
              text: "Our websites may provide access to information or materials from third parties (\"Third-Party Content\"). Any access or use of Third-Party Content is at your own risk, and Virtual Building Studio is not responsible for the accuracy, legality, or appropriateness of such content.",
            },
            {
              label: "External Links",
              text: "Our websites may contain links to third-party websites. These links are provided for your convenience only, and Virtual Building Studio does not endorse or control the contents of any linked websites. Your use of linked websites is subject to the terms and conditions of those websites.",
            },
          ],
        },
      ],
    },
    {
      heading: "No Warranties",
      blocks: [
        {
          type: "labeled-lines",
          items: [
            {
              label: "Information and Materials",
              text: "All information and materials provided on our websites are provided \"as is\" without any express or implied warranties or representations. Virtual Building Studio disclaims all warranties to the fullest extent permitted by law, including but not limited to warranties of non-infringement, merchantability, or fitness for a particular purpose.",
            },
            {
              label: "Security and Viruses",
              text: "Virtual Building Studio does not guarantee or warrant that our websites or any files available for download are free of viruses or other harmful components. It is your responsibility to implement appropriate security measures and safeguards.",
            },
          ],
        },
      ],
    },
    {
      heading: "Indemnity and Limitation of Liability",
      blocks: [
        {
          type: "labeled-lines",
          items: [
            {
              label: "Indemnification",
              text: "You agree to indemnify, defend, and hold harmless Virtual Building Studio, its subsidiaries, and affiliates from any claim, cost, expense, judgment, damages, or other loss arising out of or in relation to your use of our websites.",
            },
            {
              label: "Limitation of Liability",
              text: "In no event shall Virtual Building Studio be liable for any direct, consequential, incidental, special, punitive, or other damages whatsoever arising out of or in connection with your use or access to our websites, even if Virtual Building Studio has been advised of the possibility of such damages.",
            },
          ],
        },
      ],
    },
    {
      heading: "Data Privacy",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", value: "Virtual Building Studio is committed to protecting your data privacy. Our Data " },
            { type: "link", href: ROUTES.privacy, label: "Privacy Policy" },
            {
              type: "text",
              value: ", available on our websites, explains how we collect, use, and disclose information obtained through our websites and our internal processes.",
            },
          ],
        },
      ],
    },
    {
      heading: "Governing Law and Jurisdiction",
      blocks: [
        {
          type: "paragraph",
          text: "These Terms of Use shall be governed by the laws of the jurisdiction where Virtual Building Studio is registered, without affecting its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.",
        },
      ],
    },
    {
      heading: "Terms & Conditions for the Free Shop Drawings Offer",
      blocks: [
        {
          type: "line-break-list",
          items: [
            "Applicable only on combined Modelling + Coordination projects",
            "Offer valid for new projects initiated within the promotional period",
            "Shop drawings will be provided only for the final coordinated model scope",
            "Scope of shop drawings must align with the agreed project deliverables",
            "Not applicable on standalone modelling, coordination, or shop drawing services",
            "Cannot be combined with any other discounts or promotional offers",
            "Project scope, timelines, and deliverables must be mutually agreed prior to commencement",
            "Any additional revisions or scope beyond agreed deliverables will be charged separately",
            "Subject to project feasibility and delivery capacity",
          ],
        },
        {
          type: "paragraph",
          text: "Copyright © 2026 Virtual Building Studio Private Limited and Virtual Building Studio Inc. All rights reserved.",
        },
      ],
    },
  ],
};
