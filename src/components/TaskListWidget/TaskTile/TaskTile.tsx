import { Group, Title } from "@mantine/core";
import { TaskTileProps } from "./TaskTile.types";

export function TaskTile({ id, labels }: TaskTileProps) {
  return (
    <Group>
      <Title>{labels.text(id)}</Title>
    </Group>
  );
}
