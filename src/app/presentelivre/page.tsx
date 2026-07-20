import type { Metadata } from "next";
import { GiftRegistryPage } from "@/components/GiftRegistryPage";
import { giftRegistries } from "@/lib/data";

const registry = giftRegistries.presentelivre;

export const metadata: Metadata = {
  title: `${registry.title} — Tatiane e Felipe`,
  description: registry.description,
};

export default function PresenteLivrePage() {
  return <GiftRegistryPage registry={registry} />;
}
