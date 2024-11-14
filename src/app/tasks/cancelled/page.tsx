import { i18n } from "@lingui/core";
import { msg, t } from "@lingui/macro";
import { Metadata } from "next";

import { CancelledTasksPageMetadata } from "../../../components/metadata/tasks/cancelled-tasks-page-metadata";
import { CancelledTasksPageView } from "../../../components/views/tasks/cancelled-tasks-page-view";
import { getLanguage } from "../../../lib/get-language";
import { loadLocale } from "../../../lib/load-locale";
import { CancelledTasksPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: t(i18n)(msg({ message: "Cancelled tasks • daisy" })),
    title: t(i18n)(msg({ message: "daisy" })),
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
