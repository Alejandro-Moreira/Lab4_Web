// Desestructuración 1
// Desestructuración de un objeto
const persona = { nombre: "Sandra", edad: 35, ciudad: "Quito" };

const { nombre, edad, ciudad } = persona;  // Extracción de propiedades del objeto

console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);



// Desestructuración 2
// Desestructuración de un array
const numeros = [1, 2, 3, 4, 5];

const [primerNumero, segundoNumero, ...restoNumeros] = numeros;

// Uso de los elementos extraídos
console.log(`Primer Número: ${primerNumero}`);
console.log(`Segundo Número: ${segundoNumero}`);
console.log(`Otros Números: ${restoNumeros.join(', ')}`);
