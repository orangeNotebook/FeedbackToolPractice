import React, { Component } from "react";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const BehaviourFeedback = ({match:{params:{parseBehaviour, id}}}) => (
  <div>
    <h1> {parseBehaviour} </h1>
    <p> {id} </p>
  </div>
);

export default BehaviourFeedback;

