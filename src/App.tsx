import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { data } from "./types";
import Student from "./Student";

const App = () => {
  return (
    <>
      <Student name={'aLi'} age={22} rollno={33} marks={89} />
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
};

export default App;
