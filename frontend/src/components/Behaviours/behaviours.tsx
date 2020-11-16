import React, { Component } from 'react';
import styled from "styled-components"
import BehaviourFeedback from '../Behaviour-Feedback/BehaviourFeedback';
import { BrowserRouter, Route, Switch, Link, pathname } from 'react-router-dom';

const GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
background-color: #2196F3;
padding: 10px;
`

const GridItem = styled.div`
background-color: rgba(255, 255, 255, 0.8);
border: 1px solid rgba(0, 0, 0, 0.8);
padding: 20px;
font-size: 30px;
text-align: center;
`

interface IBehaviours {
 id: number,
    withinTeam1: string,
    withinTeam2: string,
    withinTeam3: string,
    withinTD1: string,
    withinTD2: string,
    withinTD3: string,
    outsideTD1: string,
    outsideTD2: string,
    outsideTD3: string
}


class Behaviours extends Component {
  state = {
    withinTeam1: "",
    withinTeam2: "",
    withinTeam3: "",
    withinTD1: "",
    withinTD2: "",
    withinTD3: "",
    outsideTD1: "",
    outsideTD2: "",
    outsideTD3: ""
    }

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ 
       withinTeam1: res.withinTeam1,
       withinTeam2: res.withinTeam2,
       withinTeam3: res.withinTeam3,
       withinTD1: res.withinTD1,
       withinTD2: res.withinTD2,
       withinTD3: res.withinTD3,
       outsideTD1: res.outsideTD1,
       outsideTD2: res.outsideTD2,
       outsideTD3: res.outsideTD3
      }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/behaviours');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  render() {
    return (
      <GridContainer>
        <GridItem>
          {this.state.withinTeam1}
          <div>
          {/* {`/about/${test}`} */}
           <Link to={`/BehaviourFeedback/${this.state.withinTeam1}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
            {this.state.withinTeam2}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.withinTeam2}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
           {this.state.withinTeam3}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.withinTeam3}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
          {this.state.withinTD1}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.withinTD1}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
            {this.state.withinTD2}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.withinTD2}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
           {this.state.withinTD3}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.withinTD3}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
           {this.state.outsideTD1}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.outsideTD1}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
          {this.state.outsideTD2}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.outsideTD2}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>
        <GridItem>
          {this.state.outsideTD3}
          <div>
          <Link to={`/BehaviourFeedback/${this.state.outsideTD3}`}> <button type= "button">Click here for more info</button></Link>
          </div>
        </GridItem>

        
      </GridContainer>
    );
  }
}

export default Behaviours;