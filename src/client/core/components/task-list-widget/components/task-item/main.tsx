import { Text } from "@mantine/core";

import type { TaskItemInput } from "./types";

export function TaskItem({ id, status }: TaskItemInput) {
  return (
    <Text
      c={
        {
          cancelled: "ra-yellow",
          completed: "ra-green",
          failed: "ra-red",
          queued: "dark.1",
          running: "ra-blue",
          sleeping: "dark.3",
          waiting: "dark.2",
        }[status]
      }
      fw="bold"
      size="xs"
    >
      {id}
    </Text>
  );
}
