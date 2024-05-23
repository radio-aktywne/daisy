"use client";

import {
  Center,
  Loader,
  Pagination,
  Stack,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { labels } from "../../config/labels";
import { useHydrated, useTaskIndex } from "../../hooks";
import { TaskListWidgetProps } from "./TaskListWidget.types";
import { TaskTile } from "./TaskTile";

export function TaskListWidget({
  index: prefetchedIndex,
  type,
  perPage = 5,
}: TaskListWidgetProps) {
  const [page, setPage] = useState(1);

  const hydrated = useHydrated();

  const { index: currentIndex } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;
  const tasks = index[type];

  if (!hydrated) return <Loader />;

  if (tasks.length === 0) {
    return <Title>{labels.widgets.taskList.empty.text}</Title>;
  }

  const pages = Math.ceil(tasks.length / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paged = tasks.slice(start, end);

  return (
    <Stack>
      <Stack>
        {paged.map((id) => (
          <UnstyledButton key={id} component={Link} href={`/tasks/${id}`}>
            <TaskTile id={id} labels={labels.widgets.taskList.tiles.task} />
          </UnstyledButton>
        ))}
      </Stack>
      <Center>
        <Pagination value={page} onChange={setPage} total={pages} withEdges />
      </Center>
    </Stack>
  );
}
