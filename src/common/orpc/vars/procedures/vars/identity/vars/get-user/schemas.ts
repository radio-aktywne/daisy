import * as z from "zod";

import { IdentitySchemas } from "../../../../../../../identity/schemas";

export const Schemas = {
  Input: z.undefined(),
  Output: z.object({
    user: z
      .object({
        id: z.string(),
        traits: IdentitySchemas.UserTraits,
      })
      .nullable(),
  }),
};
