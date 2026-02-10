import type { CodeHighlightAdapter } from "@mantine/code-highlight";
import type {
  MantineColorScheme,
  MantineColorSchemeManager,
} from "@mantine/core";

import { createShikiAdapter } from "@mantine/code-highlight";
import shikiJsonLanguage from "@shikijs/langs/json";
import shikiGithubDarkDefaultTheme from "@shikijs/themes/github-dark-default";
import shikiGithubLightDefaultTheme from "@shikijs/themes/github-light-default";
import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

export class ForceColorSchemeManager implements MantineColorSchemeManager {
  constructor(protected readonly colorScheme: MantineColorScheme) {}

  clear() {
    return;
  }

  get() {
    return this.colorScheme;
  }

  set() {
    return;
  }

  subscribe() {
    return;
  }

  unsubscribe() {
    return;
  }
}

export class ShikiCodeHighlightAdapter<T = unknown>
  implements CodeHighlightAdapter
{
  protected readonly adapter: CodeHighlightAdapter;

  constructor(protected readonly colorScheme: MantineColorScheme) {
    this.adapter = createShikiAdapter(
      async () =>
        await createHighlighterCore({
          engine: createJavaScriptRegexEngine(),
          langs: [shikiJsonLanguage],
          themes: [
            ...(colorScheme === "dark" || colorScheme === "auto"
              ? [shikiGithubDarkDefaultTheme]
              : []),
            ...(colorScheme === "light" || colorScheme === "auto"
              ? [shikiGithubLightDefaultTheme]
              : []),
          ],
        }),
      {
        forceColorScheme:
          colorScheme === "dark"
            ? shikiGithubDarkDefaultTheme.name
            : colorScheme === "light"
              ? shikiGithubLightDefaultTheme.name
              : undefined,
      },
    );
  }

  getHighlighter(ctx: T) {
    return this.adapter.getHighlighter(ctx);
  }

  loadContext(): Promise<T> {
    return this.adapter.loadContext!();
  }
}
