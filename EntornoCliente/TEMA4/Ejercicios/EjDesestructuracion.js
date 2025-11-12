const persona = {
    nombre: 'Sarah',
    lugar: {
        pais: 'Nigeria',
        ciudad: 'Lagos'
    },
    amigas: ['Annie', 'Becky']
}

const{ amigas: [Annie] } = persona;
console.log(Annie);

const{ lugar: {ciudad} } = persona;
console.log(ciudad);

