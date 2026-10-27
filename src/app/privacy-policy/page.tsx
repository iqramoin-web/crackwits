import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRIVACY_POLICY } from "@/content/legal";

export const metadata: Metadata = {
  title: "Crackwits — Privacy Policy",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <LegalPage {...PRIVACY_POLICY} />;
}
