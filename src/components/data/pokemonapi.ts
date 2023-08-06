export class PokemonAPI {
	url: string;
	constructor() {
		this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
	}

	async getPokemonInfo() {
		const response = await fetch(this.url);

		const result = await response.json();
		console.log(result);
		const pokemonInfo = await Promise.all(
			result.results.map(async (item: { url: string }) => {
				const singlePokemonUrl = item.url;
				const response = await fetch(singlePokemonUrl);
				const pokemonData = await response.json();

				return pokemonData;
			})
		);
		return pokemonInfo;
	}
}
