import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskListWidget } from "../../../widgets/task-list-widget";
import { FailedTasksPageViewInput } from "./types";

export async function FailedTasksPageView({}: FailedTasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskListWidget index={index} type="failed" />;
}
