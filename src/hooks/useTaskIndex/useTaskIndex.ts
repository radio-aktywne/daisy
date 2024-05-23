import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getTaskIndex } from "../../actions";
import { TaskIndex, UseTaskIndexProps } from "./useTaskIndex.types";

export function useTaskIndex({ interval = 1000 * 5 }: UseTaskIndexProps = {}) {
  const [index, setIndex] = useState<TaskIndex>();

  const fetchIndex = useCallback(async () => {
    try {
      const response = await getTaskIndex();
      if (response.error !== undefined) throw new Error(response.error);
      setIndex(response.data);
    } catch (error) {
      setIndex(undefined);
    }
  }, []);

  const { start, stop } = useInterval(fetchIndex, interval);

  useEffect(() => {
    fetchIndex();
  }, [fetchIndex]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { index, fetchIndex };
}
