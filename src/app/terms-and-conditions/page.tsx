import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TERMS_AND_CONDITIONS } from "@/content/legal";

export const metadata: Metadata = {
  title: "Crackwits — Terms & Conditions",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <LegalPage {...TERMS_AND_CONDITIONS} />;
}
