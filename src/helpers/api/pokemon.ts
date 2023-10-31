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

export const getListOfPokemons = async (limit: number, offset: number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemons = await response.json();

    return pokemons.results.map((pokemon: any) => {
      return {
        name: pokemon.name,
        id: pokemon.url.split("/")[6],
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.url.split("/")[6]
        }.png`,
      };
    });
  } catch (error) {
    return [];
  }
};
