"use server";

import {
  getTask as internalGetTask,
  MantisError,
  TaskNotFoundError,
} from "../../../lib/mantis/get-task";
import { errors } from "./constants";
import { inputSchema } from "./schemas";
import { GetTaskInput, GetTaskOutput } from "./types";

export async function getTask(input: GetTaskInput): Promise<GetTaskOutput> {
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
