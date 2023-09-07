import { config } from "./wdio.conf.js";
import { deepmerge } from "deepmerge-ts";

export const devConfig = deepmerge(config, {
  capabilities: [],
});
