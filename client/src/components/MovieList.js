import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// component
import MovieDetails from './MovieDetails';
//query
import {getMoviesQuery} from '../queris/queries';


// binding apollo with react
class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    // add error handler when server is down
    displayMovies(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading movies...</div> );
        } else {
            return data.movies.map(movie => {
                return(
                    <li key={ movie.id }onClick={ (e) => this.setState({ selected: movie.id }) }>{ movie.name }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="movie-list">
                    { this.displayMovies() }
                </ul>
                <MovieDetails movieId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getMoviesQuery)(MovieList);
