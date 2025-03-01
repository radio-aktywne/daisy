import { useInterval } from "@mantine/hooks";
import "client-only";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getTaskIndex } from "../../../actions/mantis/get-task-index";
import {
  UseTaskIndexInput,
  UseTaskIndexOutput,
  UseTaskIndexState,
} from "./types";

export function useTaskIndex({
  interval = 1000 * 5,
}: UseTaskIndexInput = {}): UseTaskIndexOutput {
  const [state, setState] = useState<UseTaskIndexState>({ loading: true });

  const refresh = useCallback(async () => {
    const { data, error } = await getTaskIndex();
    if (error) setState({ error: error, loading: false });
    else setState({ data: data, loading: false });
  }, []);

  const { start, stop } = useInterval(refresh, interval);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return useMemo(() => ({ ...state, refresh }), [state, refresh]);
}
