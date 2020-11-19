import React, { Component } from "react";
import Axios from "axios";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const BehaviourFeedback = ({match:{params:{parseBehaviour, id}}}) => {

  let [responseData, setResponseData] = React.useState([])

  Axios({
    method: "POST",
    url: "http://localhost:4000/behaviourFeedbacks",
    data: {behaviour: id},
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    let feedback = []
    feedback = res.data
    console.log(res.data)
    setResponseData(feedback) //hth am i supposed to get this 
  })

  
  return(
  <div>
    <h1> {parseBehaviour} </h1>
    {responseData.map((response) => <li>{response}</li>)}
  </div>
)};

export default BehaviourFeedback;

