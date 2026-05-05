"use client";

import { msg } from "@lingui/core/macro";
import { CodeHighlight } from "@mantine/code-highlight";
import { Button, Stack, Title } from "@mantine/core";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { useCallback } from "react";

import type { TaskWidgetInput } from "./types";

import { isOrpcDefinedError } from "../../../../common/orpc/lib/is-orpc-defined-error";
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

  if (
    isOrpcDefinedError(getTaskQuery.error) &&
    getTaskQuery.error.code === "NOT_FOUND"
  )
    notFound();

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
        message: msg({ message: "Failed to cancel task" }),
      });
      return;
    }

    notifications.success({ message: msg({ message: "Task cancelled" }) });
  }, [
    cancelTaskMutation.mutateAsync,
    id,
    notifications.error,
    notifications.success,
  ]);

  const task = getTaskQuery.data;

  return (
    <Stack h="100%" w="100%">
      <Title ta="center">
        {localization.localize(msg({ message: "Task Details" }))}
      </Title>
      <CodeHighlight
        classNames={{ code: classes.code, codeHighlight: classes.highlight }}
        code={JSON.stringify(task, null, 2)}
        language="json"
        withCopyButton={false}
      />
      <Button
        disabled={!["running", "waiting"].includes(task.status)}
        loading={cancelTaskMutation.isPending}
        mt="auto"
        onClick={handleCancel}
        style={{ flexShrink: 0 }}
      >
        {localization.localize(msg({ message: "Cancel" }))}
      </Button>
    </Stack>
  );
}
