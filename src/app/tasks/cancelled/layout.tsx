import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.cancelled.title,
  description: labels.pages.cancelled.description,
};

export type CancelledLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function CancelledLayout({ children }: CancelledLayoutProps) {
  return children;
}
