import { connection } from "next/server";

import type { LoadingInput } from "../../../../types";

import { TasksDetailLoadingView } from "./loading.view";

export default async function TasksDetailLoading({}: LoadingInput) {
  await connection();

  return <TasksDetailLoadingView />;
}
