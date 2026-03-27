import {
  TasksCleanCleanRequestSchema,
  TasksCleanCleanResponseSchema,
} from "../../../../../../../apis/mantis/schemas";

export const Schemas = {
  Input: TasksCleanCleanRequestSchema.shape.body,
  Output: TasksCleanCleanResponseSchema,
};
