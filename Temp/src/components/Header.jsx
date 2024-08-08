import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <h1 className='title'>Header</h1>
      <ul className='nav-links'>
        <li className="link">
            <NavLink
            to ="/home"
            className={({isActive}) => (isActive? "active": "")}
            >
                Home
            </NavLink>
        </li>
        <li className="link">
        <NavLink
            to ="/product"
            className={({isActive}) => (isActive? "active": "")}
            >
                Product
            </NavLink>
        </li>
        <li className="link">
        <NavLink
            to ="/account"
            className={({isActive}) => (isActive? "active": "")}
            >
                My Account
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
