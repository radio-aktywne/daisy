import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.DAISY__MANTIS__SCHEME || "http";
const host = process.env.DAISY__MANTIS__HOST || "localhost";
const port =
  process.env.DAISY__MANTIS__PORT === undefined
    ? 33000
    : process.env.DAISY__MANTIS__PORT;
const path = (process.env.DAISY__MANTIS__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const mantis = createClient<paths>({ baseUrl: url });
