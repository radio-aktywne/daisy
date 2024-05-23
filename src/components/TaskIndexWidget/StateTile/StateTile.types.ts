import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type StateTileLabels = {
  text: string;
};

export type StateTileProps = {
  tasks: string[];
  color: string;
  icon: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
  labels: StateTileLabels;
};
