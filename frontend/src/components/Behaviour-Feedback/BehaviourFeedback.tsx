import React, { Component } from "react";
import Axios from "axios";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const BehaviourFeedback = ({match:{params:{parseBehaviour, id}}}) => {
  let feedback = []

  Axios({
    method: "POST",
    url: "http://localhost:4000/behaviourFeedbacks",
    data: {behaviour: id},
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    feedback = res.data
    console.log(res.data)
  })

  return(
  <div>
    <h1> {parseBehaviour} </h1>
    <p> {feedback} </p>
  </div>
)};

export default BehaviourFeedback;

