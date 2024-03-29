import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
	const [isNavOpen, setisNavOpen] = React.useState(false)
	const style1 = {
		transition: 'transform 1s',
		transform: 'rotate(90deg)',
	}
	const style2 = {
		transition: 'transform 1s',
		transform: 'rotate(0deg)',
	}

	function handleClick() {
		setisNavOpen((prev) => !prev)
	}
	return (
		<header className='header'>
			<div className='logo'>
				{/* <img src="../img/devjane.png" alt="devjane_logo" />  */}
				<Link to='/' className='nav__link'>
					<h3>{`<Portfolio>`}</h3>
				</Link>
			</div>
			<div
				className='nav-toggle'
				aria-label='toggle navigation'
				onClick={handleClick}
			>
				<span className='hamburger'>
					<i
						style={isNavOpen ? style1 : style2}
						className='fa-solid fa-bars fa-xl'
					></i>
				</span>
			</div>
			{isNavOpen && (
				<nav className='nav' id='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link to='/' className='nav__link' onClick={handleClick}>
								Home
							</Link>
						</li>
						{props.name && (
							<li className='nav__item'>
								<a
									href='#my-services'
									className='nav__link'
									onClick={handleClick}
								>
									My Services
								</a>
							</li>
						)}
						{props.name && (
							<li className='nav__item'>
								<a href='#about' className='nav__link' onClick={handleClick}>
									About me
								</a>
							</li>
						)}
						{props.name && (
							<li className='nav__item'>
								<a href='#work' className='nav__link' onClick={handleClick}>
									My Work
								</a>
							</li>
						)}
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Header
