"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RunningTasksPageMetadataInput } from "./types";

export function RunningTasksPageMetadata({}: RunningTasksPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Running tasks • daisy" })),
  });

  return null;
}
