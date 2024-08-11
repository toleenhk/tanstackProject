import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useAuth } from "./hooks/useAuth";

function App() {
  const authentication = useAuth();
  const router = createRouter({ routeTree, context: { authentication } });

  return (
    <>
      <RouterProvider router={router} context={{ authentication }} />
    </>
  );
}

export default App;
