import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/header'
import './App.css'

function App() {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/eventos')
      .then(response => response.json())
      .then(data => setEventos(data));
  }, [])

  return (
    <>
      <Header></Header>
      <ul className='m-4'>{eventos.map(evento => (
        <li key={evento.id} className='text-white'>{evento.nombre}, MUNICIPIO: {evento.municipio.nombre}</li>
      ))}</ul>
    </>
  )
}

export default App
