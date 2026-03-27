"use client";

import type { Entries } from "type-fest";

import { msg } from "@lingui/core/macro";
import { Button, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { List, ListItem } from "@radio-aktywne/ui";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { TaskListWidgetInput } from "./types";

import { useLocalization } from "../../../../isomorphic/localization/hooks/use-localization";
import { useNotifications } from "../../../../isomorphic/notifications/hooks/use-notifications";
import { orpcClientSideQueryClient } from "../../../orpc/vars/clients";
import { FiltersPanel } from "./components/filters-panel";
import { TaskItem } from "./components/task-item";

export function TaskListWidget({}: TaskListWidgetInput) {
  const [filters, setFilters] = useState({
    cancelled: true,
    completed: true,
    failed: true,
    pending: true,
    running: true,
  });

  const { localization } = useLocalization();
  const { notifications } = useNotifications();

  const getTaskIndexQuery = useSuspenseQuery(
    orpcClientSideQueryClient.core.getTaskIndex.queryOptions(),
  );

  const cleanTasksMutation = useMutation(
    orpcClientSideQueryClient.core.cleanTasks.mutationOptions({
      meta: { awaits: [orpcClientSideQueryClient.core.getTaskIndex.key()] },
    }),
  );

  const handleToggleFilter = useCallback(
    (status: keyof typeof filters) => {
      setFilters((previous) => ({ ...previous, [status]: !previous[status] }));
      void getTaskIndexQuery.refetch();
    },
    [getTaskIndexQuery.refetch, setFilters],
  );

  const handleClean = useCallback(async () => {
    try {
      await cleanTasksMutation.mutateAsync({
        strategy: { parameters: {}, type: "all" },
      });
    } catch {
      notifications.error({
        message: msg({ message: "Failed to clean tasks" }),
      });
    }
  }, [cleanTasksMutation.mutateAsync, notifications]);

  const tasks = getTaskIndexQuery.data;

  const filteredTasks = (
    Object.entries(getTaskIndexQuery.data) as Entries<
      typeof getTaskIndexQuery.data
    >
  )
    .flatMap(([status, ids]) => ids.map((id) => ({ id: id, status: status })))
    .filter(({ status }) => filters[status]);

  return (
    <Stack h="100%" w="100%">
      <UnstyledButton component={Link} href="/tasks">
        <Title ta="center">
          {localization.localize(msg({ message: "Tasks" }))}
        </Title>
      </UnstyledButton>
      {filteredTasks.length === 0 ? (
        <Text py="sm" size="xs" ta="center">
          {localization.localize(msg({ message: "No tasks" }))}
        </Text>
      ) : (
        <List style={{ overflowY: "auto" }}>
          {filteredTasks.map(({ id, status }) => (
            <UnstyledButton component={Link} href={`/tasks/${id}`} key={id}>
              <ListItem>
                <TaskItem id={id} status={status} />
              </ListItem>
            </UnstyledButton>
          ))}
        </List>
      )}
      <FiltersPanel filters={filters} onToggleFilter={handleToggleFilter} />
      <Button
        disabled={
          tasks.cancelled.length === 0 &&
          tasks.completed.length === 0 &&
          tasks.failed.length === 0
        }
        loading={cleanTasksMutation.isPending}
        onClick={handleClean}
        style={{ flexShrink: 0 }}
      >
        {localization.localize(msg({ message: "Clean" }))}
      </Button>
    </Stack>
  );
}
