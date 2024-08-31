import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un número', () => {
    const [letters, numbers] = retornaArreglo();

    // Specific values
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // Any values
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));

    // Types
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});
