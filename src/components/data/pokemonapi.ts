export class PokemonAPI {
	url: string;
	constructor() {
		this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
	}

	async getPokemonInfo() {
		const response = await fetch(this.url); // Utilizamos fetch para traer datos de la URL.

		const result = await response.json(); // Se espera a que la solicitud se complete y se obtenga una respuesta utilizando la palabra clave 'await' y posteriormente se extrae el contenido JSON.
		console.log(result);
		const pokemonInfo = await Promise.all(
			result.results.map(async (item: { url: string }) => {
				// El results es una propiedad del objeto result.
				const singlePokemonUrl = item.url;
				const response = await fetch(singlePokemonUrl);
				const pokemonData = await response.json();
				console.log(pokemonData);
				return pokemonData;
			})
		);
		return pokemonInfo;
	}
}
