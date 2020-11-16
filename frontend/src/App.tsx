import React, { Component } from "react";
import "./App.css";
import Behaviours from "./components/Behaviours/Behaviours"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from "./components/Home/Home"
import BehaviourFeedback from "./components/Behaviour-Feedback/BehaviourFeedback";


class App extends Component {


  render() {

    
    return (
      <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/BehaviourFeedback/:parseBehaviour" component={BehaviourFeedback} exact/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>
     
    );
  }
}

export default App;