import { useState } from 'react'
import './App.css'

import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent';


function App() {
  const [parts, setParts] = useState(false);

  const peoples = [
    {name: "A", age: 15, job: "Studant"},
    {name: "B", age: 25, job: "Driver"},
    {name: "C", age: 40, job: "Lawyer"},
    {name: "D", age: 55, job: "Gardener"},
    {name: "E", age: 20, job: "Programmer"},
    {name: "F", age: 65, job: "Retired"},
    {name: "G", age: 12, job: "Studant"},
    {name: "H", age: 17, job: "Studant"}
  ];


  const changePart = () => {
    setParts((prevPart) => {
      return prevPart ? false : true;
    })
  }

  return (
    <>
      <h1>React</h1>
      <div>
        {parts ? (
          <FirstComponent></FirstComponent>
        ) : (
          <>
            <h2>Características</h2>
            {peoples.map((item) => (
              <SecondComponent key={item.name} name={item.name} age={item.age} job={item.job}></SecondComponent>
            ))}
          </>
        )}
      </div>
      <button onClick={changePart}>Parte 2</button>
    </>
  )
}

export default App
