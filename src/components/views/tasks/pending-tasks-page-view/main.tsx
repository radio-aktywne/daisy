import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskListWidget } from "../../../widgets/task-list-widget";
import { PendingTasksPageViewInput } from "./types";

export async function PendingTasksPageView({}: PendingTasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskListWidget index={index} type="pending" />;
}
