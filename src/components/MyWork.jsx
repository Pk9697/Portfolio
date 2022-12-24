import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import PortfolioItem from './PortfolioItem'
import { portfolioData } from '../portfolioData'
function MyWork() {

    // console.log(portfolioData)
    const portfolioItems=portfolioData.map(item=>(
        <Link 
            key={item.id}
            to="/portfolio"
            state={{...item}}
            className="portfolio__item">
            <img src={`../img/${item.img}`} alt="" className='portfolio__img'/>
        </Link>
    ))
  return (
    <section className='my-work' id='work'>
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
        <div className="portfolio">
            {portfolioItems}
            {/* <Link 
                to="/portfolio"
                state={{test1:"test1v"}}
                className="portfolio__item">
                <img src="../img/portfolio-01.jpg" alt="" className='portfolio__img'/>
            </Link>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-02.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-03.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-04.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-05.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-06.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-07.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-08.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-09.jpg" alt="" className='portfolio__img'/>
            </a>
            <a href="#" className="portfolio__item">
                <img src="../img/portfolio-10.jpg" alt="" className='portfolio__img'/>
            </a> */}
        </div>
    </section>
  )
}

export default MyWork