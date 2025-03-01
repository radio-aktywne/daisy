import { msg } from "@lingui/core/macro";

export const errors = {
  generic: msg({ message: "An error occurred while fetching the task index." }),
  unauthorized: msg({
    message: "You are not authorized to fetch the task index.",
  }),
};
