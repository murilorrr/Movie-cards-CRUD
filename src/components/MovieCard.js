import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie:
      { title, storyline, imagePath, id } } = this.props;
    return (

      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } width="150px" />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    id: propTypes.number,
  }).isRequired };

export default MovieCard;
