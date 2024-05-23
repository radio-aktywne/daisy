import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../config/labels";

export const metadata: Metadata = {
  title: labels.pages.tasks.title,
  description: labels.pages.tasks.description,
};

export type TasksLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function TasksLayout({ children }: TasksLayoutProps) {
  return children;
}
