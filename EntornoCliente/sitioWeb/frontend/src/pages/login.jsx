import { BASE_URL } from "../utils/api";
import { useContext, useState } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router";

export function Login() {
    const {user, setUser} = useContext(userContext);
    const [err, setErr] = useState('');
    let navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const datos = Object.fromEntries(formData);


        fetch(`${BASE_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: datos.nombreUsuario,
                contrasena: datos.contrasena
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === true){
                setUser(data.user);
                setErr('');
                navigate('/');
            }else{
                setErr('Usuario o contraseña incorrectos');
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <main className="flex items-center justify-center h-screen" onSubmit={submit}>
            <form className=" rounded-lg border-solid border-gray-800 border-2 flex flex-col py-8 px-8 w-md">
                <h2 className="text-white text-xl font-bold m-0 mb-2">Bienvenido</h2>
                <label htmlFor="nombreUsuario" className="text-gray-500 text-xs font-semibold mt-3.5">NOMBRE DE USUARIO</label>
                <input type="text" name="nombreUsuario" id="nombreUsuario" className="border-gray-500 bg-gray-800 border rounded-md w-sm mt-2.5 px-2 py-2
                 text-gray-500 text-sm h-10"/>
                <label htmlFor="contrasena" className="text-gray-500 text-xs font-semibold mt-3.5">CONTRASEÑA</label>
                <input type="password" name="contrasena" id="contrasena" className="border-gray-500 bg-gray-800 border rounded-md w-sm mt-2.5 px-2 py-2
                 text-gray-500 text-sm h-10" />
                 <p className="text-base text-red-700 font-bold">{err}</p>
                <input type="submit" value="Iniciar Sesión" className="text-white font-bold mt-6 px-2.5 py-2.5 bg-blue-700 rounded-md hover:bg-blue-400" />
            </form>
        </main>
    );
}