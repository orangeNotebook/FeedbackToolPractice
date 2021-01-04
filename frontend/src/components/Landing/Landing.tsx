import React, { Component } from 'react';
import styled from "styled-components"
import BehaviourFeedback from '../Behaviour-Feedback/BehaviourFeedback';
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch, Link, pathname } from 'react-router-dom';




class Landing extends Component {



  render() {
    return (
      <div>
        <h1>Behaviours Feedback</h1>
        <ul>
          <li><Link to="/Behaviours">My behaviours and ratings </Link></li>
          <li><Link to="/Request-Rating">Request a rating</Link></li>
          <li><Link to="/Team-Rating">My team's ratings</Link></li>
          <li><Link to="/Submit-Rating">Submit a rating</Link></li>
        </ul>
      </div>


    );
  }
}

export default Landing;