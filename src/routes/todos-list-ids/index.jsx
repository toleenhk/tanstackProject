import { createFileRoute } from "@tanstack/react-router";
import { useTodosByIds } from "../../services/queries";

export const Route = createFileRoute("/todos-list-ids/")({
  component: todosbyids,
});

export function todosbyids() {
  const ids = [1, 2, 3];
  const { data, isLoading, isError } = useTodosByIds(ids);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
