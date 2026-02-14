import { useContext, useEffect, useState } from "react";
import { HeaderWithLogin } from "../components/headerWithLogin";
import { HeaderWithoutLogin } from "../components/headerWithoutLogin";
import { userContext } from "../App";
import { BASE_URL } from "../utils/api";
import { EventCard } from "../components/eventCard";
import { Modal } from "../components/modalForm";
import AddIcon from '@mui/icons-material/Add';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function Home() {
    const { user, setUser } = useContext(userContext);
    const [eventos, setEventos] = useState([]);
    const [search, setSearch] = useState('');
    const [modalClass, setModalClass] = useState('hidden');
    const [action, setAction] = useState('');
    const [contentOpacity, setContentOpacity] = useState('');
    const [eventToEditId, setEventToEditId] = useState();
    const [viewSwal, setviewSwal] = useState(false);
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        fetch(`${BASE_URL}/eventos`)
            .then(response => response.json())
            .then(data => setEventos(data));
    }, [modalClass, viewSwal]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            fetch(`${BASE_URL}/eventos`)
                .then(response => response.json())
                .then(data => {
                    if (search !== "") {
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

    const openAddModal = () => {
        let viewModal = 'fixed inset-0 flex justify-center items-center w-screen';
        setModalClass(viewModal);
        setAction('add');
        setContentOpacity('opacity-25');
    }

    const openEditModal = (e) => {
        let viewModal = 'fixed inset-0 flex justify-center items-center w-screen';
        setModalClass(viewModal);
        setAction('edit');
        setContentOpacity('opacity-25');
        setEventToEditId(e.currentTarget.id.substring(7));
    }

    const closeModal = () => {
        setModalClass('hidden');
        setContentOpacity('');
    }

    const openDeleteAlert = (e) => {
        let id = e.currentTarget.id.substring(9);

        MySwal.fire({
            title: `¿Está seguro de que desea eliminar el evento?`,
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            confirmButtonColor: '#9E6357',
        }).then(async (result) => {
            if (result.isConfirmed) {
                setviewSwal(true);
                fetch(`${BASE_URL}/eventos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => setviewSwal(false))
                    .catch(error => console.error('Error:', error));
            }
        });
    }

    return (
        <>
            <div className={contentOpacity}>
                {user !== undefined ? <HeaderWithLogin /> : <HeaderWithoutLogin />}

                {(user !== undefined && user.rol === 'administrador') && (
                    <div className="flex items-center justify-between mb-6 px-6">
                        <div>
                            <h2 className="text-lg font-bold text-white">Gestión de Eventos</h2>
                            <p className="text-xs text-gray-400">Panel de administración activo</p>
                        </div>
                        <button className="flex justify-center bg-blue-600 items-center px-2 py-2 rounded-sm hover:scale-110"
                            onClick={openAddModal}>
                            <AddIcon />
                            <span className="text-sm text-white font-bold">Añadir Evento</span>
                        </button>
                    </div>
                )}

                <div className="flex justify-center">
                    <input type="search" value={search} className="bg-gray-600 block opacity-50 text-white w-4xl p-2 pl-2 
            rounded-lg mb-6 text-sm" placeholder="Busca eventos en municipios cercanos..." onInput={changeInput} />
                </div>

                <div className="flex flex-col gap-6 justify-center items-center mb-4">
                    {eventos.length > 0 && eventos.map((evento) => {
                        return (<EventCard key={evento.id} id={evento.id} nombre={evento.nombre} fecha={evento.fecha}
                            imagen={evento.imagen} municipio={evento.municipio.nombre} openEditModal={openEditModal} openDeleteAlert={openDeleteAlert} />)
                    })}

                    {eventos.length === 0 && <p className="text-white font-bold">No hay resultados para la búsqueda</p>}
                </div>
            </div>

            <Modal modalClass={modalClass} closeModal={closeModal} action={action} id={eventToEditId} />
        </>
    );
}
