import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import { portfolioData } from '../portfolioData' 
import Image from './Image'


function MyWork({ portfolioData = [] }) {
    
    const portfolioItems = portfolioData.map(item => (
        <Link 
            key={item.id}
            to="/portfolio"
            state={{...item}}
            className="portfolio__item">
            <Image assetName={item.img[0]} className='portfolio__img'/>
        </Link>
    ))
  return (
    <section className='my-work' id='work'>
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
        <div className="portfolio">
            {portfolioItems}
        </div>
    </section>
  )
}

export default MyWork