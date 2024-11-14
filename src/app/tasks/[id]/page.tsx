import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { TaskPageMetadata } from "../../../components/metadata/task/task-page-metadata";
import { TaskPageView } from "../../../components/views/task/task-page-view";
import { getLanguage } from "../../../lib/get-language";
import { loadLocale } from "../../../lib/load-locale";
import { TaskPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: TaskPageInput): Promise<Metadata> {
  const id = params.id;

  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: `Task ${id} • daisy` })),
    title: t(i18n)(msg({ message: "daisy" })),
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
