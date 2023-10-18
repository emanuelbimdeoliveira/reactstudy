import './App.css'

import { useEffect, useState } from "react";
import { useFetch } from './hooks/useFetch';

function App() {
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");

  const url = "http://localhost:3000/colors";

  const { data, httpConfig, loading } = useFetch(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColorObject = {}
    newColorObject.color = newColor;

    httpConfig(newColorObject, "POST");
  }
  

  return (
    <>
      <h1>Http react</h1>
      {loading && <p className='spinner-border'></p>}
      {
        (!loading && data) && data.map((item, index) => (
          <p style={{background: item.color}} key={index}>{item.color}</p>
        ))
      }
      <form onSubmit={handleSubmit}>
        <label>
          <span>Adicione uma nova Cor:</span>
          <input type="text" onChange={(event) => {setNewColor(event.target.value)}} value={newColor}/>
        </label>
        <input type="submit" value="Nova Cor" />
      </form>
    </>
  )
}

export default App
