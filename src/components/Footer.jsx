import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
        <a href="mailto:prashant.aman9@gmail.com" className="footer__link">prashant.aman9@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a href="https://github.com/Pk9697" className="social-list__link" target='_blank'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a href="https://www.linkedin.com/in/prashant-kumar-0a15a314b/" className="social-list__link" target='_blank'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer