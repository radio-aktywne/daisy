import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getTask } from "../../actions";
import { Task, UseTaskProps } from "./useTask.types";

export function useTask({ id, interval = 1000 * 5 }: UseTaskProps) {
  const [task, setTask] = useState<Task>();

  const fetchTask = useCallback(async () => {
    try {
      const response = await getTask({ id });
      if (response.error !== undefined) throw new Error(response.error);
      setTask(response.data);
    } catch (error) {
      setTask(undefined);
    }
  }, [id]);

  const { start, stop } = useInterval(fetchTask, interval);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { task, fetchTask };
}
