import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const cancelTask = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
