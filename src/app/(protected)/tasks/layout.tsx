import {
  MasterDetailLayout,
  MasterDetailLayoutMasterPanel,
} from "@radio-aktywne/ui";

import { TaskListWidget } from "../../../components/widgets/task-list-widget";
import { getTaskIndex } from "../../../lib/mantis/get-task-index";
import { TaskListLayoutInput } from "./types";

export const dynamic = "force-dynamic";

export default async function TaskListLayout({
  children,
}: TaskListLayoutInput) {
  const { index } = await getTaskIndex();

  return (
    <MasterDetailLayout>
      <MasterDetailLayoutMasterPanel>
        <TaskListWidget index={index} />
      </MasterDetailLayoutMasterPanel>
      {children}
    </MasterDetailLayout>
  );
}
