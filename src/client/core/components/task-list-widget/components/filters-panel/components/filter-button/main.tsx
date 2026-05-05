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
        autoContrast={false}
        c={enabled ? "black" : "white"}
        color={color}
        flex={1}
        onClick={onClick}
        size="input-sm"
        variant={enabled ? "filled" : "subtle"}
      >
        <Icon />
      </ActionIcon>
    </Tooltip>
  );
}
