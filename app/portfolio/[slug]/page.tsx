import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPortfolioProjects } from "@/constants/projects-catalog-content";
import { loadProjectPage, projectPageSlugs } from "@/lib/project-pages-registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function projectMetaForSlug(slug: string) {
  return allPortfolioProjects.find((project) => project.id === slug);
}

export function generateStaticParams() {
  return projectPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMetaForSlug(slug);

  return {
    title: project
      ? `${project.title} | Virtual Building Studio`
      : "Project Case Study | Virtual Building Studio",
    description:
      project?.excerpt ||
      "Explore coordinated BIM and MEP project delivery from Virtual Building Studio.",
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await loadProjectPage(slug);

  if (!module) {
    notFound();
  }

  const Page = module.default;

  return <Page />;
}
