import { GetTaskIndexOutput } from "../../../../../lib/mantis/get-task-index";

export type TaskItemInput = {
  id: string;
  status: keyof GetTaskIndexOutput["index"];
};
