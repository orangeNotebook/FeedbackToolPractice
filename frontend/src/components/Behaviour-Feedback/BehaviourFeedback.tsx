import React, { Component, useState, useEffect  } from "react";
import Axios from "axios";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const BehaviourFeedback = ({match:{params:{parseBehaviour, id}}}) => {

  interface IResponse {
    _id: string,
    behaviour: number,
    userFrom: string,
    userTo: string,
    date: string,
    feedback: string
  }

  let [responseData, setResponseData] = useState({feedback: []});


  // Axios({
  //   method: "POST",
  //   url: "http://localhost:4000/behaviourFeedbacks",
  //   data: {behaviour: id},
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   // let feedback = []
  //   // feedback = res.data
  //   console.log(res.data)
  //   // let a = responseData.feedback.slice()
  //   // a = feedback
  //   // setResponseData(res.data) 
  // }).then(body =>{
  //   console.log(body)
  //     })


  function setReturnedState(body){
    setResponseData({feedback: body.feedback})
  }

  function sendText() {
    let text = JSON.stringify({behaviour: id})
    const requestOptions = {
      method: "POST",
      body: text,
      headers: {"Content-Type": "application/json"}
    };


    fetch("http://localhost:4000/behaviourFeedbacks", requestOptions)
    .then((response) => {
      return response.json()
    }).then((body)=> {
      console.log(body)
      // setReturnedState(body)
    });;
    
  };    
  
  sendText()


  
  return(
  <div>
    <h1> {parseBehaviour} </h1>

    {/* {responseData.map((response) => <li>{response}</li>)} */}

  </div>

  
)};

export default BehaviourFeedback;

