import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Crackwits — About",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <AboutPage />;
}
