"use client";

import { CodeHighlight } from "@mantine/code-highlight";
import { useHydrated, useTask } from "../../hooks";
import { TaskWidgetProps } from "./TaskWidget.types";

import { Button, Stack } from "@mantine/core";
import { useCallback } from "react";
import { cancelTask } from "../../actions";
import classes from "./TaskWidget.module.css";

export function TaskWidget({ task: prefetchedTask }: TaskWidgetProps) {
  const hydrated = useHydrated();

  const { task: currentTask, fetchTask } = useTask({
    id: prefetchedTask.task.id,
  });
  const task = currentTask ?? prefetchedTask;

  const handleCancel = useCallback(async () => {
    await cancelTask({ id: task.task.id });
    await fetchTask();
  }, [task, fetchTask]);

  return (
    <Stack>
      <CodeHighlight
        code={JSON.stringify(task, null, 2)}
        className={classes.code}
        language="json"
        withCopyButton={false}
      />
      <Button
        disabled={["cancelled", "failed", "completed"].includes(task.status)}
        loading={!hydrated}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Stack>
  );
}
