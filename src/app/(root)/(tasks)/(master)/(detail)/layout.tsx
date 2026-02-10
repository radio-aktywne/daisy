import { connection } from "next/server";

import type { LayoutInput } from "../../../../types";
import type { Keys } from "./types";

import { TasksDetailLayoutView } from "./layout.view";

export default async function TasksDetailLayout({
  children,
}: LayoutInput<Keys.Path, Keys.Slots>) {
  await connection();

  return <TasksDetailLayoutView>{children}</TasksDetailLayoutView>;
}
