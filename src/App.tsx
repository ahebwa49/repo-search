import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Header } from './Header';
import RepoSearch from './RepoSearch';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer 0a875c3b7cc2352acd932cdc0dd0736ba1776fb7`,
  },
});

class App extends React.Component {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <RepoSearch client={client} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
