import { gql } from 'apollo-boost';

// to get the list of directors
const getDirectorsQuery = gql`
    {
        directors {
            name
            id
        }
    }
`;

// to get the list of movies
const getMoviesQuery = gql`
    {
        movies {
            name
            id
        }
    }
`;

// to add movie
const addMovieMutation = gql`
mutation($name:String!, $genre:String!, $directorId:ID!){
    addMovie(name:$name,genre:$genre,directorId:$directorId){
        name
        id
    }
}
`

// to add director
const addDirectorMutation = gql`
mutation($name:String!, $age:Int){
    addDirector(name:$name,age:$age){
        name
        id
    }
}
`
// movie details
const getMovieQuery = gql`
    query($id:ID){
        movie(id:$id){
            id
            name
            genre
            director{
                id
                name
                age
                movies{
                    name
                    id
                }
            }
        }
    }
`

export { getDirectorsQuery, getMoviesQuery, addMovieMutation, getMovieQuery, addDirectorMutation };