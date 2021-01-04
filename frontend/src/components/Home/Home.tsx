import React, { Component } from "react";
import Behaviours from "../Behaviours/Behaviours"
import Landing from "../Landing/Landing"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
const Home = () => {
    return (
       <div>
        <Landing/>
      </div>
    );
}
 
export default Home;