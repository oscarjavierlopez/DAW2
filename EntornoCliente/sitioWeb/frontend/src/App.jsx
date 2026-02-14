import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createContext } from 'react';
import { Routes, Route } from "react-router";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { DetallesEvento } from './pages/detallesEvento';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detallesEvento/:id' element={<DetallesEvento />} />
      </Routes>
    </userContext.Provider>
  )
}

export default App
