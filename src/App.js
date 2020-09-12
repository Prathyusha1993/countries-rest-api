import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";

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
      <div className={this.state.theme ? "light page" : "dark page"}>
        <Navbar 
        theme={this.state.theme}
        switchTheme = {this.switchTheme}/>
      </div>
     );
  }
}
 
export default App;