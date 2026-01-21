import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">GAME OF THRONES</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Characters</li>
        <li>Episodes</li>
        <li>Winter is coming</li>
      </ul>
    </nav>
  )
}

export default Navbar
