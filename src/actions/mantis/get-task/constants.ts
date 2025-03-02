import { msg } from "@lingui/core/macro";

export const errors = {
  generic: msg({ message: "An error occurred while fetching the task." }),
  invalidInput: msg({ message: "Invalid input." }),
  notFound: msg({ message: "Task not found." }),
  unauthorized: msg({ message: "You are not authorized to fetch the task." }),
};
