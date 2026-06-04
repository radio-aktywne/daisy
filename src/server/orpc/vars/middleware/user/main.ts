import type { UserMiddlewareOutputContext } from "./types";

import { getUserId } from "../../../../../common/identity/lib/get-user-id";
import { getUserTraits } from "../../../../../common/identity/lib/get-user-traits";
import { headersMiddleware } from "../headers";
import { isExecuted } from "./utils";

export const userMiddleware = headersMiddleware.concat(
  async ({ context, next }) => {
    if (isExecuted(context))
      return next({
        context: {
          userMiddleware: {
            executed: context.userMiddleware.executed,
            user: context.userMiddleware.user,
          },
        } satisfies UserMiddlewareOutputContext as UserMiddlewareOutputContext,
      });

    const headers = context.headersMiddleware.headers;

    const { id } = getUserId({ headers: headers });
    const { traits } = getUserTraits({ headers: headers });

    const user =
      id === null || traits === null ? null : { id: id, traits: traits };

    return next({
      context: {
        userMiddleware: {
          executed: true,
          user: user,
        },
      } satisfies UserMiddlewareOutputContext as UserMiddlewareOutputContext,
    });
  },
);
