import type { Metadata } from "next";
import { GiftRegistryPage } from "@/components/GiftRegistryPage";
import { giftRegistries } from "@/lib/data";

const registry = giftRegistries.luademel;

export const metadata: Metadata = {
  title: `${registry.title} — Tatiane e Felipe`,
  description: registry.description,
};

export default function LuaDeMelPage() {
  return <GiftRegistryPage registry={registry} />;
}
