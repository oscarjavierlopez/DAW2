const persona = {
    nombre: 'Sarah',
    lugar: {
        pais: 'Nigeria',
        ciudad: 'Lagos'
    },
    amigas: ['Annie', 'Becky']
}

const{ amigas } = persona;
const[Annie] = amigas;
console.log(Annie);
