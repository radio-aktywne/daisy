import { getTaskIndex } from "../../actions";
import { TaskIndexWidget } from "../../components";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const { data: index, error } = await getTaskIndex();

  if (error !== undefined) throw new Error(error);

  return <TaskIndexWidget index={index} />;
}
