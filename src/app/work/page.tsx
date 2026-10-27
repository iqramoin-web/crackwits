import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Crackwits — Work",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <WorkPage />;
}
