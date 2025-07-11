import { PropsWithChildren } from "react";

export type TaskLayoutInput = PropsWithChildren;

export type TaskNotFoundInput = {
  [key: string]: never;
};

type TaskPageParams = {
  id: string;
};

export type TaskPageInput = {
  params: TaskPageParams;
};
