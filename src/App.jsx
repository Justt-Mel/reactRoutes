import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Red from './components/red'
import Blue from './components/blue'
import Home from './components/Home'

function App() {


  return (
    <div id = "container">
    <h1>Hello React Router!</h1>
    <div id = "navbar">
      <Link to= "/">Home</Link>
      <Link to = "/blue">Blue</Link>
      <Link to = "/red">Red</Link>
      </div>
    <div id = "main-section">
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path = "/Blue" element = {<Blue/>}/>
        <Route path = "/Red" element = {<Red/>}/>
      </Routes>

    </div>
  </div>
  )
}

export default App
