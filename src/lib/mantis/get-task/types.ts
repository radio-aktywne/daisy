import { components } from "../../../services/mantis";

export type GetTaskInput = {
  id: string;
};

export type GetTaskOutput = {
  task: components["schemas"]["GenericTask"];
};
