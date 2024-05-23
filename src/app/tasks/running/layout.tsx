import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.running.title,
  description: labels.pages.running.description,
};

export type RunningLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RunningLayout({ children }: RunningLayoutProps) {
  return children;
}
