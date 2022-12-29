import React from 'react'

function Intro(props) { 
  const cvElement=<>{props.subtitle} <a className='project-link' href='../pImg/resume.pdf' target='_blank'>--CV--</a></>
  const subtitleElement=!props.link?cvElement :<a className='project-link' href={`${props.link}`} target='_blank'>--Live--</a> 
  // console.log(subtitleElement)
  return (
    <section className='intro' id='home'>
        <h1 className="section__title section__title--intro">
            {props.title} {props.name && <strong>{props.name}</strong>}
        </h1>
        <p className="section__subtitle section__subtitle--intro">{subtitleElement}</p>
        <img src={`../pImg/${props.img[0]}`} alt="profile-pic" className='intro__img' />
    </section>
  )
}

export default Intro