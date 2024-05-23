import { Group, Space, Title } from "@mantine/core";
import { StateTileProps } from "./StateTile.types";

export function StateTile({
  tasks,
  color,
  icon: Icon,
  labels,
}: StateTileProps) {
  return (
    <Group justify="space-between">
      <Group>
        <Icon color={color} />
        <Title style={{ color: color }}>{labels.text}</Title>
      </Group>
      <Space />
      <Title style={{ color: color }}>{tasks.length}</Title>
    </Group>
  );
}
