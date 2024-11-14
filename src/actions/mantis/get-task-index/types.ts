import { MessageDescriptor } from "@lingui/core";

import { GetTaskIndexOutput as InternalGetTaskIndexOutput } from "../../../lib/mantis/get-task-index";

export type GetTaskIndexInput = {
  [key: string]: never;
};

export type GetTaskIndexSuccessOutput = {
  data: InternalGetTaskIndexOutput["index"];
  error?: never;
};

export type GetTaskIndexErrorOutput = {
  data?: never;
  error: MessageDescriptor;
};

export type GetTaskIndexOutput =
  | GetTaskIndexErrorOutput
  | GetTaskIndexSuccessOutput;
