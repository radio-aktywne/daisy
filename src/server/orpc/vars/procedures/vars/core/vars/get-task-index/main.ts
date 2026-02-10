import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const getTaskIndex = orpcServerRootBase.core.getTaskIndex.handler(
  async ({ errors }) => {
    const { data: tasksListData } = await state.current.apis.mantis.tasksList();

    if (tasksListData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return tasksListData;
  },
);
