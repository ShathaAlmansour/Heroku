import React, { useState , useEffect } from 'react'
import CVL from "./components/CVL"
import CVR from "./components/CVR"
import "./App.css"


const App = () => {
    return (
      <div className="cont">
        <CVL />
        <CVR />
      </div>
    )
  }


  
  export default App;