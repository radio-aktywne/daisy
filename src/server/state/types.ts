import "server-only";

import type { Sdk as ICanHazDadJokeSDK } from "../../common/apis/icanhazdadjoke/sdk";
import type { Sdk as MantisSDK } from "../../common/apis/mantis/sdk";
import type { Config } from "../config/types";

export type APIs = {
  icanhazdadjoke: ICanHazDadJokeSDK;
  mantis: MantisSDK;
};

export type State = {
  apis: APIs;
  config: Config;
};
