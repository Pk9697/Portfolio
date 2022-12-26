import React from 'react'

function Services() {
  return (
    <section className='my-services' id='my-services'>
        <h2 className='section__title section__title--services'>What I do</h2>
        <div className="services">
            <div className="service">
                <h3>Development</h3>
                <p>I am a versatile frontend developer with a speciality in React JS.
                I also have a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript.
                </p>
            </div>
            <div className="service">
                <h3>Design</h3>
                <p>I have the skill to design full responsive websites using mobile-first design approach with relative units like ems and rems,grid,flexbox and media queries.
                    I also know how to use bootstrap library to design responsive user interface. 
                </p>
            </div>
            {/* <div className="service">
                <h3>WordPress</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> */}
        </div>
        <a href="#work" className='btn'>see my work</a>
    </section>
  )
}

export default Services