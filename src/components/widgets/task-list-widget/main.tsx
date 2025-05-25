"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Center, Stack, Title, UnstyledButton } from "@mantine/core";
import { List, ListItem } from "@radio-aktywne/ui";
import Link from "next/link";
import { useEffect } from "react";

import { useTaskIndex } from "../../../hooks/mantis/use-task-index";
import { useToasts } from "../../../hooks/use-toasts";
import { TaskItem } from "./components/task-item";
import { TaskListWidgetInput } from "./types";

export function TaskListWidget({
  index: prefetchedIndex,
}: TaskListWidgetInput) {
  const { _ } = useLingui();
  const toasts = useToasts();

  const { data: currentIndex, error } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;
  const tasks = [
    ...index.pending.map((id) => ({ id, status: "pending" as const })),
    ...index.running.map((id) => ({ id, status: "running" as const })),
    ...index.cancelled.map((id) => ({ id, status: "cancelled" as const })),
    ...index.failed.map((id) => ({ id, status: "failed" as const })),
    ...index.completed.map((id) => ({ id, status: "completed" as const })),
  ];

  useEffect(() => {
    if (error) toasts.warning(_(error));
  }, [_, error, toasts]);

  if (tasks.length === 0) {
    return <Title>{_(msg({ message: "No tasks." }))}</Title>;
  }

  return (
    <Stack mah="100%" w="100%">
      <Center>
        <UnstyledButton component={Link} href="/tasks">
          <Title>{_(msg({ message: "Tasks" }))}</Title>
        </UnstyledButton>
      </Center>
      <List style={{ overflowY: "auto" }}>
        {tasks.map(({ id, status }) => (
          <UnstyledButton component={Link} href={`/tasks/${id}`} key={id}>
            <ListItem>
              <TaskItem id={id} status={status} />
            </ListItem>
          </UnstyledButton>
        ))}
      </List>
    </Stack>
  );
}
