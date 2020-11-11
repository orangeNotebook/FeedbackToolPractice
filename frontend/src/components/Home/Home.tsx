import React, { Component } from "react";
import Behaviours from "../Behaviours/behaviours"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
const Home = () => {
    return (
       <div>
        <Behaviours/>
      </div>
    );
}
 
export default Home;