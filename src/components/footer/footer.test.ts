import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer.js';

describe('Given the class Footer', () => {
	describe('When it is instantiated with a valid selector', () => {
		document.body.innerHTML = '<div class="main-div" id="root"> </div>';
		const footer = new Footer('#root');

		test('The component in the document should be', () => {
			expect(footer).toBeInstanceOf(Footer);

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
			const element = screen.getByRole('contentinfo');
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			expect(element).toBeInTheDocument();
		});
	});
});
