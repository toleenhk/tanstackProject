// JavaScript version of the PokemonDetail type
// In JavaScript, we don't explicitly define types

export async function getPokemonsList() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
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
