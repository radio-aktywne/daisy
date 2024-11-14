"use server";

import {
  getTaskIndex as internalGetTaskIndex,
  MantisError,
} from "../../../lib/mantis/get-task-index";
import { errors } from "./constants";
import { GetTaskIndexInput, GetTaskIndexOutput } from "./types";

export async function getTaskIndex({}: GetTaskIndexInput = {}): Promise<GetTaskIndexOutput> {
  try {
    const { index } = await internalGetTaskIndex();
    return { data: index };
  } catch (error) {
    if (error instanceof MantisError) return { error: errors.generic };
    throw error;
  }
}
