import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="container">
{/* j'ai mis des liens au pif car eslint m'embete pour rien */}
    <div className="navbar-header">
      <button className="navbar-toggler" data-toggle="open-navbar1">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="www.waver.com">
        <h4 className='wa'>Wa<span>Ver</span></h4>
      </a>
    </div>

    <div className="navbar-menu" id="open-navbar1">
      <ul className="navbar-nav">
        <li className="active"><a href="www.home.com">Home</a></li>
        <li className="navbar-dropdown">
          <ul className="dropdown" id="my-dropdown-id">
          </ul>
        </li>
        <li className="navbar-dropdown">
          <a href="www.google.com" className="dropdown-toggler" data-dropdown="blog">
            Blog <i className="fa fa-angle-down"></i>
          </a>
        </li>
        <li><a href="www.register.com">Register</a></li>
        <li><a href="www.login.com">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar