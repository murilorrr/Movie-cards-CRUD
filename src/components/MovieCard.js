import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie:
      { title, subtitle, storyline, imagePath, rating, genre, id } } = this.props;
    return (
      <Link to={ `/movies/${id}` }>
        <div data-testid="movie-card">
          <img alt="Movie Cover" src={ `../${imagePath}` } width="150px" />
          <p>{ `title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </Link>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
    genre: propTypes.string,
    id: propTypes.number,
  }).isRequired };

export default MovieCard;
