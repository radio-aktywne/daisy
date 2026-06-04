import type { GetUserIdInput, GetUserIdOutput } from "./types";

export function getUserId({ headers }: GetUserIdInput): GetUserIdOutput {
  const id = headers.get("X-User-ID");
  return { id: id };
}
