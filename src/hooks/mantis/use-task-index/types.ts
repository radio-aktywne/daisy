import { MessageDescriptor } from "@lingui/core";

import { GetTaskIndexOutput } from "../../../lib/mantis/get-task-index";

export type UseTaskIndexInput = {
  interval?: number;
};

export type UseTaskIndexLoadingState = {
  data?: never;
  error?: never;
  loading: true;
};

export type UseTaskIndexErrorState = {
  data?: never;
  error: MessageDescriptor;
  loading: false;
};

export type UseTaskIndexSuccessState = {
  data: GetTaskIndexOutput["index"];
  error?: never;
  loading: false;
};

export type UseTaskIndexState =
  | UseTaskIndexErrorState
  | UseTaskIndexLoadingState
  | UseTaskIndexSuccessState;

export type UseTaskIndexOutput = {
  refresh: () => Promise<void>;
} & UseTaskIndexState;
