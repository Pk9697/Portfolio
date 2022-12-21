import React from 'react'

function Header() {
    const [isNavOpen, setisNavOpen] = React.useState(false)
    // const styles = {
    //     transition: 'transform 2s',
    //     transform: 'rotate(90deg)',
    // };
  return (
    <header className='header'>
        <div className="logo">
            <img src="../img/devjane.png" alt="devjane_logo" /> 
        </div>
        <div className='nav-toggle' aria-label='toggle navigation' onClick={()=>setisNavOpen(prev=>!prev)}> 
            <span className='hamburger'><i className="fa-solid fa-bars fa-xl"></i></span>
        </div>
        {isNavOpen && 
        <nav className='nav' id='nav'>
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className='nav__link'>Home</a></li>
                <li className="nav__item"><a href="#my-services" className='nav__link'>My Services</a></li>
                <li className="nav__item"><a href="#about" className='nav__link'>About me</a></li>
                <li className="nav__item"><a href="#work" className='nav__link'>My Work</a></li>
            </ul>
        </nav>
        }       
    </header>
  )
}

export default Header