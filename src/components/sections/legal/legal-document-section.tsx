import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import type { LegalBlock, LegalDocumentContent, LegalRichTextPart } from "@/constants/legal-content";

function LegalRichParagraph({ parts }: { parts: LegalRichTextPart[] }) {
  return (
    <p className="legal-page__text">
      {parts.map((part, index) => {
        if (part.type === "link") {
          return (
            <Link key={`${part.label}-${index}`} href={part.href} className="legal-page__link">
              {part.label}
            </Link>
          );
        }

        if (part.type === "email") {
          const emailAddress = part.value.replace(/\.$/, "");
          const displayValue = part.value.endsWith(".") ? part.value : part.value;

          return (
            <a key={`${part.value}-${index}`} href={`mailto:${emailAddress}`} className="legal-page__link">
              {displayValue}
            </a>
          );
        }

        return (
          <span
            key={`${part.value}-${index}`}
            className={part.muted === false ? "legal-page__text-strong" : undefined}
          >
            {part.value}
          </span>
        );
      })}
    </p>
  );
}

function LegalBlockContent({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") {
    if ("parts" in block) {
      return <LegalRichParagraph parts={block.parts} />;
    }

    return <p className="legal-page__text">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="legal-page__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "labeled-lines") {
    return (
      <p className="legal-page__text">
        {block.items.map((item, index) => (
          <span key={item.label}>
            {index > 0 ? <br /> : null}
            {item.label} : {item.text}
          </span>
        ))}
      </p>
    );
  }

  if (block.type === "line-break-list") {
    return (
      <p className="legal-page__text">
        {block.items.map((item, index) => (
          <span key={item}>
            {index > 0 ? <br /> : null}
            {item}
          </span>
        ))}
      </p>
    );
  }

  return (
    <ul className="legal-page__list legal-page__list--labeled">
      {block.items.map((item) => (
        <li key={item.label}>
          <span className="legal-page__list-label">{item.label} :</span> {item.text}
        </li>
      ))}
    </ul>
  );
}

export function LegalDocumentSection({ document }: { document: LegalDocumentContent }) {
  const introductionParagraphs = Array.isArray(document.introduction)
    ? document.introduction
    : [document.introduction];

  return (
    <section className="legal-page__document">
      <PageContainer className="legal-page__container">
        <header className="legal-page__header">
          <h1 className="legal-page__title">{document.title}</h1>
          <p className="legal-page__updated">Last Updated : {document.lastUpdated}</p>
          {introductionParagraphs.map((paragraph) => (
            <p key={paragraph} className="legal-page__intro">
              {paragraph}
            </p>
          ))}
        </header>

        <div className="legal-page__sections">
          {document.sections.map((section) => (
            <article key={section.heading} className="legal-page__section">
              {section.majorHeading ? (
                <h2 className="legal-page__major-heading">{section.majorHeading}</h2>
              ) : (
                <h3 className="legal-page__heading">{section.heading}</h3>
              )}
              {section.majorHeading && section.heading !== section.majorHeading ? (
                <h3 className="legal-page__heading">{section.heading}</h3>
              ) : null}
              <div className="legal-page__section-body">
                {section.blocks.map((block, index) => (
                  <LegalBlockContent key={`${section.heading}-${index}`} block={block} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
