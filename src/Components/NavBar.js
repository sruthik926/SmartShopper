import React from 'react'
import {
  Nav,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './App.js'

// NavBar component - sets the links to each one of the components using NavLink component


const NavBar = () => {
    return (
        <Navbar bg="dark">
          <Nav>
            <NavLink tag={Link} to="/About">About</NavLink>
            <NavLink tag={Link} to="/TopSearches">Top Searches</NavLink>
            <NavLink tag={Link} to="/Contact">Contact</NavLink>
            <NavLink tag={Link} to="/Search">Search</NavLink>
          </Nav>
        </Navbar>
    )
}






export default NavBar
