import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.failed.title,
  description: labels.pages.failed.description,
};

export type FailedLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function FailedLayout({ children }: FailedLayoutProps) {
  return children;
}
