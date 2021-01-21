import React from 'react';
import { Link } from "react-router-dom";


const NavBar = ({ user, handleLogout }) => {
    return (
      <>
        {user ? (
          <nav
            className='navbar navbar-expand-lg navbar-light bg-light'
            style={{ zIndex: "9999" }}
          >
            <a className='navbar-brand' href='/'>
              Welcome, {user.name}
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  {" "}
                  <a className='nav-link' href='/'>
                    Home <span className='sr-only'>(current)</span>
                  </a>{" "}
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                <Link to='/messenger' className='nav-link'>
                    Chat
                  </Link> 
                </li>
                <li className='nav-item'>
                  <Link to='/messageBoard' className='nav-link'>
                    Practice Message Board
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/search' className='nav-link'>
                    Search for Points of interest
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    href='/trips'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Trips
                  </Link>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='/addtrip'>
                      Add Trips
                    </a>
                    <a className='dropdown-item' href='/trips'>
                      View Trips
                    </a>
                  </div>
                </li>
                <li className='nav-item logout'>
                  <Link to='/users' className='nav-link'>
                    Active Users
                  </Link>
                </li>
                <li className='nav-item logout'>
                <Link to='/discussion' className='nav-link'>
                    Discussion Board
                  </Link>
                </li>
                
                <Link to='/' className='nav-link logout' onClick={handleLogout}>
                  Log Out
                </Link>
              </ul>
            </div>
          </nav>
        ) : (
          <nav
            className='navbar navbar-expand-lg navbar-light bg-light'
            style={{ zIndex: "9999" }}
          >
            <a className='navbar-brand' href='/'>
              Welcome
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  {" "}
                  <a className='nav-link' href='/'>
                    Home <span className='sr-only'>(current)</span>
                  </a>{" "}
                </li>
                <li>
                  <Link to='/login' className='nav-link'>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to='/signup' className='nav-link'>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </>
    );
}

export default NavBar;
