"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import {
  Center,
  Pagination,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useTaskIndex } from "../../../hooks/mantis/use-task-index";
import { useToasts } from "../../../hooks/use-toasts";
import { TaskTile } from "./components/task-tile";
import { TaskListWidgetInput } from "./types";

export function TaskListWidget({
  index: prefetchedIndex,
  perPage = 5,
  type,
}: TaskListWidgetInput) {
  const [page, setPage] = useState(1);

  const { _ } = useLingui();
  const toasts = useToasts();

  const { data: currentIndex, error } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;
  const tasks = index[type];

  useEffect(() => {
    if (error) toasts.warning(_(error));
  }, [_, error, toasts]);

  if (tasks.length === 0) {
    return <Title>{_(msg({ message: "No tasks." }))}</Title>;
  }

  const pages = Math.ceil(tasks.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paged = tasks.slice(start, end);

  return (
    <Stack>
      <Stack>
        {paged.map((id) => (
          <UnstyledButton component={Link} href={`/tasks/${id}`} key={id}>
            <TaskTile id={id} />
          </UnstyledButton>
        ))}
      </Stack>
      <Center>
        <Pagination onChange={setPage} total={pages} value={page} withEdges />
      </Center>
    </Stack>
  );
}
