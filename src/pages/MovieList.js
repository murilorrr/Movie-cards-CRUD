import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => {
        this.setState({
          loading: false,
          movies: data,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return (<Loading />);
    return (
      <div data-testid="movie-list" className="movie-list" style={ { display: 'flex' } }>
        {movies.map((movie) => (<MovieCard
          className="movie-list"
          key={ movie.title }
          movie={ movie }
        />))}
      </div>
    );
  }
}

export default MovieList;
