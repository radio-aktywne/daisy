"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { CompletedTasksPageMetadataInput } from "./types";

export function CompletedTasksPageMetadata({}: CompletedTasksPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Completed tasks • daisy" })),
  });

  return null;
}
