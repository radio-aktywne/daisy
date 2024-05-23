import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.completed.title,
  description: labels.pages.completed.description,
};

export type CompletedLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function CompletedLayout({ children }: CompletedLayoutProps) {
  return children;
}
