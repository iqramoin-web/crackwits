import type { Metadata } from "next";
import { BriefUsPage } from "@/components/pages/BriefUsPage";

export const metadata: Metadata = {
  title: "Crackwits — Contact",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <BriefUsPage />;
}
