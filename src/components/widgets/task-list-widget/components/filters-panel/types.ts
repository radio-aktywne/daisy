import { GetTaskIndexOutput } from "../../../../../lib/mantis/get-task-index";

export type FiltersPanelStatus = keyof GetTaskIndexOutput["index"];

export type FiltersPanelFilters = {
  [status in FiltersPanelStatus]: boolean;
};

export type FiltersPanelInput = {
  filters: FiltersPanelFilters;
  onToggleFilter?: (status: FiltersPanelStatus) => void;
};
