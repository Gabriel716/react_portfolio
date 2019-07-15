// Imports the `React` module and the `Component` class from that module.
import React, { Component } from 'react';
import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import PortfolioDetail from "./portfolio/portfolio-detail"
import Auth from "./pages/auth"
import NoMatch from "./pages/no-match"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// Creates an `App` class that is a child of the `Component` class.
class App extends Component {
  constructor(){
    super()
    
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer/>
            <Switch>
              {/* Creates a route to components */}
              <Route exact path="/" component={Home}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/about-me" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/blog" component={Blog}/>
              <Route exact path="/portfolio/:slug" component={PortfolioDetail}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
