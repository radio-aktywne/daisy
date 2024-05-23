import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.pending.title,
  description: labels.pages.pending.description,
};

export type PendingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PendingLayout({ children }: PendingLayoutProps) {
  return children;
}
