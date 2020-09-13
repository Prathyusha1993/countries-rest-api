import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import DetailPage from './components/DetailPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      theme: true
    }
  }
  
  switchTheme = () => {
    this.setState(state => ({theme : !state.theme}))
  }

  render() { 
    return ( 
      <Router>
      <div className={this.state.theme ? "light page" : "dark page"}>
        <Navbar 
        theme={this.state.theme}
        switchTheme = {this.switchTheme}/>
        <Switch>
          <Route exact path="/">
            <Homepage theme={this.state.theme}/>
          </Route>
          <Route path="/:id">
            <DetailPage theme={this.state.theme}/>
          </Route>
        </Switch>
      </div>
      </Router>
     );
  }
}
 
export default App;