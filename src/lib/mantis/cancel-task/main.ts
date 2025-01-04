import "server-only";

import { mantis } from "../../../services/mantis";
import { MantisError } from "../errors";
import { TaskNotFoundError } from "./errors";
import { CancelTaskInput } from "./types";

export async function cancelTask({ id }: CancelTaskInput): Promise<void> {
  const { error, response } = await mantis.DELETE("/tasks/{id}", {
    params: { path: { id } },
  });

  if (error || !response.ok) {
    if (response.status === 404) throw new TaskNotFoundError();
    throw new MantisError();
  }
}
