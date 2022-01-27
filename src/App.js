import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Search from './components/Search';
import Movies from './components/Movies';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [favoriteList, setFavoriteList] = useState([]);
	const [showFavorite, setShowFavorite] = useState(false);

	useEffect(() => {
		axios
			.get(
				'https://api.themoviedb.org/3/search/movie?api_key=2ff2b842380979ada1e6bc585b8d84bd&language=de-DE&query=test'
			)
			.then((res) => {
				setMovies(res.data.results);
			});
	}, []);

	return (
		<div className='App'>
			<h1>Movies Search</h1>

			<Search setSearchResults={setSearchResults} />
			<Button
				variant='primary'
				onClick={() => setShowFavorite(!showFavorite)}
			>
				{showFavorite ? 'hide' : 'show Favorites'}
			</Button>

			{showFavorite ? (
				<FavoriteMovies
					favoriteList={favoriteList}
					setFavoriteList={setFavoriteList}
				/>
			) : (
				<Movies
					movies={searchResults.length > 0 ? searchResults : movies}
					favoriteList={favoriteList}
					setFavoriteList={setFavoriteList}
				/>
			)}
		</div>
	);
}

export default App;
