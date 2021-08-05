import React, { Component } from 'react';
import propTypes from 'prop-types';
import './MovieDetails.css';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((data) => {
        this.setState({
          loading: false,
          movie: data,
        });
      });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div className="movie-card-details" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-genre">{genre}</p>
        <h4 className="movie-card-subtitle">{subtitle}</h4>
        <h5 className="movie-card-storyline">{storyline}</h5>
        <p className="movie-card-rating">{rating}</p>
        <div className="movie-card-options">
          <Link className="btn btn-success" to="/">VOLTAR</Link>
          <Link className="btn btn-primary" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
            className="btn btn-danger"
            to="/"
            onClick={ () => movieAPI.deleteMovie(id) }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
