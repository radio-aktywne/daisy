"use server";

import { getSession } from "../../../lib/auth/get-session";
import {
  cancelTask as internalCancelTask,
  TaskNotFoundError,
} from "../../../lib/mantis/cancel-task";
import { MantisError } from "../../../lib/mantis/errors";
import { errors } from "./constants";
import { inputSchema } from "./schemas";
import { CancelTaskInput, CancelTaskOutput } from "./types";

export async function cancelTask(
  input: CancelTaskInput,
): Promise<CancelTaskOutput> {
  const { session } = await getSession();
  if (!session) return { error: errors.unauthorized };

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
