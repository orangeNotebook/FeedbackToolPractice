import React, { Component } from "react";
import "./App.css";
import Behaviours from "./components/Behaviours/Behaviours"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from "./components/Home/Home"
import BehaviourFeedback from "./components/Behaviour-Feedback/BehaviourFeedback";
import RequestRating from "./components/Request-Rating/Request-Rating"
import TeamRating from "./components/Team-Rating/Team-Rating"
import SubmitRating from "./components/Submit-Rating/Submit-Rating"



class App extends Component {


  render() {

    
    return (
      <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/BehaviourFeedback/:parseBehaviour/:id" component={BehaviourFeedback} exact/>
           <Route path="/Behaviours" component={Behaviours} extract/>
           <Route path="/Request-Rating" component={RequestRating} extract/>
           <Route path="/Team-Rating" component={TeamRating} extract/>
           <Route path="/Submit-Rating" component={SubmitRating} extract/>
          <Route component={Error}/>
         </Switch>
      </div> 
    </BrowserRouter>
     
    );
  }
}

export default App;