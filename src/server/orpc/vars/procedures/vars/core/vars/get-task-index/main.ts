import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";
import { authenticatedMiddleware } from "../../../../../middleware/authenticated";

export const getTaskIndex = orpcServerRootBase.core.getTaskIndex
  .use(authenticatedMiddleware)
  .handler(async ({ errors }) => {
    const { data: tasksListData } = await state.current.apis.mantis.tasksList();

    if (tasksListData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return tasksListData;
  });
