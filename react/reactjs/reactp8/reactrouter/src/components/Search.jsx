import React from 'react'

import { useSearchParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch';


const Search = () => {
  const [searchParamsData] = useSearchParams();
  const url = `http://localhost:3000/products?${searchParamsData}`;

  const {data, config, loading} = useFetch(url);

  return (
    <div>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.name} <span>{item.id}</span> <Link to={`/products/${item.id}`}>Detalhes</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Search