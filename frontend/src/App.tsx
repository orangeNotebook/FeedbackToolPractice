import React, { Component } from "react";
import "./App.css";
import Behaviours from "./components/Behaviours/behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home"


class App extends Component {


  render() {

    
    return (
      <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>
     
    );
  }
}

export default App;