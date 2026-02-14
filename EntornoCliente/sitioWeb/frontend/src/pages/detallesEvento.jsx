import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import { Navigate, useParams } from "react-router";
import { BASE_URL } from "../utils/api";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function DetallesEvento() {
    const { user, setUser } = useContext(userContext);
    const { id } = useParams();
    const [evento, setEvento] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}/eventos/${id}`)
            .then(response => response.json())
            .then(data => setEvento(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    if (!user) return <Navigate to={'/login'} />

    if (evento) {
        const { id, nombre, imagen, descripcion, fecha, municipio } = evento;
        let fechaEvento = new Date(fecha?.substring(0, 10));
        let mes = '';
        let weekDay = '';
        switch (fechaEvento.getMonth()) {
            case 0:
                mes = 'Enero';
                break;
            case 1:
                mes = 'Febrero'
                break;
            case 2:
                mes = 'Marzo'
                break;
            case 3:
                mes = 'Abril'
                break;
            case 4:
                mes = 'Mayo'
                break;
            case 5:
                mes = 'Junio'
                break;
            case 6:
                mes = 'Julio'
                break;
            case 7:
                mes = 'Agosto'
                break;
            case 8:
                mes = 'Septiembre'
                break;
            case 9:
                mes = 'Octubre'
                break;
            case 10:
                mes = 'Noviembre'
                break;
            case 11:
                mes = 'Diciembre'
                break;
        }
        switch (fechaEvento.getDay()) {
            case 0:
                weekDay = 'Domingo';
                break;
            case 1:
                weekDay = 'Lunes';
                break;
            case 2:
                weekDay = 'Martes';
                break;
            case 3:
                weekDay = 'Miércoles';
                break;
            case 4:
                weekDay = 'Jueves';
                break;
            case 5:
                weekDay = 'Viernes';
                break;
            case 6:
                weekDay = 'Sábado';
                break;
        }

        return (
            <>
                <Link to={'/'} className="absolute top-4 left-4 bg-gray-500/80 rounded-lg px-1 py-1 hover:scale-110 hover:bg-gray-500">
                    <ArrowBackIcon sx={{ color: '#FFFFFF' }} />
                </Link>
                <img src={imagen} alt="Portada del evento" className="w-screen h-56 object-cover" />
                <div className="px-3">
                    <h2 className="text-white text-4xl font-bold mb-6 mt-3">{nombre}</h2>
                    <div className="flex gap-3 items-center mb-2">
                        <p className="bg-gray-500/15 rounded-lg px-1 py-1">
                            <CalendarTodayIcon sx={{ color: '#2F57EB' }} />
                        </p>
                        <span className="text-white font-bold text-lg">{weekDay} {fechaEvento.getDate()} de {mes}, {fechaEvento.getFullYear()}</span>
                    </div>
                    <div className="flex gap-3 items-center mb-8">
                        <p className="bg-gray-500/15 rounded-lg px-1 py-1">
                            <LocationOnIcon sx={{ color: '#2F57EB' }} />
                        </p>
                        <span className="text-white font-bold text-lg">{municipio?.nombre}</span>
                    </div>
                    <p className="text-white font-bold text-base mb-1.5">Descripción</p>
                    <p className="text-gray-500 text-sm">{descripcion}</p>
                </div>
                <div className="w-screen flex justify-center items-center mt-8">
                    <button className="px-12 py-4 bg-blue-500 rounded-xl flex justify-center items-center hover:bg-blue-800 hover:scale-110">
                        <span className="text-sm text-white font-bold">Apuntarme</span>
                        <ArrowForwardIcon sx={{ color: '#FFFFFF' }} />
                    </button>
                </div>
            </>
        );
    }

    return <h1 className="text-5xl text-white font-extrabold">Evento no encontrado</h1>
}