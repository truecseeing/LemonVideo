import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/login1.js"
import Registercn from './components/reigster/register_cn.js'
import VideoSort from './components/film/videosort1.js'
import Home from './Home'

function App() {
  return (
    <Router>

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route path="/register" component={Registercn}></Route>
      <Route exact path="/video" component={VideoSort}></Route>

    </Router>
  );
}

export default App;
