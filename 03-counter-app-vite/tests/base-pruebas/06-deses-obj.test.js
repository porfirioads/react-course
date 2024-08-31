import { getPersona } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('getPersona debe retornar un objeto', () => {
    const persona = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
    };

    const { nombreClave, anios, latlng } = getPersona(persona);

    expect(nombreClave).toEqual(persona.clave);
    expect(anios).toEqual(persona.edad);
    expect(latlng).toBeDefined()
  });
});
