import { components } from "../../api/emischeduler";

export type TaskIndex = components["schemas"]["TaskIndex"];

export type UseTaskIndexProps = {
  interval?: number;
};
