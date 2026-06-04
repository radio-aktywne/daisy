import type * as z from "zod";

import type { IdentitySchemas } from "./schemas";

export type UserTraits = z.infer<typeof IdentitySchemas.UserTraits>;

export type User = {
  id: string;
  traits: UserTraits;
};
