import { userContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function EventCard({ id, nombre, fecha, imagen, municipio, openEditModal, openDeleteAlert }) {
    const { user, setUser } = useContext(userContext);

    return (
        <article className="border border-gray-600 rounded-2xl bg-gray-950 flex flex-col items-center w-4xl pb-4" >
            <img src={imagen} alt="imagen del evento" className="w-6xl h-48 object-cover rounded-t-2xl" />
            <p className="pt-3.5 text-gray-600">{fecha.substring(0, 10)} <span className="font-extrabold">·</span> {municipio}</p>
            <p className="text-white font-bold text-xl">{nombre}</p>
            <Link to={'/detallesEvento/' + id} className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm hover:bg-blue-400 hover:scale-95 
                 w-3xl text-center">Ver más información</Link>
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