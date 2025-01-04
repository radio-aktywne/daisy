import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { CompletedTasksPageMetadata } from "../../../../components/metadata/tasks/completed-tasks-page-metadata";
import { CompletedTasksPageView } from "../../../../components/views/tasks/completed-tasks-page-view";
import { getLanguage } from "../../../../lib/get-language";
import { loadLocale } from "../../../../lib/load-locale";
import { CompletedTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Completed tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
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
