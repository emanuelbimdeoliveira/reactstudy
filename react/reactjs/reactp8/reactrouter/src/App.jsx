import './App.css'

// hooks
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useParams } from 'react-router-dom'
    
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import More from './pages/More'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFoundPage from './pages/NotFoundPage'

// components
import NavBar from "./components/NavBar"
import Search from './components/Search'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <h1>React Routes</h1>
      <BrowserRouter>
      <NavBar></NavBar>
      <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/more' element={<More />} />
          <Route path='/products/:id' element={<Product /> }/>
          <Route path='/products/:id/info' element={<Info />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/dismiss' element={<Navigate to={"/more"}/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
