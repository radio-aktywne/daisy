"use server";

import { mantis } from "../../api";
import { CancelTaskProps } from "./types";

const errorMessage = "Cancelling task failed.";

export async function cancelTask({ id }: CancelTaskProps) {
  try {
    const { error } = await mantis.DELETE("/tasks/{id}", {
      params: { path: { id } },
    });

    return { error: error ? errorMessage : undefined };
  } catch (error) {
    return { error: errorMessage };
  }
}
