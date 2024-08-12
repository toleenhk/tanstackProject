import { createFileRoute } from "@tanstack/react-router";
import { useCreatePost } from "../../services/mutation";
import { useState } from "react";

export const Route = createFileRoute("/post-todo/")({
  component: post,
});

export function post() {
  const createNewTodo = useCreatePost();
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });
  // onchange so we won't need to use =>ex: setNewTodo({ ...newTodo, description: e.target.value })
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value
    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific property based on name
    }));
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    createNewTodo.mutate(newTodo); // Trigger the mutation with the new todo data
    setNewTodo({ title: "", description: "" }); // Reset the form after submission
    console.log({ newTodo });
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className=" text-lg text-gray-600"> Create a new POST:</h1>
      <form
        onSubmit={handleNewTodoSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newTodo.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newTodo.description} // or   const { title, description } = newTodo; and only mention desc
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
