import { Component } from '../component.js';
import { PokemonAPI } from '../data/pokemonapi.js';
import { type PokemonType } from '../pokemonmodel/pokemonclass.js';

export class PokemonCard extends Component {
	pokemon: PokemonType[];
	repository: PokemonAPI;

	constructor(selector: string) {
		super(selector);
		this.pokemon = [];
		this.repository = new PokemonAPI();
		this.handleLoad();
	}

	async handleLoad() {
		this.pokemon = await this.repository.getPokemonInfo();
		this.template = this.createTemplate();
		this.render();
	}

	getPokemonImage() {}

	createTemplate() {
		const pokemonList = this.pokemon
			.map(
				(item) => `
		<li><p class="pokemon-name">${item.name}</p><p class="pokemon-picture">${item.sprites}</p></li>`
			)
			.join('');

		return `
      <ul class="ul_main">${pokemonList}</ul>
      `;
	}
}
