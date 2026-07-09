import * as z from "zod";

import { TasksListResponseSchema } from "../../../../../../../apis/mantis/schemas";

export const Schemas = {
  Input: z.undefined(),
  Output: TasksListResponseSchema,
};
