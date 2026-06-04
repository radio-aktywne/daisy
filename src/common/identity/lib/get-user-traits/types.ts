import type { UserTraits } from "../../types";

export type GetUserTraitsInput = {
  headers: Headers;
};

export type GetUserTraitsOutput = {
  traits: null | UserTraits;
};
