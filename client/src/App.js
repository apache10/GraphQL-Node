import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

// components
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';


// apollo client set-up
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql' //uri for server graphql path
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Welcome everybody!</h1>
        <MovieList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
