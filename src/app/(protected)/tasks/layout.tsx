import {
  MasterDetailLayout,
  MasterDetailLayoutMasterPanel,
} from "@radio-aktywne/ui";

import { TaskListWidget } from "../../../components/widgets/task-list-widget";
import { getTaskIndex } from "../../../lib/mantis/get-task-index";
import { TasksLayoutInput } from "./types";

export default async function TasksLayout({ children }: TasksLayoutInput) {
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
