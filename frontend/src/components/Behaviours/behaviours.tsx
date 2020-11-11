import React, { Component } from 'react';
import styled from "styled-components"

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
    data: null
    };

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
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
      // <GridContainer>
      //   <GridItem>
      //      {this.state.data[0]}
      //   </GridItem>
      //   <GridItem>
      //       {this.state.data[1]}
      //   </GridItem>
      //   <GridItem>
      //      {this.state.data[2]}
      //   </GridItem>
      //   <GridItem>
      //     {this.state.data[3]}
      //   </GridItem>
      //   <GridItem>
      //       {this.state.data[4]}
      //   </GridItem>
      //   <GridItem>
      //      {this.state.data[5]}
      //   </GridItem>
      //   <GridItem>
      //      {this.state.data[6]}
      //   </GridItem>
      //   <GridItem>
      //     {this.state.data[7]}
      //   </GridItem>
      //   <GridItem>
      //       {this.state.data[8]}
      //   </GridItem>

        
      // </GridContainer>
      <div>
        <p>{this.state.data}</p>
        </div>
    );
  }
}

export default Behaviours;