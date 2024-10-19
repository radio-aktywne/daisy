import { components } from "../../api/mantis";

export type Task = components["schemas"]["GenericTask"];

export type UseTaskProps = {
  id: string;
  interval?: number;
};
