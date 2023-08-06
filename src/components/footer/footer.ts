import { Component } from '../component.js';

export class Footer extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
		<footer>
			<address class='adress'>
				Pokémon and Pokémon character names are trademarks of Nintendo.
			</address>
	</footer>
		`;
	}
}
