"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { TaskListPageMetadataInput } from "./types";

export function TaskListPageMetadata({}: TaskListPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Tasks • daisy" })),
  });

  return null;
}
