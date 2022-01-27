import React from 'react';
import MoviesList from './MoviesList';

function Movies({ movies, favoriteList, setFavoriteList }) {
	return (
		<div className='movies'>
			{movies.map((movie) => (
				<MoviesList
					key={movie.id}
					movie={movie}
					favoriteList={favoriteList}
					setFavoriteList={setFavoriteList}
				/>
			))}
		</div>
	);
}

export default Movies;
