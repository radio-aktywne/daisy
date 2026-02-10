import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const getTask = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
