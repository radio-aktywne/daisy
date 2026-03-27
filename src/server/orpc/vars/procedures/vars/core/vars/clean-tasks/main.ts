import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const cleanTasks = orpcServerRootBase.core.cleanTasks.handler(
  async ({ errors, input }) => {
    const { data: tasksCleanCleanData } =
      await state.current.apis.mantis.tasksCleanClean({ body: input });

    if (tasksCleanCleanData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return tasksCleanCleanData;
  },
);
