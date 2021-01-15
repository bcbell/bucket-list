import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
    
      {user ?
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:'9999'}}>
          <div className="navbar-brand" >Welcome, {user.name}</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item"> <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> </li>
              <li  className="nav-item" ><Link to="/" className="nav-link">Profile</Link></li>
              <li  className="nav-item" >
             
             
              <Link  to='/' className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trips
                </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/' className="dropdown-item" href="/">Add Trip</Link>
                  <Link to='/' className="dropdown-item" href="/">View Trips </Link>
        </div>
              </li>
              <li  className="nav-item" ><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='/' className='nav-link' onClick={handleLogout}>LOG OUT</Link>
            </ul>
           
          </div>
        </nav>
      :
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:'9999'}}>
      <Link className="navbar-brand" href="#">Welcome</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
          <li className="nav-item active"> <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> </li>
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
