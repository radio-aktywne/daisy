"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Center, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { List, ListItem } from "@radio-aktywne/ui";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { useTaskIndex } from "../../../hooks/mantis/use-task-index";
import { useToasts } from "../../../hooks/use-toasts";
import { FiltersPanel } from "./components/filters-panel";
import { TaskItem } from "./components/task-item";
import { TaskListWidgetInput } from "./types";

export function TaskListWidget({
  index: prefetchedIndex,
}: TaskListWidgetInput) {
  const [filters, setFilters] = useState({
    cancelled: true,
    completed: true,
    failed: true,
    pending: true,
    running: true,
  });

  const { _ } = useLingui();
  const toasts = useToasts();

  const { data: currentIndex, error } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;
  const tasks = [
    ...(filters.pending
      ? index.pending.map((id) => ({ id, status: "pending" as const }))
      : []),
    ...(filters.running
      ? index.running.map((id) => ({ id, status: "running" as const }))
      : []),
    ...(filters.cancelled
      ? index.cancelled.map((id) => ({ id, status: "cancelled" as const }))
      : []),
    ...(filters.failed
      ? index.failed.map((id) => ({ id, status: "failed" as const }))
      : []),
    ...(filters.completed
      ? index.completed.map((id) => ({ id, status: "completed" as const }))
      : []),
  ];

  useEffect(() => {
    if (error) toasts.warning(_(error));
  }, [_, error, toasts]);

  const handleToggleFilter = useCallback((status: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  }, []);

  return (
    <Stack mah="100%" w="100%">
      <Center>
        <UnstyledButton component={Link} href="/tasks">
          <Title>{_(msg({ message: "Tasks" }))}</Title>
        </UnstyledButton>
      </Center>
      {tasks.length === 0 ? (
        <Center>
          <Text>{_(msg({ message: "No tasks" }))}</Text>
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
