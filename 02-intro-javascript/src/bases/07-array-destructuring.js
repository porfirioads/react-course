const personajes = ['Gokú', 'Vegeta', 'Trunks'];

// Extract all items

const [goku, vegeta, trunks] = personajes;

console.log(goku, vegeta, trunks);

// Extract only the second item

const [, p2] = personajes;

console.log(p2);

// Destructuring functions

const getArray = () => {
  return [('ABC', 123)];
};

const [letters, numbers] = getArray();

console.log(letters, numbers);

// Other function

const setState = (value) => {
  return [
    value,
    () => {
      console.log(`Hola ${value}`);
    },
  ];
};

const [nombre, setNombre] = setState('Gokú');

console.log(nombre);
setNombre();
