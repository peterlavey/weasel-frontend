import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <List></List>
      </div>
    );
  }
}

export default App;
