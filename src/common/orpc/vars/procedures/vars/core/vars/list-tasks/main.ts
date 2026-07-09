import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const listTasks = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
