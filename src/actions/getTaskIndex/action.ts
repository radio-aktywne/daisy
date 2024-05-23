"use server";

import { emischeduler } from "../../api";
import { GetTaskIndexProps } from "./types";

const errorMessage = "Getting task index failed.";

export async function getTaskIndex({}: GetTaskIndexProps = {}) {
  try {
    const { data, error } = await emischeduler.GET("/tasks");

    if (error) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
