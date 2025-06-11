import "server-only";

import { mantis } from "../../../services/mantis";
import { MantisError } from "../errors";
import { GetTaskIndexInput, GetTaskIndexOutput } from "./types";

export async function getTaskIndex({}: GetTaskIndexInput = {}): Promise<GetTaskIndexOutput> {
  const { data, error, response } = await mantis.GET("/tasks", {
    cache: "no-store",
  });

  if (error || !response.ok) throw new MantisError();

  return { index: data };
}
