import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        className="active item"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Home     .
      </NavLink>
      <NavLink
        to="/about"
        exact
        className="item"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        .     About
      </NavLink>
    </div>
  )
}

export default NavBar