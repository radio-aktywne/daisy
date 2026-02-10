import type { ORPCOutputs } from "../../../../../../common/orpc/types/inferred";

type GetTaskIndexOutput = ORPCOutputs["core"]["getTaskIndex"];

export type TaskItemInput = {
  id: GetTaskIndexOutput[keyof GetTaskIndexOutput][number];
  status: keyof GetTaskIndexOutput;
};
