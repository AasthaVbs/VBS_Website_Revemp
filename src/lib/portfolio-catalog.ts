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

/** Full project list for /projects/all-projects */
export const allPortfolioProjectCards: PortfolioProjectItem[] =
  allPortfolioProjects.map(catalogProjectToPortfolioCard);

/** Portfolio projects surfaced as Case Studies in resources browse + filters. */
export function mapPortfolioProjectsAsCaseStudies(
  projects: typeof allPortfolioProjects = allPortfolioProjects,
) {
  return projects.map((project, index) => {
    const service =
      project.category === "MEP" ? "MEP Engineering Firms" : "Architecture Firms";
    const href = toPortfolioHref(project.href);
    const id = href.replace(/^\/projects\//, "").replace(/\/$/, "");

    return {
      id,
      title: project.title,
      excerpt: `${project.category} project highlighting coordinated BIM delivery for architecture and engineering firms.`,
      href,
      image: project.image,
      type: "Case Studies" as const,
      badgeLabel: "Case Study",
      category: project.category,
      location: project.location || null,
      service,
      sortOrder: index + 1,
      publishedTimestamp: 5000 - index,
    };
  });
}
