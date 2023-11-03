import React from 'react'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthContext } from '../../context/AuthContext'

const Home = () => {
  const {user} = useAuthContext();

  return (
    <div>
      {user && (
        <h1>Bem Vindo {user.displayName}!</h1>
      )}
    </div>
  )
}

export default Home