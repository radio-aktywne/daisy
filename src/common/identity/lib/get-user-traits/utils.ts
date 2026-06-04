import { Schemas } from "../../schemas";

export function parseTraits(value: string) {
  try {
    return Schemas.UserTraits.parse(JSON.parse(value));
  } catch {
    return null;
  }
}
