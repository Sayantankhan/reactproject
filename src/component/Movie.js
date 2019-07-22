import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import { AppBar } from "material-ui";

import * as movieActions from '../actions/movie.actions';
import * as movieHelpers from '../helper/moviehelper';
import MovieList from './MovieList';
 
class MovieBrowser  extends Component {

    componentDidMount() {
        this.props.getTopMovies(this.state.currentPage);
    }

    render() {

        const {topMovies} = this.props;
        const movies = movieHelpers.getMoviesList(topMovies.response);

        return (
            <div>
                <AppBar title="Movie Lists" /> 
                <Container>
                    <Row>
                        <p>Search will go here</p>
                    </Row>
                    <Row>
                        <MovieList movies={movies} isLoading={topMovies.isLoading} />
                    </Row>
                </Container>
            </div>
        )
    }
}


export default connect(
    // Map nodes in our state to a properties of our component
    
    (state) => ({
      topMovies: state.movieBrowser.topMovies
    }),
    // Map action creators to properties of our component
    { ...movieActions }
  )(MovieBrowser );