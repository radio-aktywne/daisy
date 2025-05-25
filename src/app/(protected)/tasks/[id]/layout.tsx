import { MasterDetailLayoutDetailPanel } from "@radio-aktywne/ui";

import { TaskLayoutInput } from "./types";

export default async function TaskLayout({ children }: TaskLayoutInput) {
  return (
    <MasterDetailLayoutDetailPanel>{children}</MasterDetailLayoutDetailPanel>
  );
}
