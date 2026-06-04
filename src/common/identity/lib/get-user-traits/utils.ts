import { IdentitySchemas } from "../../schemas";

export function parseTraits(value: string) {
  try {
    return IdentitySchemas.UserTraits.parse(JSON.parse(value));
  } catch {
    return null;
  }
}
