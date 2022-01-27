import React from 'react';
import { Card } from 'react-bootstrap';

function FavoriteMovies({ favoriteList }) {
	return (
		<div className='movies'>
			{favoriteList.map((movie) => (
				<div className='movie'>
					<Card style={{ width: '18rem' }}>
						<Card.Img
							variant='top'
							src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
						/>
						<Card.Body>
							<Card.Title>Movie Title: {movie.title}</Card.Title>
							<Card.Text>
								popularity: {movie.popularity}
							</Card.Text>
							<Card.Text>
								vote average: {movie.vote_average}
							</Card.Text>
							<Card.Text>
								vote count: {movie.vote_count}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default FavoriteMovies;
