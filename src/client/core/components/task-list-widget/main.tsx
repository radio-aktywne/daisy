"use client";

import type { Entries } from "type-fest";

import { msg } from "@lingui/core/macro";
import { Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { Center, List, ListItem } from "@radio-aktywne/ui";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useCallback, useState } from "react";

import type { TaskListWidgetInput } from "./types";

import { useLocalization } from "../../../../isomorphic/localization/hooks/use-localization";
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

  const getTaskIndexQuery = useSuspenseQuery(
    orpcClientSideQueryClient.core.getTaskIndex.queryOptions(),
  );

  const tasks = (
    Object.entries(getTaskIndexQuery.data) as Entries<
      typeof getTaskIndexQuery.data
    >
  )
    .flatMap(([status, ids]) => ids.map((id) => ({ id: id, status: status })))
    .filter(({ status }) => filters[status]);

  const handleToggleFilter = useCallback(
    (status: keyof typeof filters) => {
      setFilters((previous) => ({ ...previous, [status]: !previous[status] }));
      void getTaskIndexQuery.refetch();
    },
    [getTaskIndexQuery.refetch, setFilters],
  );

  return (
    <Stack mah="100%" w="100%">
      <Center style={{ height: "auto", overflow: "unset" }}>
        <UnstyledButton component={Link} href="/tasks">
          <Title>{localization.localize(msg({ message: "Tasks" }))}</Title>
        </UnstyledButton>
      </Center>
      {tasks.length === 0 ? (
        <Center style={{ height: "auto", overflow: "unset" }}>
          <Text>{localization.localize(msg({ message: "No tasks" }))}</Text>
        </Center>
      ) : (
        <List style={{ overflowY: "auto" }}>
          {tasks.map(({ id, status }) => (
            <UnstyledButton component={Link} href={`/tasks/${id}`} key={id}>
              <ListItem>
                <TaskItem id={id} status={status} />
              </ListItem>
            </UnstyledButton>
          ))}
        </List>
      )}
      <FiltersPanel filters={filters} onToggleFilter={handleToggleFilter} />
    </Stack>
  );
}
