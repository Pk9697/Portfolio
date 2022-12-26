import React from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Services from './components/Services'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork'
import Footer from './components/Footer'
function App() {
  const introData={
    id:"00",
    img:["dev-jane-01.jpg"],
    title:"Hi, I am",
    subtitle:"front-end dev",
    name:"Jane Smith"
  }
  return (
    <div className="App">
      <Header name={introData.name}/>
      <Intro {...introData}/>
      <Services/>
      <AboutMe/>
      <MyWork/>
      <Footer/>
    </div>
  )
}

export default App
