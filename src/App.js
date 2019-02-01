import React, { Component } from 'react';
import {Header} from './containers/header';
import Swiper from './components/swiper';
import './App.css';

class App extends Component {
  render() {
		const options = {
		  direction: 'horizontal',
			interval: 300,
    };
		return (
      <div className="App">
        <Header title={'title'}></Header>
				<Swiper {...options}>
					<div className="s-item">slide 1</div>
					<div className="s-item">slide 2</div>
					<div className="s-item">slide 3</div>
					<div className="s-item">slide 4</div>
				</Swiper>
      </div>
    );
  }
}

export default App;
