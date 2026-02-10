import {
  TasksIdCancelRequestSchema,
  TasksIdCancelResponseSchema,
} from "../../../../../../../apis/mantis/schemas";

export const Schemas = {
  Input: TasksIdCancelRequestSchema.shape.path,
  Output: TasksIdCancelResponseSchema,
};
