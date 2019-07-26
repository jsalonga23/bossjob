import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header'
import JobsList from './shared/components/Jobs/JobsList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <JobsList />
        </div>
      </div>
    );
  }
}

export default App;
