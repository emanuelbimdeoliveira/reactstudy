import React from 'react'

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Product = () => {
  const {id} = useParams();
  const url = `http://localhost:3000/products/${id}`;
  const {data, httpConfig, loading} = useFetch(url);

  return (
    <>
      <h2>Produto</h2>
      {data && <p>{data.name} - {data.id} <Link to={`/products/${data.id}/info`}>Informações</Link></p>}
      
    </>
  )
}

export default Product