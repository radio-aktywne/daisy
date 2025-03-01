import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { RunningTasksPageMetadata } from "../../../../components/metadata/tasks/running-tasks-page-metadata";
import { RunningTasksPageView } from "../../../../components/views/tasks/running-tasks-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { RunningTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Running tasks • daisy" })),
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
