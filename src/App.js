import React, { Component } from 'react';
import {Header} from './containers/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'title'}></Header>
      </div>
    );
  }
}

export default App;
