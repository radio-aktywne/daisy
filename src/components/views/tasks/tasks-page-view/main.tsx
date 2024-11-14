import { getTaskIndex } from "../../../../lib/mantis/get-task-index";
import { TaskIndexWidget } from "../../../widgets/task-index-widget";
import { TasksPageViewInput } from "./types";

export async function TasksPageView({}: TasksPageViewInput) {
  const { index } = await getTaskIndex();

  return <TaskIndexWidget index={index} />;
}
