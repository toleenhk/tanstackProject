import {
  createRootRoute,
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>{" "}
        <Link
          to="/pokemon/$id"
          params={{ id: 7 }}
          className="[&.active]:font-bold"
        >
          pokemon
        </Link>{" "}
        <Link to="/search" className="[&.active]:font-bold">
          search
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          login
        </Link>{" "}
        <Link to="/dashboard" className="[&.active]:font-bold">
          dashboard
        </Link>{" "}
        <Link to="/settings" className="[&.active]:font-bold">
          settings
        </Link>{" "}
        <Link to="/todo-list" className="[&.active]:font-bold">
          todos List
        </Link>{" "}
        <Link to="/todos-list-ids" className="[&.active]:font-bold">
          todos List By Ids
        </Link>{" "}
        <Link to="/post-todo" className="[&.active]:font-bold">
          post-todo
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
