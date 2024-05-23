import { components } from "../../api/emischeduler";

export type TaskListWidgetProps = {
  index: components["schemas"]["TaskIndex"];
  type: keyof components["schemas"]["TaskIndex"];
  perPage?: number;
};
