import React, { Component } from 'react';
import FilterableTable from './components/FilterableTable.js';
import Data from './components/services/Data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-title">Your Email Organized</h2>
        <p className="App-intro">
          You can recategorize your senders or move them to your inbox by unchecking the box next to the sender's name.
        </p>
        <FilterableTable emails={Data.EMAILS}/>
      </div>
    );
  }
}

export default App;
