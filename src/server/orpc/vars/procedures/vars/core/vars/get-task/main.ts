import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const getTask = orpcServerRootBase.core.getTask.handler(
  async ({ errors, input }) => {
    const { data: tasksIdGetData, response: tasksIdGetResponse } =
      await state.current.apis.mantis.tasksIdGet({ path: input });

    if (tasksIdGetData === undefined) {
      if (tasksIdGetResponse.status === 404) throw errors.NOT_FOUND();
      throw errors.INTERNAL_SERVER_ERROR();
    }

    return tasksIdGetData;
  },
);
