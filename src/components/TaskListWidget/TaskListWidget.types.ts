import { components } from "../../api/mantis";

export type TaskListWidgetProps = {
  index: components["schemas"]["TaskIndex"];
  type: keyof components["schemas"]["TaskIndex"];
  perPage?: number;
};
