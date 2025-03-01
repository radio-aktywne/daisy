import { useInterval } from "@mantine/hooks";
import "client-only";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getTask } from "../../../actions/mantis/get-task";
import { UseTaskInput, UseTaskOutput, UseTaskState } from "./types";

export function useTask({
  id,
  interval = 1000 * 5,
}: UseTaskInput): UseTaskOutput {
  const [state, setState] = useState<UseTaskState>({ loading: true });

  const refresh = useCallback(async () => {
    const { data, error } = await getTask({ id: id });
    if (error) setState({ error: error, loading: false });
    else setState({ data: data, loading: false });
  }, [id]);

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
