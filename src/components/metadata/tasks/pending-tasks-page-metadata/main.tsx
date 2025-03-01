"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { PendingTasksPageMetadataInput } from "./types";

export function PendingTasksPageMetadata({}: PendingTasksPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Pending tasks • daisy" })),
  });

  return null;
}
