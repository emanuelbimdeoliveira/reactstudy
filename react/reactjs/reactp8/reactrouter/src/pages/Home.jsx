import React from 'react'

import "./Home.css"

// hooks
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  const url = "http://localhost:3000/products";
  const {data, httpConfig, loading} = useFetch(url);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.name} <span>{item.id}</span></li>
        ))}
      </ul>
    </>
  )
}

export default Home