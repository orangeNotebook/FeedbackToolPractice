import React, { Component } from "react";
import Behaviours from "../Behaviours/Behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
const Home = () => {
    return (
       <div>
        <Behaviours/>
      </div>
    );
}
 
export default Home;