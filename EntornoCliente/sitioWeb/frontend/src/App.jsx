import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createContext } from 'react';
import { Routes, Route } from "react-router";
import { Home } from './pages/home';
import { Login } from './pages/login';

export const userContext = createContext();

function App() {
  const [eventos, setEventos] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/eventos')
      .then(response => response.json())
      .then(data => setEventos(data));
  }, [])

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </userContext.Provider>
  )
}

export default App
