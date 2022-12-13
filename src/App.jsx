import React from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Services/>
      <AboutMe/>
      <MyWork/>
      <Footer/>
    </div>
  )
}

export default App
