import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie:
      { title, storyline, imagePath, id, rating } } = this.props;
    return (

      <div data-testid="movie-card" className="movie-card">
        <div
          className="div-img"
          style={ { backgroundImage: `url(${imagePath})` } }
        />
        <div className="div-info">
          <div>
            <h4 className="movie-card-title">{title}</h4>
            🌟
            { rating }
          </div>
          <h5 className="movie-card-storyline">{storyline}</h5>
          <Link className="btn btn-success" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
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
    rating: propTypes.string,
  }).isRequired };

export default MovieCard;
