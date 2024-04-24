export async function getPokemonData(index) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`, {
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return {
        url: `${response.sprites.other.dream_world.front_default}`,
        name: `${response.name}`,
      };
    });

  return data;
}
