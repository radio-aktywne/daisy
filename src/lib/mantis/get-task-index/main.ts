import "server-only";

import { mantis } from "../../../services/mantis";
import { MantisError } from "./errors";
import { GetTaskIndexInput, GetTaskIndexOutput } from "./types";

export async function getTaskIndex({}: GetTaskIndexInput = {}): Promise<GetTaskIndexOutput> {
  const { data, error } = await mantis.GET("/tasks");

  if (error) throw new MantisError();

  return { index: data };
}
