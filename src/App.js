import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages/index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Switch>
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route
              exact
              path="/"
              component={ MovieList }
            />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
