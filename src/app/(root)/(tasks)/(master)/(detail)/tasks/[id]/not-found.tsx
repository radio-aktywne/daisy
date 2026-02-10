import { msg } from "@lingui/core/macro";
import { connection } from "next/server";

import type {
  NotFoundInput,
  NotFoundMetadataInput,
  NotFoundMetadataUtilityInput,
} from "../../../../../../types";

import { Metadata } from "../../../../../../../isomorphic/metadata/components/metadata";
import { createMetadata } from "../../../../../../../server/metadata/lib/create-metadata";
import { TasksIdNotFoundView } from "./not-found.view";

async function getTitle({}: NotFoundMetadataUtilityInput = {}) {
  return msg({ message: "Task not found • daisy" });
}

export async function generateMetadata({}: NotFoundMetadataInput) {
  return await createMetadata({
    title: await getTitle(),
  });
}

export default async function TasksIdNotFound({}: NotFoundInput) {
  await connection();

  return (
    <>
      <Metadata title={await getTitle()} />
      <TasksIdNotFoundView />
    </>
  );
}
