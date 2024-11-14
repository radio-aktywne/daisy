import { MessageDescriptor } from "@lingui/core";

import { CancelTaskInput as InternalCancelTaskInput } from "../../../lib/mantis/cancel-task";

export type CancelTaskInput = {
  id: InternalCancelTaskInput["id"];
};

export type CancelTaskSuccessOutput = {
  error?: never;
};

export type CancelTaskErrorOutput = {
  error: MessageDescriptor;
};

export type CancelTaskOutput = CancelTaskErrorOutput | CancelTaskSuccessOutput;
