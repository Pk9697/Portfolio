import React from 'react'

function Footer() {
  return (
    <footer>
        <a href="mailto:hello@jane.dev" className="footer__link">hello@jane.dev</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a href="#" className="social-list__link">a</a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">b</a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">c</a>
            </li>
            <li className="social-list__item">
                <a href="#" className="social-list__link">d</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer