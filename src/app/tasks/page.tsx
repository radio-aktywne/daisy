import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { TasksPageMetadata } from "../../components/metadata/tasks/tasks-page-metadata";
import { TasksPageView } from "../../components/views/tasks/tasks-page-view";
import { getLanguage } from "../../lib/get-language";
import { loadLocale } from "../../lib/load-locale";
import { TasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
  };
}

export default function TasksPage({}: TasksPageInput) {
  return (
    <>
      <TasksPageMetadata />
      <TasksPageView />
    </>
  );
}
