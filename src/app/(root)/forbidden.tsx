"use client";

import { msg } from "@lingui/core/macro";

import type { ForbiddenInput, ForbiddenMetadataUtilityInput } from "../types";

import { Metadata } from "../../isomorphic/metadata/components/metadata";
import { RootForbiddenView } from "./forbidden.view";

function getTitle({}: ForbiddenMetadataUtilityInput = {}) {
  return msg({ message: "Forbidden • daisy" });
}

export default function RootForbidden({}: ForbiddenInput) {
  return (
    <>
      <Metadata title={getTitle()} />
      <RootForbiddenView />
    </>
  );
}
