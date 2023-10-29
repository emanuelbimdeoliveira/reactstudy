import "./NavBar.css";

import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/about">Sobre</NavLink>
        <NavLink className="links" to="/More">Adicionar</NavLink>
    </nav>
  )
}

export default NavBar