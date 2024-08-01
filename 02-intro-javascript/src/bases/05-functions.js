const greet = function (name) {
  return `Hola, ${name}`;
};

const greet2 = (name) => {
  return `Hola, ${name}`;
};

const greet3 = (name) => `Hola, ${name}`;

console.log(greet('Goku'));
console.log(greet2('vegeta'));
console.log(greet3('Gohan'));

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'El_User12',
  };
};

const getUser2 = () => ({
  uid: '123ABC',
  username: '12El_User',
});

console.log(getUser());
console.log(getUser2());

function getActiveUser(name) {
  return {
    uid: 'ABC567',
    username: name,
  };
}

const activeUser = getActiveUser('Porfirio');
console.log(activeUser);

const getActiveUser2 = (name) => ({
  uid: 'ABC567',
  username: name,
});

console.log(getActiveUser2('Angel'));
