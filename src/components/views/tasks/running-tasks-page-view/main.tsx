import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskListWidget } from "../../../widgets/task-list-widget";
import { RunningTasksPageViewInput } from "./types";

export async function RunningTasksPageView({}: RunningTasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskListWidget index={index} type="running" />;
}
