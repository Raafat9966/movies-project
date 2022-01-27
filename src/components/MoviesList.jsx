import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MoviesList({ movie, favoriteList, setFavoriteList }) {
	const handleClick = () => {
		setFavoriteList([...favoriteList, movie]);
	};

	return (
		<div className='movie'>
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant='top'
					src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
				/>
				<Card.Body>
					<Card.Title>Movie Title: {movie.title}</Card.Title>
					<Card.Text>popularity: {movie.popularity}</Card.Text>
					<Card.Text>vote average: {movie.vote_average}</Card.Text>
					<Card.Text>vote count: {movie.vote_count}</Card.Text>
					<Button variant='primary' onClick={handleClick}>
						add to favorite
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default MoviesList;
