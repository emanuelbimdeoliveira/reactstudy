import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
    
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import More from './pages/More'

// components
import NavBar from "./components/NavBar"


function App() {
  return (
    <>
      <h1>React Routes</h1>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
