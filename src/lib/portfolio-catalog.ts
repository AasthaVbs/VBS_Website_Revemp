import type { PortfolioProjectItem } from "@/constants/portfolio-page-content";
import { allPortfolioProjects, toPortfolioHref } from "@/constants/projects-catalog-content";

/** Map catalog project rows to portfolio page card shape. */
export function catalogProjectToPortfolioCard(
  project: (typeof allPortfolioProjects)[number],
): PortfolioProjectItem {
  const projectType =
    project.category === "MEP"
      ? "MEP BIM"
      : project.category === "Architecture"
        ? "Architecture"
        : project.category;

  return {
    id: project.id,
    title: project.title,
    description: project.excerpt,
    image: project.image,
    projectType,
    location: project.location || "USA",
    projectSize: project.category,
    href: toPortfolioHref(project.href),
  };
}

/** Full project list for /portfolio/all-projects */
export const allPortfolioProjectCards: PortfolioProjectItem[] =
  allPortfolioProjects.map(catalogProjectToPortfolioCard);

/** Portfolio projects surfaced as Case Studies in resources browse + filters. */
export function mapPortfolioProjectsAsCaseStudies(
  projects: typeof allPortfolioProjects = allPortfolioProjects,
) {
  return projects.map((project) => ({
    ...project,
    href: toPortfolioHref(project.href),
    type: "Case Studies" as const,
    badgeLabel: "Case Study",
    category: project.category,
  }));
}
