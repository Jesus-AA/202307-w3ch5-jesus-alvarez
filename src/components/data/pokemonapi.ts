/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class PokemonAPI {
	url: string;
	constructor() {
		this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
	}

	async getPokemonInfo() {
		const response = await fetch(this.url);

		const result = await response.json();

		const pokemonInfo = await Promise.all(
			result.results.map(async (item: { url: string }) => {
				const singlePokemonUrl = item.url;
				const response = await fetch(singlePokemonUrl);
				const pokemonData = await response.json();

				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				return pokemonData;
			})
		);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return pokemonInfo;
	}
}
