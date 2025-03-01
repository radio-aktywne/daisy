"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
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
import { useEffect } from "react";

import { useTaskIndex } from "../../../hooks/mantis/use-task-index";
import { useToasts } from "../../../hooks/use-toasts";
import { StateTile } from "./components/state-tile";
import { TaskIndexWidgetInput } from "./types";

export function TaskIndexWidget({
  index: prefetchedIndex,
}: TaskIndexWidgetInput) {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme("dark");

  const { _ } = useLingui();
  const toasts = useToasts();

  const { data: currentIndex, error } = useTaskIndex();
  const index = currentIndex ?? prefetchedIndex;

  useEffect(() => {
    if (error) toasts.warning(_(error));
  }, [_, error, toasts]);

  return (
    <Stack>
      <UnstyledButton component={Link} href="/tasks/pending">
        <StateTile
          color={
            colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.gray[7]
          }
          icon={IconClock}
          label={_(msg({ message: "Pending" }))}
          tasks={index.pending}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/running">
        <StateTile
          color={
            colorScheme === "dark" ? theme.colors.blue[3] : theme.colors.blue[7]
          }
          icon={IconCircleArrowRight}
          label={_(msg({ message: "Running" }))}
          tasks={index.running}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/cancelled">
        <StateTile
          color={
            colorScheme === "dark"
              ? theme.colors.yellow[3]
              : theme.colors.yellow[7]
          }
          icon={IconCircleOff}
          label={_(msg({ message: "Cancelled" }))}
          tasks={index.cancelled}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/failed">
        <StateTile
          color={
            colorScheme === "dark" ? theme.colors.red[3] : theme.colors.red[7]
          }
          icon={IconCircleX}
          label={_(msg({ message: "Failed" }))}
          tasks={index.failed}
        />
      </UnstyledButton>
      <UnstyledButton component={Link} href="/tasks/completed">
        <StateTile
          color={
            colorScheme === "dark"
              ? theme.colors.green[3]
              : theme.colors.green[7]
          }
          icon={IconCircleCheck}
          label={_(msg({ message: "Completed" }))}
          tasks={index.completed}
        />
      </UnstyledButton>
    </Stack>
  );
}
