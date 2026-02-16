import { useState } from "react";

export function NavBar({setSelectedEvents}) {
    let selectedButtonClass = 'text-white text-sm pb-0.5 px-3 hover:cursor-pointer border-b-2';
    let notSelectedButtonClass = 'text-white text-sm pb-0.5 px-3 hover:cursor-pointer';
    const [todosButtonClass, setTodosButtonClass] = useState(selectedButtonClass);
    const [misEventosButtonClass, setmisEventosButtonClass] = useState(notSelectedButtonClass);

    const selectTodosButtonClass = () => {
        setTodosButtonClass(selectedButtonClass);
        setmisEventosButtonClass(notSelectedButtonClass);
        setSelectedEvents('todos');
    }

    const selectMisEventosButtonClass = () => {
        setTodosButtonClass(notSelectedButtonClass);
        setmisEventosButtonClass(selectedButtonClass);
        setSelectedEvents('misEventos');
    }

    return (
        <nav className="flex justify-center items-center gap-5 mb-4">
            <button className={todosButtonClass} onClick={selectTodosButtonClass}>Todos</button>
            <button className={misEventosButtonClass} onClick={selectMisEventosButtonClass}>Mis eventos</button>
        </nav>
    );
}