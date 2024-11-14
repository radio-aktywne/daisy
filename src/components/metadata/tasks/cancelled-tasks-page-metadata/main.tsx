"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { CancelledTasksPageMetadataInput } from "./types";

export function CancelledTasksPageMetadata({}: CancelledTasksPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: "Cancelled tasks • daisy" })),
  });

  return null;
}
