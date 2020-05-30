import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//query
import {getMovieQuery} from '../queris/queries';


class MovieDetails extends Component {
    displayMovieDetails(){
        const { movie } = this.props.data;
        if(movie){
            return(
                <div>
                    <h2>{ movie.name }</h2>
                    <p>{ movie.genre }</p>
                    <p>{ movie.director.name }</p>
                    <p>All books by this director:</p>
                    <ul className="other-movies">
                        { movie.director.movies.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>No Movie selected...</div> );
        }
    }
    
    render(){
        return(
            <div id="book-details">
                { this.displayMovieDetails() }
            </div>
        );
    }
}

export default graphql(getMovieQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.movieId
            }
        }
    }
})(MovieDetails);
