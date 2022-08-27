import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white sticky-top bg-dark">
      <NavLink className="navbar-brand" to='/' >Tasking</NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Tasks</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/new' className='nav-link'>Create task</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
