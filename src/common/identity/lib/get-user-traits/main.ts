import type { GetUserTraitsInput, GetUserTraitsOutput } from "./types";

import { parseTraits } from "./utils";

export function getUserTraits({
  headers,
}: GetUserTraitsInput): GetUserTraitsOutput {
  const raw = headers.get("X-User-Traits");

  if (raw === null) return { traits: null };

  const traits = parseTraits(raw);

  return { traits: traits };
}
