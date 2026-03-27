import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const cleanTasks = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
