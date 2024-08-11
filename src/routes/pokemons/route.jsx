import { createFileRoute, Link } from "@tanstack/react-router";
import { getPokemonsList } from "../../api/pokemonList";

export const Route = createFileRoute("/pokemons")({
  component: pokemons,
  loader: async () => {
    const data = await getPokemonsList();
    return data;
  },
});

export function pokemons() {
  const data = Route.useLoaderData();
  if (!data) {
    return <div>Error loading Pokémon data.</div>;
  }

  // Extract the results array from the response
  const pokemons = data.results;
  console.log(pokemons);
  return (
    <div>
      hi here are all pokemons:
      <div>
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            className="block p-4 border rounded-lg hover:bg-gray-200 transition-colors duration-200"
            to={"pokemon/$id"}
            params={pokemon.id}
          >
            {pokemon.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
