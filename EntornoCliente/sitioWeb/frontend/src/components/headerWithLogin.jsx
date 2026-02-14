import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../App";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export function HeaderWithLogin() {
    const { user, setUser } = useContext(userContext);
    const salir = () => {
        setUser(undefined);
    }

    return (
        <header className="flex justify-between items-center mb-2 px-8 py-4">
            <div className="flex items-center justify-between gap-3">
                <AccountCircleIcon fontSize="large" className="bg-blue-700 rounded-full" />
                <div>
                    <p className=" text-gray-300 text-xs">{user.rol}</p>
                    <p className=" text-white text-xl font-bold ">{user.nombre}</p>
                </div>
            </div>
            <button onClick={salir} className="bg-gray-500 px-4 py-2 rounded-full text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm flex items-center gap-1.5 hover:bg-gray-400">
                <LogoutIcon />
                <span>Salir</span>
            </button>
        </header>
    );
}