import { ActionIcon, Tooltip } from "@mantine/core";

import { FiltersButtonInput } from "./types";

export function FiltersButton({
  color,
  enabled,
  icon: Icon,
  onClick,
  tooltip,
}: FiltersButtonInput) {
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
