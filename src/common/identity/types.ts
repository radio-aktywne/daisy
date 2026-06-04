import type * as z from "zod";

import type { Schemas } from "./schemas";

export type UserTraits = z.infer<typeof Schemas.UserTraits>;

export type User = {
  id: string;
  traits: UserTraits;
};
