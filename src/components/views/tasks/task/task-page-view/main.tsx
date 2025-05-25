import { notFound } from "next/navigation";

import { getTask, TaskNotFoundError } from "../../../../../lib/mantis/get-task";
import { TaskWidget } from "../../../../widgets/task-widget";
import { TaskPageViewInput } from "./types";

export async function TaskPageView({ id }: TaskPageViewInput) {
  try {
    const { task } = await getTask({ id: id });

    return <TaskWidget task={task} />;
  } catch (error) {
    if (error instanceof TaskNotFoundError) notFound();
    throw error;
  }
}
