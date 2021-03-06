import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// components
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import AddDirector from './components/AddDirector';


// apollo client set-up
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql' //uri for server graphql path
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Movie World!</h1>
        <MovieList />
        <AddMovie />
        <AddDirector />
      </div>
    </ApolloProvider>
  );
}

export default App;
