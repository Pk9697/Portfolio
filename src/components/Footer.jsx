import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <a href="mailto:hello@jane.dev" className="footer__link">hello@jane.dev</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a href="#" className="social-list__link">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer