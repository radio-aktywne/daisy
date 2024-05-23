import { Title } from "@mantine/core";
import { labels } from "../../../config/labels";

export default function TaskNotFound() {
  return <Title>{labels.pages.task.notFound.text}</Title>;
}
