import { Group, Space, Title } from "@mantine/core";

import { StateTileInput } from "./types";

export function StateTile({ color, icon: Icon, label, tasks }: StateTileInput) {
  return (
    <Group justify="space-between">
      <Group>
        <Icon color={color} />
        <Title style={{ color: color }}>{label}</Title>
      </Group>
      <Space />
      <Title style={{ color: color }}>{tasks.length}</Title>
    </Group>
  );
}
