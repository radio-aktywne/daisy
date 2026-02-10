import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const cancelTask = orpcServerRootBase.core.cancelTask.handler(
  async ({ errors, input }) => {
    const { data: tasksIdCancelData, response: tasksIdCancelResponse } =
      await state.current.apis.mantis.tasksIdCancel({ path: input });

    if (tasksIdCancelData === undefined) {
      if (tasksIdCancelResponse.status === 404) throw errors.NOT_FOUND();
      throw errors.INTERNAL_SERVER_ERROR();
    }

    return tasksIdCancelData;
  },
);
