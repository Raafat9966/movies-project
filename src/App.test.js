import { render, screen } from '@testing-library/react';
import App from './App';
import Search from './Search';

test('renders title', () => {
	render(<App />);
	const linkElement = screen.getByText('Movies Search');
	expect(linkElement).toBeInTheDocument();
});
