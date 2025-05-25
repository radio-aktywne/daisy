import { Text } from "@mantine/core";

import { TaskItemInput } from "./types";

export function TaskItem({ id, status }: TaskItemInput) {
  return (
    <Text
      c={
        {
          cancelled: "ra-yellow",
          completed: "ra-green",
          failed: "ra-red",
          pending: "grey",
          running: "ra-blue",
        }[status]
      }
      fw="bold"
      size="xs"
    >
      {id}
    </Text>
  );
}
