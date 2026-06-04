import { connection } from "next/server";

import type { LayoutInput } from "../../../types";
import type { Keys } from "./types";

import { Authenticated } from "../../../../server/access/components/authenticated";
import { TasksMasterLayoutView } from "./layout.view";

export default async function TasksMasterLayout({
  children,
}: LayoutInput<Keys.Path, Keys.Slots>) {
  await connection();

  return (
    <Authenticated>
      <TasksMasterLayoutView>{children}</TasksMasterLayoutView>
    </Authenticated>
  );
}
