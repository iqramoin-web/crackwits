import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Crackwits — Built to Challenge Convention",
  description: "Crackwits builds work, words and wonders that elevate brands.",
};

export default function Page() {
  return <HomePage />;
}
