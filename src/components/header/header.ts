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
    <h1 class="main-title">PokéAPI</h1>
				<h2 class="second-title">Gotta Catch 'Em All</h2>
    </header>`;
	}
}
