import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header.js';

describe('Given the class Header', () => {
	describe('When it is instantiated with a valid selector', () => {
		document.body.innerHTML = '<div class="main-div" id="root"> </div>';
		const header = new Header('#root');
		test('The component in the document should be', () => {
			expect(header).toBeInstanceOf(Header);

			const element = screen.getByRole('banner');
			expect(element).toBeInTheDocument();
		});
	});
});
