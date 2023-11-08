import React from 'react'

import { NavLink } from 'react-router-dom'

// css
import "./NavBar.css"

// hooks
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthContext } from '../../context/AuthContext'

const NavBar = () => {
    const {user} = useAuthContext();
    const {auth, logOut} = useAuthentication();

  return (
    <nav>
        <NavLink className={"links"} to={"/"}>Mini<span>Blog</span></NavLink>
        <ul>
            <li>
                <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/"}>Home</NavLink>
            </li>

            {!user && ( 
                <>
                    <li>
                        <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/login"}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/register"}>Cadastrar</NavLink>
                    </li>
                </>
                )
            }

            {user && ( 
                <>
                    <li>
                        <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/dashboard"}>DashBoard</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/newpost/create"}>NewPost</NavLink>
                    </li>
                </>
                )
            }

            <li>
                <NavLink className={({isActive}) => {return isActive ? "activated links" : "links"}} to={"/about"}>Sobre</NavLink>
            </li>

            {user && (
                <li><span className='links' onClick={() => {logOut(auth)}}>Sair</span></li>
            )}

        </ul>
    </nav>

  )
}

export default NavBar