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
