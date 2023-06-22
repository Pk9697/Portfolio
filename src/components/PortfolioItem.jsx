import React from 'react'
import {useLocation} from 'react-router-dom'
import Intro from './Intro'
import Header from './Header'
import Footer from './Footer'
import Image from './Image'
export default function PortfolioItem() {
    const location=useLocation()
    const data=location.state
    // console.log(data)
  return (
    <div>
      <Header name={data.name}/>
      <Intro {...data} />

      <div className="portfolio-item-individual">
          {data.techUsed && <p>Technologies Used: {data.techUsed}</p>}
          <div className='portfolio-item-individual__img-container'>
            {data.img.map((item,index)=>(
              <Image key={`${item.id}-${index}`} assetName={item} className='portfolio-item-individual__img'/>
              ))}
          </div>
              {data.overview && <p>{data.overview}</p>}
          {data.conceptsApplied && <p>Concepts Applied: {data.conceptsApplied}</p>}
      </div>

      <Footer/>
    </div>
  )
}
