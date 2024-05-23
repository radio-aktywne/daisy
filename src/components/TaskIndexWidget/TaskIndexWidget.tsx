"use client";

import {
  Stack,
  UnstyledButton,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCircleArrowRight,
  IconCircleCheck,
  IconCircleOff,
  IconCircleX,
  IconClock,
} from "@tabler/icons-react";
import Link from "next/link";
import { labels } from "../../config/labels";
import { useTaskIndex } from "../../hooks";
import { StateTile } from "./StateTile";
import { TaskIndexWidgetProps } from "./TaskIndexWidget.types";

export function TaskIndexWidget({
  index: prefetchedIndex,
}: TaskIndexWidgetProps) {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("dark");

  const { index: currentIndex } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;

  return (
    <Stack>
      <UnstyledButton component={Link} href="/tasks/pending">
        <StateTile
          tasks={index.pending}
          color={
            colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.gray[7]
          }
          icon={IconClock}
          labels={labels.widgets.taskIndex.tiles.pending}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/running">
        <StateTile
          tasks={index.running}
          color={
            colorScheme === "dark" ? theme.colors.blue[3] : theme.colors.blue[7]
          }
          icon={IconCircleArrowRight}
          labels={labels.widgets.taskIndex.tiles.running}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/cancelled">
        <StateTile
          tasks={index.cancelled}
          color={
            colorScheme === "dark"
              ? theme.colors.yellow[3]
              : theme.colors.yellow[7]
          }
          icon={IconCircleOff}
          labels={labels.widgets.taskIndex.tiles.cancelled}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/failed">
        <StateTile
          tasks={index.failed}
          color={
            colorScheme === "dark" ? theme.colors.red[3] : theme.colors.red[7]
          }
          icon={IconCircleX}
          labels={labels.widgets.taskIndex.tiles.failed}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/completed">
        <StateTile
          tasks={index.completed}
          color={
            colorScheme === "dark"
              ? theme.colors.green[3]
              : theme.colors.green[7]
          }
          icon={IconCircleCheck}
          labels={labels.widgets.taskIndex.tiles.completed}
        />
      </UnstyledButton>
    </Stack>
  );
}
