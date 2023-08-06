export class Component {
	// eslint-disable-next-line @typescript-eslint/parameter-properties
	selector: string;
	template!: string;
	element!: Element;

	constructor(selector: string) {
		this.selector = selector;
	}

	render(position: InsertPosition = 'beforeend') {
		const element = document.querySelector(this.selector);
		if (!element) return;
		this.element = element;
		this.element.insertAdjacentHTML(position, this.template);
	}
}
