import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
    <div className="container-fluid">
     
      <Link className='navbar-brand' to={'/'}>Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
       <Link to={'create'} className="nav-link" > Create user</Link>
      </div>
    </div>
  </nav>
  )
}

export default NavBar