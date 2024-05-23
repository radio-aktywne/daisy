import type { Metadata } from "next";
import { ReactNode } from "react";
import { labels } from "../../../config/labels";

type TaskLayoutParams = Readonly<{
  id: string;
}>;

export type TaskLayoutProps = Readonly<{
  children: ReactNode;
  params: TaskLayoutParams;
}>;

export async function generateMetadata({
  params,
}: TaskLayoutProps): Promise<Metadata> {
  return {
    title: labels.pages.task.title(params.id),
    description: labels.pages.task.description,
  };
}

export default function TaskLayout({ children }: TaskLayoutProps) {
  return children;
}
