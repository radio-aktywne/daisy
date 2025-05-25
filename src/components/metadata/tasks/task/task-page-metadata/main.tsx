"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../../hooks/use-document-metadata";
import { TaskPageMetadataInput } from "./types";

export function TaskPageMetadata({ id }: TaskPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "daisy" })),
    title: _(msg({ message: `Task ${id} • daisy` })),
  });

  return null;
}
