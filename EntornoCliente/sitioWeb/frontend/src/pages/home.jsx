import { useContext, useEffect, useState } from "react";
import { HeaderWithLogin } from "../components/headerWithLogin";
import { HeaderWithoutLogin } from "../components/headerWithoutLogin";
import { userContext } from "../App";
import { BASE_URL } from "../utils/api";
import { EventCard } from "../components/eventCard";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


export function Home() {
    const { user, setUser } = useContext(userContext);
    const [eventos, setEventos] = useState([]);
    const [search, setSearch] = useState('');
    const [modalClass, setModalClass] = useState('hidden');
    const [municipios, setMunicipios] = useState([]);
    const [contentOpacity, setContentOpacity] = useState('');

    useEffect(() => {
        fetch(`${BASE_URL}/eventos`)
            .then(response => response.json())
            .then(data => setEventos(data));
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            fetch(`${BASE_URL}/eventos`)
                .then(response => response.json())
                .then(data => {
                    if (/^\s*/.test(search)) {
                        let regEx = new RegExp(`${search.toLowerCase()}.*`);
                        let filteredEvents = data.filter((evento) => regEx.test(evento.municipio.nombre.toLowerCase()));
                        setEventos(filteredEvents);
                    } else {
                        setEventos(data);
                    }
                });
        }, 300);

        return () => clearTimeout(debounce);
    }, [search]);

    const changeInput = (e) => {
        setSearch(e.target.value);
    }

    const openModal = () => {
        let viewModal = 'fixed inset-0 flex justify-center items-center w-screen';
        setModalClass(viewModal);
        setContentOpacity('opacity-25');

        fetch(`${BASE_URL}/municipios`)
            .then(response => response.json())
            .then(data => setMunicipios(data));
    }

    const closeModal = () => {
        setModalClass('hidden');
        setContentOpacity('');
    }

    return (
        <>
            <div className={contentOpacity}>
                {user !== undefined ? <HeaderWithLogin /> : <HeaderWithoutLogin />}

                <div className="flex justify-center">
                    <input type="search" value={search} className="bg-gray-600 block opacity-50 text-white w-4xl p-2 pl-2 
            rounded-lg mb-6 text-sm" placeholder="Busca eventos en municipios cercanos..." onInput={changeInput} />
                </div>

                <div className="flex flex-col gap-6 justify-center items-center mb-4">
                    {eventos.length > 0 && eventos.map((evento) => {
                        return (<EventCard key={evento.id} nombre={evento.nombre} fecha={evento.fecha} imagen={evento.imagen} municipio={evento.municipio.nombre} />)
                    })}

                    {eventos.length === 0 && <p className="text-white font-bold">No hay resultados para la búsqueda</p>}

                    {(user !== undefined && user.rol === 'administrador') && (
                        <button className="flex justify-center bg-blue-600 items-center px-4 py-2 rounded-sm hover:scale-110"
                            onClick={openModal}>
                            <AddIcon />
                            <span className="text-sm text-white font-bold">Añadir Evento</span>
                        </button>
                    )}
                </div>
            </div>

            <div className={modalClass}>
                <form className=" bg-gray-100 rounded-sm shadow-md w-1/2 ">
                    <div className="flex justify-end">
                        <CloseIcon onClick={closeModal} className="bg-red-600 text-white m-0.5 hover:scale-110" />
                    </div>
                    <div className="flex flex-col px-6 pt-0 pb-6">
                        <h2 className="mb-2 font-bold text-center text-xl">Nuevo Evento:</h2>
                        <label htmlFor="nombre" className="mt-1">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" placeholder="nombre del evento"
                            className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1"/>
                        <label htmlFor="fecha" className="mt-1">Fecha:</label>
                        <input type="date" name="fecha" id="fecha"
                            className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1"/>
                        <label htmlFor="imagen" className="mt-1">Imagen:</label>
                        <input type="text" name="imagen" id="imagen" placeholder="URL de imagen del evento"
                            className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1"/>
                        <label htmlFor="descripcion" className="mt-1">Descripción:</label>
                        <input type="text" name="descripcion" id="descripcion" className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1"/>
                        <label htmlFor="municipio" className="mt-1">Municipio:</label>
                        <select name="municipio" id="municipio" className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1">
                            {municipios.map((municipio) => {
                                return <option value={municipio.id} key={municipio.id}>{municipio.nombre}</option>
                            })}
                        </select>
                        <div className="flex justify-center mt-2">
                            <button className="bg-blue-600 px-4 py-2 rounded-sm text-white font-bold hover:bg-blue-400">Añadir</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}