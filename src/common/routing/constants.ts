import { msg } from "@lingui/core/macro";

export const commonRoutingConstants = {
  routes: {
    "/": msg({ message: "/" }),
    "/tasks": msg({ message: "/tasks" }),
    "/tasks/[id]": msg({ message: "/tasks/[id]" }),
  },
} as const;
