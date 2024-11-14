import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskListWidget } from "../../../widgets/task-list-widget";
import { CancelledTasksPageViewInput } from "./types";

export async function CancelledTasksPageView({}: CancelledTasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskListWidget index={index} type="cancelled" />;
}
