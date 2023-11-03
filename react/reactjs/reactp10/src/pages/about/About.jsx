import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./About.module.css"

import { useAuthContext } from '../../context/AuthContext'

const About = () => {
  const {user} = useAuthContext();

  return (
    <div className={styles.container}>
      <h2>Sobre este projeto</h2>
      <p>Projeto do curso de React Js: <em>"React do Zero a Maestria"</em> feito com React e Firebase</p>
    {user ? (
      <Link to={"/"} className={styles.link}>Voltar ao Início</Link>
    ) : (
      <Link to={"/register"} className={styles.link}>Fazer Login</Link>
    )}

    </div>
  )
}

export default About