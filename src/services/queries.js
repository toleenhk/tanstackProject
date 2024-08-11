import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodosByIds, getTodosList } from "./api";

export function useTodosList() {
  const { isLoading, isError, data, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodosList,
  });

  return { isLoading, isError, data, isPending };
}

// we use it to fitch some ids info
export function useTodosByIds(ids) {
  const queries = ids.map((id) => ({
    queryKey: ["todosByIds", { id }],
    queryFn: () => getTodosByIds(id),
  }));

  const results = useQueries({ queries });

  const isLoading = results.some((result) => result.isLoading);
  const isError = results.some((result) => result.isError);
  const data = results.map((result) => result.data);
  console.log(`data: ${data}`); // here we have arries= the ids, Id=[1,2,3,4], we have 4 arries every array contain objects
  return { data, isLoading, isError };
}
