import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { RunningTasksPageMetadata } from "../../../../components/metadata/tasks/running-tasks-page-metadata";
import { RunningTasksPageView } from "../../../../components/views/tasks/running-tasks-page-view";
import { getLanguage } from "../../../../lib/get-language";
import { loadLocale } from "../../../../lib/load-locale";
import { RunningTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Running tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
  };
}

export default function RunningTasksPage({}: RunningTasksPageInput) {
  return (
    <>
      <RunningTasksPageMetadata />
      <RunningTasksPageView />
    </>
  );
}
