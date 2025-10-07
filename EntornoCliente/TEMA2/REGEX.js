const result = '--abcabcx4--'.match(/(abc){2}(.\d)/);
console.log(result);
/*
 [
  'abcabcx4',   // [0] → Coincidencia completa con toda la expresión regular → aunque se repita 2 veces, solo se guarda la primera
  'abc',        // [1] → Primer grupo capturado: `(abc)` → aunque se repita 2 veces, solo se guarda la primera
  'x4',         // [2] → Segundo grupo capturado: `(.\d)`→ aunque se repita 2 veces, solo se guarda la primera
  index: 2,     // Posición donde empieza la coincidencia dentro del string original
  input: '--abcabcx4--', // Cadena original sobre la que se aplicó `.match()`
  groups: undefined // No hay grupos con nombre definidos en la expresión regular
]
*/