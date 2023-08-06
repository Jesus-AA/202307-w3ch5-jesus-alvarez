import { Footer } from './components/footer/footer.js';
import { Header } from './components/header/header.js';
import { Main } from './components/main/main.js';
import { PokemonCard } from './components/pokemoncard/pokemoncard.js';

const webPageComponents = [
	new Header('#root'),
	new Main('#root'),
	new PokemonCard('main'),
	new Footer('#root'),
];
