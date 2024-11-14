import { MessageDescriptor } from "@lingui/core";

import {
  GetTaskInput as InternalGetTaskInput,
  GetTaskOutput as InternalGetTaskOutput,
} from "../../../lib/mantis/get-task";

export type GetTaskInput = {
  id: InternalGetTaskInput["id"];
};

export type GetTaskSuccessOutput = {
  data: InternalGetTaskOutput["task"];
  error?: never;
};

export type GetTaskErrorOutput = {
  data?: never;
  error: MessageDescriptor;
};

export type GetTaskOutput = GetTaskErrorOutput | GetTaskSuccessOutput;
