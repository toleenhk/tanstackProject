// JavaScript version of the PokemonDetail type
// In JavaScript, we don't explicitly define types

export async function getPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pokemonDetail = await response.json();
    return pokemonDetail;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return null; // Or handle it in a way that suits your application
  }
}
