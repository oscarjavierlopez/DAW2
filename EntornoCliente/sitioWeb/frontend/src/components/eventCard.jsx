export function EventCard({ nombre, fecha, imagen, municipio }) {
    return (
        <article className="border border-gray-600 rounded-2xl bg-gray-950 flex flex-col items-center w-4xl pb-4 hover:scale-95" >
            <img src={imagen} alt="imagen del evento" className="w-6xl h-48 object-cover rounded-t-2xl" />
            <p className="pt-3.5 text-gray-600">{fecha.substring(0, 10)} <span className="font-extrabold">·</span> {municipio}</p>
            <p className="text-white font-bold text-xl">{nombre}</p>
            <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold
                 text-slate-200 border-slate-700 shadow-sm hover:bg-blue-400 w-3xl text-center">Ver más información</button>
        </article>
    );
}