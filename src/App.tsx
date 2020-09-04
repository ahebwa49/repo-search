import React from 'react';

import { Header } from './Header';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
