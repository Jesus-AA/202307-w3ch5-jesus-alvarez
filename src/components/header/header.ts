// eslint-disable-next-line @typescript-eslint/object-curly-spacing
import { Component } from '../component.js';

export class Header extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `<header id='main-header'>
				<img class="poke-title" src="assets/Pokémon_Gotta_catch_em_all_logo.png" alt="The Pokémon Logo and Slogan">
    </header>`;
	}
}
