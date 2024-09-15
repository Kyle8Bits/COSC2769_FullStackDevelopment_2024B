import React from 'react'
import {NavLink} from 'react-router-dom' 

function Header() {
  return (
    <div>
        <nav className='navigate'> 
            <NavLink id='header'
                to = "/"
                className={({ isActive }) =>
                    isActive ? 'active' : ''
                }
            >
                Home
            </NavLink>

            <NavLink id='header'
              to="/customer"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Customer
            </NavLink>
        </nav>
    </div>
  )
}

export default Header
