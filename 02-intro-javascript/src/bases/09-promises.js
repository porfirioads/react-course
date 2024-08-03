import heroes from './data/heroes';

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 seconds after');
    resolve();
  }, 2000);
});

promise1.then(() => {
  console.log('Successful promise');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 seconds after');
    reject('TEST_ERROR');
  }, 2000);
});

promise2.catch((error) => {
  console.log(`Wrong promise: ${error}`);
});

const getHeroeByIdPromise = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = heroes.find((heroe) => heroe.id === id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('HEROE_NOT_FOUND');
      }
    }, 2000);
  });
};

const heroe1 = getHeroeByIdPromise(1)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.warn(error));

const heroe2 = getHeroeByIdPromise(10)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.warn(error));

const heroe3 = getHeroeByIdPromise(1).then(console.log).catch(console.warn);

const heroe4 = getHeroeByIdPromise(10).then(console.log).catch(console.warn);
