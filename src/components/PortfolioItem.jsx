import React from 'react'
import {useLocation} from 'react-router-dom'
import Intro from './Intro'
import Header from './Header'
import Footer from './Footer'
export default function PortfolioItem() {
    const location=useLocation()
    const data=location.state
    // console.log(data)
  return (
    <div>
      <Header name={data.name}/>
      <Intro {...data} />

      <div className="portfolio-item-individual">
          <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
          <img className='portfolio-item-individual__img' src={`img/${data.img}`} alt=""/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
          <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>

      <Footer/>
    </div>
  )
}
