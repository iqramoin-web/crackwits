import type { Metadata } from "next";
import { InsightsPage } from "@/components/pages/InsightsPage";

export const metadata: Metadata = {
  title: "Crackwits — Insights",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <InsightsPage />;
}
