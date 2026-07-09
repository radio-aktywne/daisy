import { cancelTask } from "./vars/cancel-task";
import { cleanTasks } from "./vars/clean-tasks";
import { getTask } from "./vars/get-task";
import { listTasks } from "./vars/list-tasks";

export const core = {
  cancelTask: cancelTask,
  cleanTasks: cleanTasks,
  getTask: getTask,
  listTasks: listTasks,
};
