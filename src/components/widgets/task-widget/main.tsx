"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { CodeHighlight } from "@mantine/code-highlight";
import { Button, Stack } from "@mantine/core";
import { useCallback, useEffect } from "react";

import { cancelTask } from "../../../actions/mantis/cancel-task";
import { useTask } from "../../../hooks/mantis/use-task";
import { useToasts } from "../../../hooks/use-toasts";
import classes from "./styles.module.css";
import { TaskWidgetInput } from "./types";

export function TaskWidget({ task: prefetchedTask }: TaskWidgetInput) {
  const { _ } = useLingui();
  const toasts = useToasts();

  const {
    data: currentTask,
    error,
    refresh,
  } = useTask({
    id: prefetchedTask.task.id,
  });
  const task = currentTask ?? prefetchedTask;

  const handleCancel = useCallback(async () => {
    const { error: cancelError } = await cancelTask({ id: task.task.id });
    await refresh();

    if (cancelError) toasts.error(_(cancelError));
    else toasts.success(_(msg({ message: "Task cancelled" })));
  }, [_, refresh, task, toasts]);

  useEffect(() => {
    if (error) toasts.warning(_(error));
  }, [_, error, toasts]);

  return (
    <Stack>
      <CodeHighlight
        className={classes.code}
        code={JSON.stringify(task, null, 2)}
        language="json"
        withCopyButton={false}
      />
      <Button
        disabled={["cancelled", "completed", "failed"].includes(task.status)}
        onClick={handleCancel}
      >
        {_(msg({ message: "Cancel" }))}
      </Button>
    </Stack>
  );
}
