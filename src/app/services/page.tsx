import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Crackwits — Services",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <ServicesPage />;
}
