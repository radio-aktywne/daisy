import { GetTaskIndexOutput } from "../../../lib/mantis/get-task-index";

export type TaskListWidgetInput = {
  index: GetTaskIndexOutput["index"];
  perPage?: number;
  type: keyof GetTaskIndexOutput["index"];
};
