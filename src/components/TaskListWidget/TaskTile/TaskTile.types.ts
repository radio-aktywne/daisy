export type TaskTileLabels = {
  text: (id: string) => string;
};

export type TaskTileProps = {
  id: string;
  labels: TaskTileLabels;
};
