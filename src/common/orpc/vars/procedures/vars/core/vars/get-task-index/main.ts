import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const getTaskIndex = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
