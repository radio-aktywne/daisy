import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { TaskPageMetadata } from "../../../../components/metadata/task/task-page-metadata";
import { TaskPageView } from "../../../../components/views/task/task-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { TaskPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: TaskPageInput): Promise<Metadata> {
  const id = params.id;

  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: `Task ${id} • daisy` })),
  };
}

export default function TaskPage({ params }: TaskPageInput) {
  const id = params.id;

  return (
    <>
      <TaskPageMetadata id={id} />
      <TaskPageView id={id} />
    </>
  );
}
