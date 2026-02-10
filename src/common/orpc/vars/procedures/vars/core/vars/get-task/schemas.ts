import {
  TasksIdGetRequestSchema,
  TasksIdGetResponseSchema,
} from "../../../../../../../apis/mantis/schemas";

export const Schemas = {
  Input: TasksIdGetRequestSchema.shape.path,
  Output: TasksIdGetResponseSchema,
};
