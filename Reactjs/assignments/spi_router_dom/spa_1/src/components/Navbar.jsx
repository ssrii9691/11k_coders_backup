import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <Link to="/Zomato" class="nav-link">
                  Zomato
                </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <Link to="/home" class="nav-link">
                  Home
                </Link>
          </li>
          <li class="nav-item">
          <Link to="/About" class="nav-link">
                  About
                </Link>
          </li>
          <li class="nav-item">
          <Link to="/Contact" class="nav-link">
                  Contact
                </Link>
          </li>
          <li class="nav-item">
          <Link to="/Moreinfo" class="nav-link">
                  Moreinfo
                </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

