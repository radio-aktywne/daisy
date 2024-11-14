import { msg } from "@lingui/macro";

export const errors = {
  generic: msg({ message: "An error occurred while canceling the task." }),
  invalidInput: msg({ message: "Invalid input." }),
  notFound: msg({ message: "Task not found." }),
};
