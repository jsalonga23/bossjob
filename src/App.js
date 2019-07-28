import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header';
import JobsList from './shared/components/Jobs/JobsList';
import store from './Store';

import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <JobsList />

        </div>
      </div>
    </Provider>
    );
  }
}

export default App;
