import { BRANDS } from "./brands";
import type { CaseStudy } from "./types";
import { CASE_STUDY_MODULES } from "./case-studies";

export const CASE_STUDIES: CaseStudy[] = BRANDS.map((b) => CASE_STUDY_MODULES[b.slug]).filter(
  (study): study is CaseStudy => Boolean(study),
);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
