import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    
    const handleSearch = (event) => {
        setQuery(event.target.value)
        navigate(`/search?q=${query}`)
    }

  return (
    <>
        <h2>SearchForm</h2>
        <form>
            <input type="text" value={query} onChange={handleSearch}/>
            <input type="submit" value="Buscar" />
        </form>
    </>

  )
}

export default SearchForm