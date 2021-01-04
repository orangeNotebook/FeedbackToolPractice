import React, { Component } from 'react';
import styled from "styled-components"
import BehaviourFeedback from '../Behaviour-Feedback/BehaviourFeedback';
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch, Link, pathname } from 'react-router-dom';




class SubmitRating extends Component {



  render() {
    return (
      <div>
        <h1>Submit a Rating</h1>
        <ul>
          <li><Link to="/">Return to Landing Page</Link></li>
        </ul>
      </div>


    );
  }
}

export default SubmitRating;