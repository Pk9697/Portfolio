import React from 'react'

function Intro() { 
  return (
    <section className='intro' id='home'>
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Jane Smith</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src="../img/dev-jane-01.jpg" alt="profile-pic" />
    </section>
  )
}

export default Intro