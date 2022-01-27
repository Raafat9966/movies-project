import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Search({ setSearchResults }) {
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=2ff2b842380979ada1e6bc585b8d84bd&language=de-DE&query=${query}`
			)
			.then((res) => {
				setSearchResults(res.data.results);
			});
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className='search'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search'
					onChange={handleChange}
					value={query}
				/>
				<Button variant='primary' type='submit'>
					Search
				</Button>
			</form>
		</div>
	);
}

export default Search;
