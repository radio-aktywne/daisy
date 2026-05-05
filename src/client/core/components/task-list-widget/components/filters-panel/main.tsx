import { msg } from "@lingui/core/macro";
import { ActionIcon } from "@mantine/core";
import {
  MdOutlineArrowCircleRight,
  MdOutlineBedtime,
  MdOutlineBlock,
  MdOutlineCancel,
  MdOutlineCheckCircle,
  MdOutlinePending,
  MdOutlineSchedule,
} from "react-icons/md";

import type { FiltersPanelInput } from "./types";

import { useLocalization } from "../../../../../../isomorphic/localization/hooks/use-localization";
import { FilterButton } from "./components/filter-button";

export function FiltersPanel({ filters, onToggleFilter }: FiltersPanelInput) {
  const { localization } = useLocalization();

  return (
    <ActionIcon.Group mt="auto" w="100%">
      <FilterButton
        color="dark.1"
        enabled={filters.queued}
        icon={MdOutlinePending}
        onClick={() => onToggleFilter?.("queued")}
        tooltip={localization.localize(msg({ message: "Queued" }))}
      />
      <FilterButton
        color="dark.2"
        enabled={filters.waiting}
        icon={MdOutlineSchedule}
        onClick={() => onToggleFilter?.("waiting")}
        tooltip={localization.localize(msg({ message: "Waiting" }))}
      />
      <FilterButton
        color="dark.3"
        enabled={filters.sleeping}
        icon={MdOutlineBedtime}
        onClick={() => onToggleFilter?.("sleeping")}
        tooltip={localization.localize(msg({ message: "Sleeping" }))}
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
