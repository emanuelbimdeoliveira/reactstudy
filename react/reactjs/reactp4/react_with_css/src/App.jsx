import { useState } from 'react'
import './App.css'

import CarList from './components/CarList'
import Form from './components/Form';


function App() {
  const [part, setPart] = useState(true);


  const handlePart = () => {
    setPart((prevPart) => {
      return prevPart ? false : true;
    })
  }


  return (
    <>
      <h1>React com CSS</h1>
      <button type='button' onClick={handlePart}>{part ? "Formulário" : "Lista de Carros"}</button>
      {part ? (
        <CarList></CarList>
      ) : (
        <Form></Form>
      )}
    </>
  )
}

export default App
