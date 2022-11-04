import { useEffect, useState } from "react";
import { emischedulerApi, Task } from "../lib/api";
import { useInterval } from "@mantine/hooks";
import { AxiosError } from "axios";

export default function useTask(name: string) {
  const [task, setTask] = useState<Task | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const interval = useInterval(() => {
    emischedulerApi
      .task({ taskName: name })
      .then((task) => {
        setTask(task.data.task);
        setLoading(false);
      })
      .catch((err: AxiosError<any>) => {
        setError(err.response?.data?.detail || err.message);
        setLoading(false);
      });
  }, 1000);

  useEffect(() => {
    interval.start();
    return () => interval.stop();
  }, []);

  return { task, loading, error };
}
