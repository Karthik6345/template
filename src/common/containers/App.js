

import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Header from "../components/layout/Header/Header";
import About from "../components/pages/About";
// import "./App.css";

import React from "react";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default App;
