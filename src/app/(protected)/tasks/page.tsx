import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { TaskListPageMetadata } from "../../../components/metadata/tasks/task-list-page-metadata";
import { getLanguage } from "../../../lib/i18n/get-language";
import { loadLocale } from "../../../lib/i18n/load-locale";
import { TaskListPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Tasks • daisy" })),
  };
}

export default function TaskListPage({}: TaskListPageInput) {
  return <TaskListPageMetadata />;
}
