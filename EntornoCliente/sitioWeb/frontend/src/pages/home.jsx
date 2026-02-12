import { useContext, useEffect, useState } from "react";
import { HeaderWithLogin } from "../components/headerWithLogin";
import { HeaderWithoutLogin } from "../components/headerWithoutLogin";
import { userContext } from "../App";
import { BASE_URL } from "../utils/api";
import { EventCard } from "../components/eventCard";

export function Home() {
    const { user, setUser } = useContext(userContext);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/eventos`)
            .then(response => response.json())
            .then(data => setEventos(data));
    }, []);

    return (
        <>
            {user !== undefined ? <HeaderWithLogin /> : <HeaderWithoutLogin />}

            <div className="flex flex-col gap-6 justify-center items-center">
                {eventos.map((evento) => {
                    return (<EventCard key={evento.id} nombre={evento.nombre} fecha={evento.fecha} imagen={evento.imagen} municipio={evento.municipio.nombre} />)
                })}
            </div>
        </>
    );
}