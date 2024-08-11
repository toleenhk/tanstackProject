import { createFileRoute } from "@tanstack/react-router";
import { useTodosList } from "../../services/queries";

// Define the route for the todo list component
export const Route = createFileRoute("/_todo-list/todo-list")({
  component: TodoList,
});

// Main TodoList component
export default function TodoList() {
  const { data, isError, error, isPending } = useTodosList();

  if (!data) {
    return <div className="text-center text-gray-500">Loading...</div>; // Enhanced loading state styling
  }
  if (isError) {
    return <div>Hi, there is an error: {error.message}</div>;
  }
  if (isPending) {
    <div> ...Loading</div>;
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Todo List
      </h2>
      <ul className="space-y-2">
        {data.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center p-2 bg-blue-50 hover:bg-blue-100 rounded-md shadow-sm"
          >
            <input
              type="checkbox"
              className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
