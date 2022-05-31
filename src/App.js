import React from 'react'
import {Switch, Route } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'


function App() {
  return (
    <>
    <Switch>
          <Route  path="/about" component={About}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        
        </Switch>

        </>

  )
}

export default App