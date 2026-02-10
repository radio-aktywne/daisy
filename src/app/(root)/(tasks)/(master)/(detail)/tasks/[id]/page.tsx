import { msg } from "@lingui/core/macro";
import { connection } from "next/server";

import type {
  PageInput,
  PageMetadataInput,
  PageMetadataUtilityInput,
} from "../../../../../../types";
import type { Keys } from "./types";

import { Metadata } from "../../../../../../../isomorphic/metadata/components/metadata";
import { createMetadata } from "../../../../../../../server/metadata/lib/create-metadata";
import { TasksIdPageView } from "./page.view";
import { Schemas } from "./schemas";

async function getTitle({
  pathParameters,
}: PageMetadataUtilityInput<typeof Schemas.Path, typeof Schemas.Query>) {
  const { id } = pathParameters;

  return msg({ message: `Task ${id} • daisy` });
}

export async function generateMetadata({
  params,
}: PageMetadataInput<Keys.Path, Keys.Query>) {
  const pathParameters = await Schemas.Path.parseAsync(await params);

  return await createMetadata({
    title: await getTitle({ pathParameters: pathParameters }),
  });
}

export default async function TasksIdPage({
  params,
}: PageInput<Keys.Path, Keys.Query>) {
  await connection();

  const pathParameters = await Schemas.Path.parseAsync(await params);

  return (
    <>
      <Metadata title={await getTitle({ pathParameters: pathParameters })} />
      <TasksIdPageView pathParameters={pathParameters} />
    </>
  );
}
