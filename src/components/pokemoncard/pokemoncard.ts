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

	createTemplate() {
		const pokemonList = this.pokemon
			.map(
				(item) => `
		<li><p class="pokemon-name">${item.name}</p><img class="pokemon-pic" src="${item.sprites.front_default}" alt="A pokemon picture" width="150px"></li>`
			)
			.join('');

		return `
      <ul class="ul_main">${pokemonList}</ul>
      `;
	}
}
