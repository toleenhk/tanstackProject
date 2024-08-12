import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./api";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newTodo) => createTodo(newTodo),
    onMutate: () => {
      console.log("it is on mutate");
    },
    onSuccess: () => {
      console.log("it is on success");
    },
    onError: () => {
      console.log("it is on error");
    },
    onSettled: (_, error) => {
      console.log("it is on settled");
      if (error) {
        console.log("there is an error");
      } else {
        console.log("i should put invalidatequery");
        queryClient.invalidateQueries({ queryKey: ["todos"] });
        //   queryClient.invalidateQueries({ queryKey: ["todoById"] });
        //instead of refreash the page so we could see the new todo now every time we submit we see new todo
      }
    },
  });
  return mutation;
}
