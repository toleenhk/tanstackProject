import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  component: search,
});

export function search() {
  return <div>hiii</div>;
}

export default search;
