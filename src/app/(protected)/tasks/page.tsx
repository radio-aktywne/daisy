import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { TasksPageMetadata } from "../../../components/metadata/tasks/tasks-page-metadata";
import { TasksPageView } from "../../../components/views/tasks/tasks-page-view";
import { getLanguage } from "../../../lib/i18n/get-language";
import { loadLocale } from "../../../lib/i18n/load-locale";
import { TasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Tasks • daisy" })),
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
