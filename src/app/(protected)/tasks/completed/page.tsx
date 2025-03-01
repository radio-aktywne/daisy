import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { CompletedTasksPageMetadata } from "../../../../components/metadata/tasks/completed-tasks-page-metadata";
import { CompletedTasksPageView } from "../../../../components/views/tasks/completed-tasks-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { CompletedTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Completed tasks • daisy" })),
  };
}

export default function CompletedTasksPage({}: CompletedTasksPageInput) {
  return (
    <>
      <CompletedTasksPageMetadata />
      <CompletedTasksPageView />
    </>
  );
}
