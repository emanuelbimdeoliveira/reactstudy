import React from 'react'

const Counter = () => {
  const handleNewLink = () => {
    window.open("http://youtube.com/results?search_query=provai+e+vede+28-10-2023", "_self");
  }
  return (
    <div>
        Counter
        <a href="http://youtube.com/results?search_query=29+10+2023" target="_self" rel="noopener noreferrer">Link para o dia de hoje</a>
        <button onClick={handleNewLink}>click</button>
    </div>
  )
}

export default Counter