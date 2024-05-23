import { notFound } from "next/navigation";
import { getTask } from "../../../actions";
import { TaskWidget } from "../../../components";

type TaskPageParams = Readonly<{
  id: string;
}>;

export type TaskPageProps = Readonly<{
  params: TaskPageParams;
}>;

export const dynamic = "force-dynamic";

export default async function TaskPage({ params }: TaskPageProps) {
  const { data: task, error } = await getTask({ id: params.id });

  if (error !== undefined) throw new Error(error);
  if (task === undefined) notFound();

  return <TaskWidget task={task} />;
}
