import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.WEBSCHEDULER__EMISCHEDULER__SCHEME || "http";
const host = process.env.WEBSCHEDULER__EMISCHEDULER__HOST || "localhost";
const port =
  process.env.WEBSCHEDULER__EMISCHEDULER__PORT === undefined
    ? 33000
    : process.env.WEBSCHEDULER__EMISCHEDULER__PORT;
const path = (process.env.WEBSCHEDULER__EMISCHEDULER__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const emischeduler = createClient<paths>({ baseUrl: url });
