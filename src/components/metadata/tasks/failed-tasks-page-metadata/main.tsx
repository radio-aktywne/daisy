"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { FailedTasksPageMetadataInput } from "./types";

export function FailedTasksPageMetadata({}: FailedTasksPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Failed tasks • daisy" })),
  });

  return null;
}