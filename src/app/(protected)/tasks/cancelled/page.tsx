import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";

import { CancelledTasksPageMetadata } from "../../../../components/metadata/tasks/cancelled-tasks-page-metadata";
import { CancelledTasksPageView } from "../../../../components/views/tasks/cancelled-tasks-page-view";
import { getLanguage } from "../../../../lib/i18n/get-language";
import { loadLocale } from "../../../../lib/i18n/load-locale";
import { CancelledTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "daisy" })),
    title: i18n._(msg({ message: "Cancelled tasks • daisy" })),
  };
}

export default function CancelledTasksPage({}: CancelledTasksPageInput) {
  return (
    <>
      <CancelledTasksPageMetadata />
      <CancelledTasksPageView />
    </>
  );
}
