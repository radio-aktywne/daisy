"use server";

import { mantis } from "../../api";
import { GetTaskProps } from "./types";

const errorMessage = "Getting task failed.";

export async function getTask({ id }: GetTaskProps) {
  try {
    const { data, error } = await mantis.GET("/tasks/{id}", {
      params: { path: { id } },
    });

    if (error) {
      if (error.status_code === 404)
        return { data: undefined, error: undefined };

      return { data: undefined, error: errorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
