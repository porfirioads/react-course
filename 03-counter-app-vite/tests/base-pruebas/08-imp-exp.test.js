import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeUndefined();
  });

  test('getHeroeByOwner debe filtrar los héroes de marvel', () => {
    const heroes = getHeroesByOwner('Marvel');

    expect(heroes).toHaveLength(2);

    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
  });

  test('getHeroeByOwner debe filtrar los héroes de DC', () => {
    const heroes = getHeroesByOwner('DC');

    expect(heroes).toHaveLength(3);

    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
  });
});
