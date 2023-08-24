const BASE_URL = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
    const response = await fetch(BASE_URL + "pokemon?limit=100&offset=0");
    const data = await response.json();
    return data.results;
}

export async function getPokemom(name: string) {
    const response = await fetch(BASE_URL + "pokemon/" + name);
    const data = response.json();
    return data;
}
