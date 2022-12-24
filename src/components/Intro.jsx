import React from 'react'

function Intro(props) { 
  const subtitleElement=!props.link?props.subtitle:<a className='project-link' href={`${props.link}`} target='_blank'>--Checkout Live--</a> 
  // console.log(subtitleElement)
  return (
    <section className='intro' id='home'>
        <h1 className="section__title section__title--intro">
            {props.title} {props.name && <strong>Jane Smith</strong>}
        </h1>
        <p className="section__subtitle section__subtitle--intro">{subtitleElement}</p>
        <img src={`../img/${props.img}`} alt="profile-pic" className='intro__img' />
    </section>
  )
}

export default Intro