"use server";

import { getSession } from "../../../lib/auth/get-session";
import { MantisError } from "../../../lib/mantis/errors";
import {
  getTask as internalGetTask,
  TaskNotFoundError,
} from "../../../lib/mantis/get-task";
import { errors } from "./constants";
import { inputSchema } from "./schemas";
import { GetTaskInput, GetTaskOutput } from "./types";

export async function getTask(input: GetTaskInput): Promise<GetTaskOutput> {
  const { session } = await getSession();
  if (!session) return { error: errors.unauthorized };

  const parsed = inputSchema.safeParse(input);
  if (!parsed.success) return { error: errors.invalidInput };

  try {
    const { task } = await internalGetTask({ id: parsed.data.id });
    return { data: task };
  } catch (error) {
    if (error instanceof TaskNotFoundError) return { error: errors.notFound };
    if (error instanceof MantisError) return { error: errors.generic };
    throw error;
  }
}
