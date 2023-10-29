import React from 'react'

import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        <NavLink className={"link"} to={"/"}>Home</NavLink>
        <NavLink className={"link"} to={"/About"}>Sobre</NavLink>
        <NavLink className={"link"} to={"/Counter"}>Contador</NavLink>
    </nav>
  )
}

export default NavBar