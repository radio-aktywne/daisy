import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { PendingTasksPageMetadata } from "../../../components/metadata/tasks/pending-tasks-page-metadata";
import { PendingTasksPageView } from "../../../components/views/tasks/pending-tasks-page-view";
import { getLanguage } from "../../../lib/get-language";
import { loadLocale } from "../../../lib/load-locale";
import { PendingTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Pending tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
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
