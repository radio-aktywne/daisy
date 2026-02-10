import type { PageViewInput } from "../../../../types";
import type { Schemas } from "./schemas";

export async function TasksPageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  return null;
}
