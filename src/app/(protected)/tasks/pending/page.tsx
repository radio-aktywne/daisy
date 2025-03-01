import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { PendingTasksPageMetadata } from "../../../../components/metadata/tasks/pending-tasks-page-metadata";
import { PendingTasksPageView } from "../../../../components/views/tasks/pending-tasks-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { PendingTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Pending tasks • daisy" })),
  };
}

export default function PendingTasksPage({}: PendingTasksPageInput) {
  return (
    <>
      <PendingTasksPageMetadata />
      <PendingTasksPageView />
    </>
  );
}
