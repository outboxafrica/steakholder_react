import './App.css';

import React, { Component } from 'react'
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
      </div>
    )
  }
}


export default App;
