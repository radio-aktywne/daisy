import "server-only";

import { mantis } from "../../../services/mantis";
import { MantisError, TaskNotFoundError } from "./errors";
import { GetTaskInput, GetTaskOutput } from "./types";

export async function getTask({ id }: GetTaskInput): Promise<GetTaskOutput> {
  const { data, error, response } = await mantis.GET("/tasks/{id}", {
    params: { path: { id } },
  });

  if (error) {
    if (response.status === 404) throw new TaskNotFoundError();
    throw new MantisError();
  }

  return { task: data };
}
