import type { MantineColor } from "@mantine/core";
import type { IconType } from "react-icons/lib";

export type FilterButtonInput = {
  color: MantineColor;
  enabled: boolean;
  icon: IconType;
  onClick?: () => void;
  tooltip: string;
};
