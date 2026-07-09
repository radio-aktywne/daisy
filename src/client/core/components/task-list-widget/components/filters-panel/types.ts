import type { ORPCOutputs } from "../../../../../../common/orpc/types/inferred";

type TaskStatus = keyof ORPCOutputs["core"]["listTasks"];

export type FiltersPanelFilters = {
  [status in TaskStatus]: boolean;
};

export type FiltersPanelInput = {
  filters: FiltersPanelFilters;
  onToggleFilter?: (status: TaskStatus) => void;
};
