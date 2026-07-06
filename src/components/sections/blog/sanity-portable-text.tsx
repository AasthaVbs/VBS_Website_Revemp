"use client";

import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { sanityDataset, sanityProjectId } from "@/lib/sanity-env";
import { sanityImageUrl } from "@/lib/sanity-blog";
import { cn } from "@/lib/utils";

type SanityPortableTextProps = {
  value: unknown[];
  previewMode?: boolean;
};

function getSanityFileUrl(assetRef?: string) {
  if (!assetRef) return null;
  const parts = assetRef.split("-");
  if (parts.length < 3) return null;
  const id = parts[1];
  const format = parts[parts.length - 1];
  return `https://cdn.sanity.io/files/${sanityProjectId}/${sanityDataset}/${id}.${format}?dl=`;
}

function buildPortableTextComponents(previewMode?: boolean): PortableTextComponents {
  return {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const src = previewMode
          ? sanityImageUrl(value)
          : value.asset.url || sanityImageUrl(value);

        return (
          <div className="relative my-6 aspect-[754/446] w-full overflow-hidden rounded-[10px]">
            <Image
              src={src}
              alt={value.alt || "Blog content image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 754px"
            />
          </div>
        );
      },
      table: ({ value }) => {
        const rows = value?.rows || [];
        if (!rows.length) return null;
        const [head, ...bodyRows] = rows;

        return (
          <div className="my-6 overflow-hidden rounded-[10px] border border-[#CBCCCD]">
            <table className="w-full text-left text-[16px]">
              {head ? (
                <thead className="bg-[#111111] text-white">
                  <tr>
                    {(head.cells || []).map((cell: { content?: string; _key?: string }, index: number) => (
                      <th key={cell._key || index} className="p-5">
                        {cell.content}
                      </th>
                    ))}
                  </tr>
                </thead>
              ) : null}
              <tbody>
                {bodyRows.map((row: { _key?: string; cells?: Array<{ content?: string; _key?: string }> }) => (
                  <tr key={row._key} className="border-t border-[#CBCCCD]">
                    {(row.cells || []).map((cell, index) => (
                      <td key={cell._key || index} className="p-5 text-[#808080]">
                        {cell.content}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
      downloadBlock: ({ value }) => {
        const assetId = value?.fileUpload?.asset?._ref || value?.fileUpload?.asset?._id;
        const fileUrl =
          value?.downloadUrl ||
          (assetId ? getSanityFileUrl(assetId) : null);

        if (!fileUrl) return null;

        return (
          <div className="my-6 flex flex-wrap items-center justify-center gap-2.5 rounded-[10px] border border-[#D70416] bg-[#FFF8F8] p-5">
            <span className="text-[16px] text-[#111111]">{value.modalHeading || "Download"}</span>
            <Link
              href={fileUrl}
              className="text-[16px] font-medium text-[#D70416] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.buttonText || "Download"}
            </Link>
          </div>
        );
      },
      rawHtml: ({ value }) => {
        const html = value?.code?.code;
        if (!html) return null;
        return <div className="my-6" dangerouslySetInnerHTML={{ __html: html }} />;
      },
      cta: ({ value }) => (
        <div className="my-8 flex flex-col items-center justify-between gap-4 rounded-[10px] bg-[#111111] p-6 text-white sm:flex-row">
          <p className="text-[20px]">{value.title}</p>
          {value.buttonUrl ? (
            <Link
              href={value.buttonUrl}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[16px] font-semibold text-[#111111]"
            >
              {value.buttonText || "Learn more"}
            </Link>
          ) : null}
        </div>
      ),
      readMore: ({ value }) =>
        value?.url ? (
          <div className="my-6 rounded-[10px] border border-[#CBCCCD] p-5">
            <p className="text-[16px] text-[#808080]">{value.label}</p>
            <Link href={value.url} className="text-[16px] font-medium text-[#D70416] underline">
              {value.linkText}
            </Link>
          </div>
        ) : null,
    },
    block: {
      h2: ({ children, value }) => (
        <h2
          id={value?._key ? `toc-${value._key}` : undefined}
          className="scroll-mt-28 text-[24px] font-medium capitalize text-[#111111]"
        >
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="scroll-mt-28 text-[20px] font-medium capitalize text-[#111111]">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-[16px] capitalize leading-6 text-[#808080]">{children}</p>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const href = value?.href || "#";
        const isExternal = href.startsWith("http");
        return (
          <Link
            href={href}
            className={cn("text-[#111111] underline")}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {children}
          </Link>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc space-y-2 pl-6 text-[16px] leading-6 text-[#808080]">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal space-y-2 pl-6 text-[16px] leading-6 text-[#808080]">{children}</ol>
      ),
    },
  };
}

export function SanityPortableText({ value, previewMode }: SanityPortableTextProps) {
  const components = useMemo(() => buildPortableTextComponents(previewMode), [previewMode]);

  if (!Array.isArray(value) || !value.length) return null;

  return (
    <div className="flex w-full flex-col gap-[30px]">
      <PortableText value={value as PortableTextBlock[]} components={components} />
    </div>
  );
}
