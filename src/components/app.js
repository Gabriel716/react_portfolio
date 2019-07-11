// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';
import moment from "moment";
import PortfolioContainer from "./portfolio/portfolio-container";


// Creates an `App` class that is a child of the `Component` class.
class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>My portfolio</h1>
        <div>{moment().format('MMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer/>
      </div>
    );
  }
}

export default App;
