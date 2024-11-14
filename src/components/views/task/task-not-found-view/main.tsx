"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Title } from "@mantine/core";

import { TaskNotFoundViewInput } from "./types";

export function TaskNotFoundView({}: TaskNotFoundViewInput) {
  const { _ } = useLingui();

  return <Title>{_(msg({ message: "Task not found." }))}</Title>;
}
