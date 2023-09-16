
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IntroScene from './scenes/Intro'
import CharacterScene from './scenes/Character'
import React, { useState, useEffect } from 'react';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once


  return (
      <Router>
        <Routes>
          <Route path="/" Component={IntroScene} />
          <Route path="/play" Component={CharacterScene} />
        </Routes>
      </Router>
    )
}

export default App
