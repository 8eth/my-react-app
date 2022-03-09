import React from 'react'
import {Route, Switch} from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/about'>
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App
