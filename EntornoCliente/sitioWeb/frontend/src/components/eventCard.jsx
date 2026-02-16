import { userContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { BASE_URL } from "../utils/api";
import { useScrollTrigger } from "@mui/material";
import { Toys } from "@mui/icons-material";


export function EventCard({ id, nombre, fecha, imagen, municipio, openEditModal, openDeleteAlert, descripcion, setChangeApuntarDesapuntar }) {
    const { user, setUser } = useContext(userContext);
    let fechaEvento = new Date(fecha?.substring(0, 10));
    let mes = '';
    let weekDay = '';
    const [misEventos, setMisEventos] = useState([]);
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

    useEffect(() => {
        if (user) {
            fetch(`${BASE_URL}/eventosUsuarios/${user.id}`)
                .then(response => response.json())
                .then(data => setMisEventos(data))
                .catch(err => console.log(err));
        }
    });

    const apuntar = (e) => {
        fetch(`${BASE_URL}/eventosUsuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario: parseInt(user.id),
                id_evento: parseInt(e.currentTarget.id.substring(8))
            })
        })
            .then(response => response.json())
            .then(data => setChangeApuntarDesapuntar(true))
            .catch(err => console.log(err));
    }

    const desapuntar = (e) => {
        fetch(`${BASE_URL}/eventosUsuarios/${parseInt(user.id)}/${e.currentTarget.id.substring(11)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => setChangeApuntarDesapuntar(true))
            .catch(err => console.log(err));
    }

    return (
        <article className="border border-gray-600 rounded-2xl bg-gray-950 flex flex-col items-center w-4xl pb-4" >
            <img src={imagen} alt="imagen del evento" className="w-6xl h-48 object-cover rounded-t-2xl" />
            <p className="pt-3.5 text-gray-600">{weekDay} {fechaEvento.getDate()} de {mes}, {fechaEvento.getFullYear()} <span className="font-extrabold">·</span> {municipio}</p>
            <p className="text-white font-bold text-xl">{nombre}</p>
            <p className="text-gray-500 text-sm">{descripcion}</p>
            {(user !== undefined && misEventos.findIndex((evento) => evento.id === id) === -1) && <button id={'apuntar-' + id} className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm hover:bg-blue-400 hover:scale-95 
                 w-3xl text-center" onClick={apuntar}>Apuntarme</button>}
            {(user !== undefined && misEventos.findIndex((evento) => evento.id === id) !== -1) && <button id={'desapuntar-' + id} className="mt-3 bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm hover:bg-red-400 hover:scale-95 
                 w-3xl text-center" onClick={desapuntar}>Desapuntarme</button>}
            {(user !== undefined && user.rol === 'administrador') && (
                <div className="grid grid-cols-2 gap-1 py-3 w-3xl">
                    <button id={"editar-" + id} className="bg-gray-200/15  text-white font-bold text-sm 
                    rounded-lg px-4 py-2 hover:bg-gray-200/50 hover:scale-95 flex justify-center 
                    items-center" onClick={openEditModal}>
                        <EditIcon />
                        <span>Editar</span>
                    </button>
                    <button id={'eliminar-' + id} className="bg-red-500/15  text-white font-bold text-sm
                     rounded-lg px-4 py-2 hover:bg-red-500/50 hover:scale-95 flex
                     justify-center items-center" onClick={openDeleteAlert}>
                        <DeleteIcon />
                        <span>Eliminar</span>
                    </button>
                </div>
            )}
        </article>
    );
}