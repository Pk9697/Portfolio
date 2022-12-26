import React from 'react'

function AboutMe() {
  return (
    <section className='about-me' id='about'>
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className='section__subtitle section__subtitle--about'>Front-End Developer</p>
        <div className="about-me__body">
            <p>Enthusiastic Front End Developer with robust technical skills in React, HTML, CSS, Responsive Design, Data Structures, and
            Algorithms. Proven ability to create complex, interactive, and user-friendly web applications. I have the skills to develop innovative and creative web solutions.</p>
            <p>I have a B.Tech degree in Computer Science & Engineering from LPU with an aggregate of 8.04 CGPA.</p>
            <p>I love watching sports with a special interest in football.I also play football egames online and with the given opportunity loves to play any kind of outdoor games.</p>
        </div>
        <img src="../pImg/profile_pic2.jpg" alt="" className='about-me__img'/>
    </section>
  )
}

export default AboutMe