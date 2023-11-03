// route-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// provider
import { AuthContextProvider } from "./context/AuthContext"

// hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./hooks/useAuthentication"
import { onAuthStateChanged } from "firebase/auth"

// components
import NavBar from "./components/NavBar"
import Footer  from "./components/Footer"

// pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

import './App.css'
import DashBoard from "./pages/dashboard/DashBoard"
import NewPost from "./pages/newpost/NewPost"

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const userLoading = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if (userLoading) {
    return <p>Carregando...</p>
  }


  return (
    <>
      <AuthContextProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={user ? (<Navigate to={"/"} />) : (<Login />)}/>
              <Route path="/register" element={user ? (<Navigate to={"/"} />) : (<Register />)}/>
              <Route path="/about" element={<About />}/>
              <Route path="/dashboard" element={!user ? (<Navigate to={"/register"} />) : (<DashBoard />)}/>
              <Route path="/newpost/create" element={!user ? (<Navigate to={"/register"} />) : (<NewPost />)}/>
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </AuthContextProvider>
    </>
  )
}

export default App
