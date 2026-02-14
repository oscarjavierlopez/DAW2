import CloseIcon from '@mui/icons-material/Close';
import { act, useEffect, useState } from 'react';
import { BASE_URL } from '../utils/api';
import { Edit } from '@mui/icons-material';

export function Modal({ modalClass, closeModal, action, id }) {
    const [municipios, setMunicipios] = useState([]);
    const [inputNombre, setInputNombre] = useState('');
    const [inputFecha, setInputFecha] = useState('');
    const [inputImagen, setInputImagen] = useState('');
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [selectMunicipio, setSelectMunicipio] = useState('');

    let buttonContent = action === 'add' ? 'Añadir' : 'Editar';
    let h2Content = action === 'add' ? 'Nuevo Evento' : 'Actualizar Evento';

    const handleInputNombre = (e) => {
        setInputNombre(e.target.value);
    }

    const handleChangeFecha = (e) => {
        setInputFecha(e.target.value);
    }

    const handleInputImagen = (e) => {
        setInputImagen(e.target.value);
    }

    const handleInputDescripcion = (e) => {
        setInputDescripcion(e.target.value);
    }

    const handleChangeMunicipio = (e) => {
        setSelectMunicipio(e.target.value);
    }

    useEffect(() => {
        fetch(`${BASE_URL}/municipios`)
            .then(response => response.json())
            .then(data => setMunicipios(data));

        if (action === 'edit' && id) {
            fetch(`${BASE_URL}/eventos/${id}`)
                .then(response => response.json())
                .then(data => {
                    setInputNombre(data.nombre);
                    setInputFecha(data.fecha.substring(0, 10));
                    setInputImagen(data.imagen);
                    setInputDescripcion(data.descripcion);
                    setSelectMunicipio(data.id_municipio);
                });
        }

        return () => {
            setInputNombre('');
            setInputFecha('');
            setInputImagen('');
            setInputDescripcion('');
            setSelectMunicipio('');
        }
    }, [modalClass]);

    const addEvent = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const datos = Object.fromEntries(formData);

        if (action === 'add') {
            fetch(`${BASE_URL}/eventos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: datos.nombre,
                    fecha: datos.fecha,
                    descripcion: datos.descripcion,
                    imagen: datos.imagen,
                    id_municipio: parseInt(datos.municipio)
                })
            })
                .then(response => response.json())
                .then(data => closeModal())
                .catch(err => console.log(err));
        }

        if (action === 'edit') {
            fetch(`${BASE_URL}/eventos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: datos.nombre,
                    fecha: datos.fecha,
                    descripcion: datos.descripcion,
                    imagen: datos.imagen,
                    id_municipio: parseInt(datos.municipio)
                })
            })
                .then(response => response.json())
                .then(data => closeModal())
                .catch(err => console.log(err));
        }
    }

    return (
        <div className={modalClass}>
            <form className=" bg-gray-100 rounded-sm shadow-md w-1/2 " onSubmit={addEvent}>
                <div className="flex justify-end">
                    <CloseIcon onClick={closeModal} className="bg-red-600 text-white m-0.5 hover:bg-red-400 hover:scale-110" />
                </div>
                <div className="flex flex-col px-6 pt-0 pb-6">
                    <h2 className="mb-2 font-bold text-center text-xl">{h2Content}:</h2>
                    <label htmlFor="nombre" className="mt-1">Nombre:</label>
                    <input type="text" name="nombre" id="nombre" placeholder="nombre del evento"
                        className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1" value={inputNombre} onInput={handleInputNombre} />
                    <label htmlFor="fecha" className="mt-1">Fecha:</label>
                    <input type="date" name="fecha" id="fecha"
                        className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1" value={inputFecha} onChange={handleChangeFecha} />
                    <label htmlFor="imagen" className="mt-1">Imagen:</label>
                    <input type="text" name="imagen" id="imagen" placeholder="URL de imagen del evento"
                        className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1" value={inputImagen} onInput={handleInputImagen} />
                    <label htmlFor="descripcion" className="mt-1">Descripción:</label>
                    <input type="text" name="descripcion" id="descripcion" className="border-gray-500  border rounded-md w-l px-2 py-2
                 text-gray-500 text-sm h-10 mt-1" placeholder='Descripción del evento' value={inputDescripcion} onInput={handleInputDescripcion} />
                    <label htmlFor="municipio" className="mt-1">Municipio:</label>
                    <select name="municipio" id="municipio" className="border-gray-500  border rounded-md w-l 
                    px-2 py-2 text-gray-500 text-sm h-10 mt-1" value={selectMunicipio} onChange={handleChangeMunicipio}>
                        {municipios.map((municipio) => {
                            return <option value={municipio.id} key={municipio.id}>{municipio.nombre}</option>
                        })}
                    </select>
                    <div className="flex justify-center mt-2">
                        <button className="bg-blue-600 px-4 py-2 rounded-sm text-white font-bold hover:bg-blue-400 hover:scale-95">{buttonContent}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}