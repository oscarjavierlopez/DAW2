import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export function HeaderWithLogin() {
    return (
        <header className="flex justify-between items-center mb-6 px-8 py-10">
            <div className="flex items-center justify-between gap-3">
                <AccountCircleIcon fontSize="large" className="bg-blue-700 rounded-full" />
                <div>
                    <p className=" text-gray-300 text-xs">USUARIO</p>
                    <p className=" text-white text-xl font-bold ">Carlos Mendoza</p>
                </div>
            </div>
            <button className="bg-gray-500 px-4 py-2 rounded-full text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm flex items-center gap-1.5">
                <LogoutIcon />
                <span>Salir</span>
            </button>
        </header>
    );
}