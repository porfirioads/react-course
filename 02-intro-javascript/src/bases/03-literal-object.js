const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: 'New York',
    lat: 14.321,
    lng: 34.3232
  }
};

console.table(persona);
console.log(persona)

// Copy the object reference, persona and persona2 are the same.
const persona2 = persona;
persona2.nombre = 'Peter'
console.log(persona)
console.log(persona2)

// Clone the object, persona and persona3 are distinct.
const persona3 = {...persona}
persona3.nombre = 'Bruce';
console.log(persona)
console.log(persona3)
