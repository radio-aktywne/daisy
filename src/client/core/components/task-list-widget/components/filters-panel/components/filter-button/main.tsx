import { ActionIcon, Tooltip } from "@mantine/core";

import type { FilterButtonInput } from "./types";

export function FilterButton({
  color,
  enabled,
  icon: Icon,
  onClick,
  tooltip,
}: FilterButtonInput) {
  return (
    <Tooltip
      label={tooltip}
      position="bottom"
      transitionProps={{ transition: "scale" }}
    >
      <ActionIcon
        color={color}
        flex={1}
        onClick={onClick}
        variant={enabled ? "filled" : "subtle"}
      >
        <Icon />
      </ActionIcon>
    </Tooltip>
  );
}
