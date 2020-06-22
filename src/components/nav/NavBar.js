import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/profile">My Profile</Link></li>
            <li>New To the Fog</li>
            <li>Versus</li>
            <li>Survive With Friends</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;