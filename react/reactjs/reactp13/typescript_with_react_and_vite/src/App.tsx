import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import One from './components/One'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <p>{count}</p>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <FirstComponent />
      <SecondComponent name={"Emanuel"}/>
      <One />
    </>
  )
}

export default App
