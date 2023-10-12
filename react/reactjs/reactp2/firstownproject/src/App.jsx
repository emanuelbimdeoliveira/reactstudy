import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import FirstComponent
import FirstComponent from "./components/FirstComponent"
import SecondComponent from './components/SecondComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </>
  )
}

export default App
