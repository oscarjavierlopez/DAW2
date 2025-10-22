/* Programa que calcule los días que quedan hasta el proximo*/
let cumple = new Date("2026-01-28");
let hoy = new Date();
let dias = Math.ceil((Date.parse(cumple) - Date.parse(hoy)) / (1000 * 3600 * 24));
console.log("Quedan " + dias + " días hasta tu próximo cumpleaños.");