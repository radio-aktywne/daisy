import "server-only";

import { mantis } from "../../../services/mantis";
import { MantisError, TaskNotFoundError } from "./errors";
import { CancelTaskInput } from "./types";

export async function cancelTask({ id }: CancelTaskInput): Promise<void> {
  const { error, response } = await mantis.DELETE("/tasks/{id}", {
    params: { path: { id } },
  });

  if (error) {
    if (response.status === 404) throw new TaskNotFoundError();
    throw new MantisError();
  }
}
