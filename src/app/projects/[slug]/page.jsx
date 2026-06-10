import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectDetail from "@/components/project-detail";
import { projects, getProject, getProjectSlugs } from "@/lib/projects-data";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Krishna T`,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <ProjectDetail project={project} nextProject={nextProject} />
      <Footer />
    </>
  );
}
