import { MessageDescriptor } from "@lingui/core";

import { GetTaskInput, GetTaskOutput } from "../../../lib/mantis/get-task";

export type UseTaskInput = {
  id: GetTaskInput["id"];
  interval?: number;
};

export type UseTaskLoadingState = {
  data?: never;
  error?: never;
  loading: true;
};

export type UseTaskErrorState = {
  data?: never;
  error: MessageDescriptor;
  loading: false;
};

export type UseTaskSuccessState = {
  data: GetTaskOutput["task"];
  error?: never;
  loading: false;
};

export type UseTaskState =
  | UseTaskErrorState
  | UseTaskLoadingState
  | UseTaskSuccessState;

export type UseTaskOutput = {
  refresh: () => Promise<void>;
} & UseTaskState;
