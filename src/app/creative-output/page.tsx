import type { Metadata } from "next";
import { CreativeOutputPage } from "@/components/pages/CreativeOutputPage";

export const metadata: Metadata = {
  title: "Crackwits — Creative Output",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <CreativeOutputPage />;
}
