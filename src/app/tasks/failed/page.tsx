import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { FailedTasksPageMetadata } from "../../../components/metadata/tasks/failed-tasks-page-metadata";
import { FailedTasksPageView } from "../../../components/views/tasks/failed-tasks-page-view";
import { getLanguage } from "../../../lib/get-language";
import { loadLocale } from "../../../lib/load-locale";
import { FailedTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Failed tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
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
