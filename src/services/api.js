import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

export const getTodosList = async () => {
  const response = await axiosInstance.get("todos");
  return response.data; // Use `response.data` to access the JSON content
};
export const getTodosByIds = async (id) => {
  const response = await axiosInstance.get(`todos/${id}`);
  return response.data;
};

export const createTodo = async (todo) => {
  try {
    const response = await axiosInstance.post("posts", todo); // Ensure "posts" is the correct endpoint
    return response.data; // Axios automatically provides the response data in response.data
  } catch (error) {
    // Log the error and throw a customized error message
    console.error("Error creating todo:", error);
    throw new Error(error.response?.data?.message || "Failed to create todo");
  }
};
