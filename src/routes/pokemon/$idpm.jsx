import { createFileRoute } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$idpm")({
  component: pokemon,
  loader: async ({ params }) => {
    const data = await getPokemon(params.idpm);
    return data;
  },
});

export default function pokemon() {
  const { idpm } = Route.useParams();
  const data = Route.useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>hi here is pokemon ID: {idpm}</h1>
      <p>{data.name}</p>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}
