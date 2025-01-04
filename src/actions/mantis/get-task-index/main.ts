"use server";

import { auth } from "../../../auth";
import { MantisError } from "../../../lib/mantis/errors";
import { getTaskIndex as internalGetTaskIndex } from "../../../lib/mantis/get-task-index";
import { errors } from "./constants";
import { GetTaskIndexInput, GetTaskIndexOutput } from "./types";

export async function getTaskIndex({}: GetTaskIndexInput = {}): Promise<GetTaskIndexOutput> {
  const session = await auth.auth();
  if (!session) return { error: errors.unauthorized };

  try {
    const { index } = await internalGetTaskIndex();
    return { data: index };
  } catch (error) {
    if (error instanceof MantisError) return { error: errors.generic };
    throw error;
  }
}
