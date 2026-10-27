import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { BRANDS } from "@/content/brands";
import { CASE_STUDIES, getCaseStudy } from "@/content/caseStudies";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  const title = `${study.name} — Case Study | Crackwits`;
  return {
    title,
    description: study.subtitle,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title, description: study.subtitle, images: [study.cover.src], type: "article" },
    robots: study.draft ? { index: false, follow: true } : undefined,
  };
}

export default async function CaseStudyRoute({ params }: { params: Promise<Params> }) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const more = study.more
    .map((slug) => BRANDS.find((b) => b.slug === slug))
    .filter((b): b is (typeof BRANDS)[number] => Boolean(b));

  // Keyed by slug so moving between case studies remounts the page (the
  // heading word reveal rewrites heading text nodes React would otherwise reuse).
  return <CaseStudyPage key={study.slug} study={study} more={more} />;
}
