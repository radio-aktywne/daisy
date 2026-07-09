import type { ORPCOutputs } from "../../../../../../common/orpc/types/inferred";

type ListTasksOutput = ORPCOutputs["core"]["listTasks"];

export type TaskItemInput = {
  id: ListTasksOutput[keyof ListTasksOutput][number];
  status: keyof ListTasksOutput;
};
