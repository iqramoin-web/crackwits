import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { COOKIES_POLICY } from "@/content/legal";

export const metadata: Metadata = {
  title: "Crackwits — Cookies",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <LegalPage {...COOKIES_POLICY} />;
}
