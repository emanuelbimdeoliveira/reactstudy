import "./NavBar.css";

import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/about">Sobre</Link>
        <Link className="links" to="/More">Adicionar</Link>
    </nav>
  )
}

export default NavBar