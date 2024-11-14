import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskListWidget } from "../../../widgets/task-list-widget";
import { CompletedTasksPageViewInput } from "./types";

export async function CompletedTasksPageView({}: CompletedTasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskListWidget index={index} type="completed" />;
}
