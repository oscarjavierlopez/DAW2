import { useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from "react-router";

export function HeaderWithoutLogin() {
    return (
        <header className="flex justify-between items-center mb-6 px-8 py-10">
            <div className="flex items-center gap-3">
                <EventAvailableIcon  className="bg-blue-700"/>
                <p className=" text-white text-xl font-bold ">Eventos</p>
            </div>
            
            <Link to="/login" className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm flex items-center gap-1.5 hover:bg-blue-400">
                <ExitToAppIcon />
                <span>Iniciar sesión</span>
            </Link>
        </header>
    );
}