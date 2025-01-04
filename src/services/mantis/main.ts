import createClient, { ClientOptions } from "openapi-fetch";
import "server-only";

import { paths } from "./types";

const scheme = process.env.DAISY__MANTIS__HTTP__SCHEME || "http";
const host = process.env.DAISY__MANTIS__HTTP__HOST || "localhost";
const port =
  process.env.DAISY__MANTIS__HTTP__PORT === undefined
    ? 10800
    : process.env.DAISY__MANTIS__HTTP__PORT;
const path = (process.env.DAISY__MANTIS__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const mantisConfig = {
  baseUrl: url,
} satisfies ClientOptions;

export const mantis = createClient<paths>(mantisConfig);
