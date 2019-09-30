import React from 'react'
import {
  Nav,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import './App.js'




// const link = {
//   textDecoration: 'underline'
// }\


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
