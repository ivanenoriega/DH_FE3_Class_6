export const getPokemonByName = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.json();

    return {
      name: pokemon.name,
      id: pokemon.id,
      image: pokemon.sprites.front_default,
    };
  } catch (error) {
    return {
      name: "",
      id: 0,
      image: "",
    };
  }
};
