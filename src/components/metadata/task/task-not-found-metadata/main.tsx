"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { TaskNotFoundMetadataInput } from "./types";

export function TaskNotFoundMetadata({}: TaskNotFoundMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: `Task not found • daisy` })),
  });

  return null;
}
