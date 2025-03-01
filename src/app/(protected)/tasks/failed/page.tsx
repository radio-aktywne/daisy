import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { FailedTasksPageMetadata } from "../../../../components/metadata/tasks/failed-tasks-page-metadata";
import { FailedTasksPageView } from "../../../../components/views/tasks/failed-tasks-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { FailedTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Failed tasks • daisy" })),
  };
}

export default function FailedTasksPage({}: FailedTasksPageInput) {
  return (
    <>
      <FailedTasksPageMetadata />
      <FailedTasksPageView />
    </>
  );
}
