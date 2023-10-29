
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
// components
import NavBar from "./components/NavBar"

import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Vite + React</h1>
      </header>
      <main>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
