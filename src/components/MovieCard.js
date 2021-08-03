import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>
          <img
            width="150px"
            src={ imagePath }
            alt=""
          />
        </p>
        {rating}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }).isRequired };

export default MovieCard;
