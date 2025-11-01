function operacion(nombre, exito, tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(`${nombre} exitoso`)
      } else {
        reject(`${nombre} falló`)
      }
    }, tiempo)
  })
}

const operaciones = [
  operacion('Operación A', true, 1000),
  operacion('Operación B', false, 800),  // Esta falla
  operacion('Operación C', true, 1200)
]

Promise.allSettled(operaciones)
  .then((resultados) => {
    console.log('📊 Resultados de todas las operaciones:')
    resultados.forEach((resultado, indice) => {
      if (resultado.status === 'fulfilled') {
        console.log(`✅ ${indice + 1}: ${resultado.value}`)
      } else {
        console.log(`❌ ${indice + 1}: ${resultado.reason}`)
      }
    })
    // ✅ 1: Operación A exitoso
    // ❌ 2: Operación B falló  
    // ✅ 3: Operación C exitoso
  })