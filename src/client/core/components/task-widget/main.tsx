"use client";

import { msg } from "@lingui/core/macro";
import { CodeHighlight } from "@mantine/code-highlight";
import { Button, Stack } from "@mantine/core";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useCallback } from "react";

import type { TaskWidgetInput } from "./types";

import { useLocalization } from "../../../../isomorphic/localization/hooks/use-localization";
import { useNotifications } from "../../../../isomorphic/notifications/hooks/use-notifications";
import { orpcClientSideQueryClient } from "../../../orpc/vars/clients";
import classes from "./styles.module.css";

export function TaskWidget({ id }: TaskWidgetInput) {
  const { localization } = useLocalization();
  const { notifications } = useNotifications();

  const getTaskQuery = useSuspenseQuery(
    orpcClientSideQueryClient.core.getTask.queryOptions({
      input: { id: id },
    }),
  );

  const cancelTaskMutation = useMutation(
    orpcClientSideQueryClient.core.cancelTask.mutationOptions({
      meta: {
        awaits: [
          orpcClientSideQueryClient.core.getTask.key({ input: { id: id } }),
        ],
      },
    }),
  );

  const handleCancel = useCallback(async () => {
    try {
      await cancelTaskMutation.mutateAsync({ id: id });
    } catch {
      notifications.error({
        message: msg({ message: "Failed to cancel task." }),
      });
      return;
    }

    notifications.success({ message: msg({ message: "Task cancelled." }) });
  }, [
    cancelTaskMutation.mutateAsync,
    id,
    notifications.error,
    notifications.success,
  ]);

  return (
    <Stack mah="100%" w="100%">
      <CodeHighlight
        classNames={{ code: classes.code, codeHighlight: classes.highlight }}
        code={JSON.stringify(getTaskQuery.data, null, 2)}
        language="json"
        withCopyButton={false}
      />
      <Button
        disabled={["cancelled", "completed", "failed"].includes(
          getTaskQuery.data.status,
        )}
        loading={cancelTaskMutation.isPending}
        onClick={handleCancel}
      >
        {localization.localize(msg({ message: "Cancel" }))}
      </Button>
    </Stack>
  );
}
