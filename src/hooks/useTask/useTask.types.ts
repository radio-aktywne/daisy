import { components } from "../../api/emischeduler";

export type Task = components["schemas"]["GenericTask"];

export type UseTaskProps = {
  id: string;
  interval?: number;
};
