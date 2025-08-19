"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { ActionIcon } from "@mantine/core";
import {
  MdOutlineArrowCircleRight,
  MdOutlineBlock,
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlineSchedule,
} from "react-icons/md";

import { FiltersButton } from "./components/filter-button";
import { FiltersPanelInput } from "./types";

export function FiltersPanel({ filters, onToggleFilter }: FiltersPanelInput) {
  const { _ } = useLingui();

  return (
    <ActionIcon.Group w="100%">
      <FiltersButton
        color="gray"
        enabled={filters.pending}
        icon={MdOutlineSchedule}
        onClick={() => onToggleFilter?.("pending")}
        tooltip={_(msg({ message: "Pending" }))}
      />
      <FiltersButton
        color="ra-blue"
        enabled={filters.running}
        icon={MdOutlineArrowCircleRight}
        onClick={() => onToggleFilter?.("running")}
        tooltip={_(msg({ message: "Running" }))}
      />
      <FiltersButton
        color="ra-yellow"
        enabled={filters.cancelled}
        icon={MdOutlineBlock}
        onClick={() => onToggleFilter?.("cancelled")}
        tooltip={_(msg({ message: "Cancelled" }))}
      />
      <FiltersButton
        color="ra-red"
        enabled={filters.failed}
        icon={MdOutlineCancel}
        onClick={() => onToggleFilter?.("failed")}
        tooltip={_(msg({ message: "Failed" }))}
      />
      <FiltersButton
        color="ra-green"
        enabled={filters.completed}
        icon={MdOutlineCheckCircle}
        onClick={() => onToggleFilter?.("completed")}
        tooltip={_(msg({ message: "Completed" }))}
      />
    </ActionIcon.Group>
  );
}
