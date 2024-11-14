"use server";

import {
  cancelTask as internalCancelTask,
  MantisError,
  TaskNotFoundError,
} from "../../../lib/mantis/cancel-task";
import { errors } from "./constants";
import { inputSchema } from "./schemas";
import { CancelTaskInput, CancelTaskOutput } from "./types";

export async function cancelTask(
  input: CancelTaskInput,
): Promise<CancelTaskOutput> {
  const parsed = inputSchema.safeParse(input);
  if (!parsed.success) return { error: errors.invalidInput };

  try {
    await internalCancelTask({ id: parsed.data.id });
    return {};
  } catch (error) {
    if (error instanceof TaskNotFoundError) return { error: errors.notFound };
    if (error instanceof MantisError) return { error: errors.generic };
    throw error;
  }
}
