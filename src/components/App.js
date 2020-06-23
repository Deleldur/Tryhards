import React, { Component } from "react";
import Navigation from './common/Navigation';
import "../sass/main.scss";
import Home from './Pages/Home';

 class App extends Component {
  render() {
    return (

      <React.Fragment>
      <Home />
      </React.Fragment>
      
   );
  }
}


export default App;