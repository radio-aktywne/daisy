"use client";

import { msg } from "@lingui/core/macro";

import type { ErrorInput, ErrorMetadataUtilityInput } from "../../types";

import { Metadata } from "../../../isomorphic/metadata/components/metadata";
import { TasksErrorView } from "./error.view";

function getTitle({}: ErrorMetadataUtilityInput = {}) {
  return msg({ message: "Error • daisy" });
}

export default function TasksError({ reset }: ErrorInput) {
  return (
    <>
      <Metadata title={getTitle()} />
      <TasksErrorView reset={reset} />
    </>
  );
}
