import { useContext, useEffect, useState } from "react";
import { HeaderWithLogin } from "../components/headerWithLogin";
import { HeaderWithoutLogin } from "../components/headerWithoutLogin";
import { userContext } from "../App";
import { BASE_URL } from "../utils/api";
import { EventCard } from "../components/eventCard";

export function Home() {
    const { user, setUser } = useContext(userContext);
    const [eventos, setEventos] = useState([]);
    const [search, setSearch] = useState('');

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

    return (
        <>
            {user !== undefined ? <HeaderWithLogin /> : <HeaderWithoutLogin />}

            <div className="flex flex-col gap-6 justify-center items-center">
                <input type="search" value={search} className="bg-gray-600 block opacity-50 text-white w-4xl p-2 pl-2 
            rounded-lg mb-6 text-sm" placeholder="Busca eventos en municipios cercanos..." onInput={changeInput} />

                {eventos.length > 0 && eventos.map((evento) => {
                    return (<EventCard key={evento.id} nombre={evento.nombre} fecha={evento.fecha} imagen={evento.imagen} municipio={evento.municipio.nombre} />)
                })}

                {eventos.length === 0 && <p className="text-white font-bold">No hay resultados para la búsqueda</p>}

                {(user !== undefined && user.rol === "administrador") && <button className="mb-3 p-4 rounded-sm text-sm text-white border border-white hover:scale-110">Añadir evento</button>}
            </div>
        </>
    );
}