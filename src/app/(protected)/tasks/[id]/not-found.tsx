import { TaskNotFoundMetadata } from "../../../../components/metadata/task/task-not-found-metadata";
import { TaskNotFoundView } from "../../../../components/views/task/task-not-found-view";
import { TaskNotFoundInput } from "./types";

export default function TaskNotFound({}: TaskNotFoundInput) {
  return (
    <>
      <TaskNotFoundMetadata />
      <TaskNotFoundView />
    </>
  );
}
