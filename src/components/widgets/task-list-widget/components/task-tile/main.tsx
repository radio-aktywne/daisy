import { Group, Title } from "@mantine/core";

import { TaskTileInput } from "./types";

export function TaskTile({ id }: TaskTileInput) {
  return (
    <Group>
      <Title>{id}</Title>
    </Group>
  );
}
