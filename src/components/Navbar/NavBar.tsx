import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="top">
        {/* <div className="topCenter"> */}
            <ul className="topList">
                <li className="topListItem" >
                  <Link to ='/'>HOME
                  </Link>
                  </li>
                <li className="topListItem">
                  <Link to='/aboutus'>About us</Link></li>
                <li className="topListItem"><Link to='/contact'>Contact</Link></li>
                <li className="topListItem"><Link to='/write'>Write</Link></li>
                <li className="topListItem"><Link to='/gallery'>Gallery</Link></li>
            </ul>
        </div>
        
    // </div>
  )
}

export default NavBar