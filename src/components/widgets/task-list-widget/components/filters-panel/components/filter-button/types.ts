import { MantineColor } from "@mantine/core";
import { IconType } from "react-icons/lib";

export type FiltersButtonInput = {
  color: MantineColor;
  enabled: boolean;
  icon: IconType;
  onClick?: () => void;
  tooltip: string;
};
