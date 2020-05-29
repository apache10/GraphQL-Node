import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


// query
const getMovieQuery = gql`
    {
        movies{
            name
            id
        }
    }
`
// binding apollo with react


class MovieList extends Component {
    displayMovies(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading movies...</div> );
        } else {
            return data.movies.map(movie => {
                return(
                    <li key={ movie.id }>{ movie.name }</li>
                );
            })
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="movie-list">
                    { this.displayMovies() }
                </ul>
            </div>
        );
    }
}

export default graphql(getMovieQuery)(MovieList);
