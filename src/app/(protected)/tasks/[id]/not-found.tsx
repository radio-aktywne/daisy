import { TaskNotFoundMetadata } from "../../../../components/metadata/tasks/task/task-not-found-metadata";
import { TaskNotFoundView } from "../../../../components/views/tasks/task/task-not-found-view";
import { TaskNotFoundInput } from "./types";

export const dynamic = "force-dynamic";

export default function TaskNotFound({}: TaskNotFoundInput) {
  return (
    <>
      <TaskNotFoundMetadata />
      <TaskNotFoundView />
    </>
  );
}
