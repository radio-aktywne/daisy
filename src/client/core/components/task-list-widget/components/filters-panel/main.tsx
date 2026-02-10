import { msg } from "@lingui/core/macro";
import { ActionIcon } from "@mantine/core";
import {
  MdOutlineArrowCircleRight,
  MdOutlineBlock,
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlineSchedule,
} from "react-icons/md";

import type { FiltersPanelInput } from "./types";

import { useLocalization } from "../../../../../../isomorphic/localization/hooks/use-localization";
import { FilterButton } from "./components/filter-button";

export function FiltersPanel({ filters, onToggleFilter }: FiltersPanelInput) {
  const { localization } = useLocalization();

  return (
    <ActionIcon.Group w="100%">
      <FilterButton
        color="gray"
        enabled={filters.pending}
        icon={MdOutlineSchedule}
        onClick={() => onToggleFilter?.("pending")}
        tooltip={localization.localize(msg({ message: "Pending" }))}
      />
      <FilterButton
        color="ra-blue"
        enabled={filters.running}
        icon={MdOutlineArrowCircleRight}
        onClick={() => onToggleFilter?.("running")}
        tooltip={localization.localize(msg({ message: "Running" }))}
      />
      <FilterButton
        color="ra-yellow"
        enabled={filters.cancelled}
        icon={MdOutlineBlock}
        onClick={() => onToggleFilter?.("cancelled")}
        tooltip={localization.localize(msg({ message: "Cancelled" }))}
      />
      <FilterButton
        color="ra-red"
        enabled={filters.failed}
        icon={MdOutlineCancel}
        onClick={() => onToggleFilter?.("failed")}
        tooltip={localization.localize(msg({ message: "Failed" }))}
      />
      <FilterButton
        color="ra-green"
        enabled={filters.completed}
        icon={MdOutlineCheckCircle}
        onClick={() => onToggleFilter?.("completed")}
        tooltip={localization.localize(msg({ message: "Completed" }))}
      />
    </ActionIcon.Group>
  );
}
