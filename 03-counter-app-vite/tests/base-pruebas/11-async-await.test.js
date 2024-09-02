import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe retornar una URL de la imagen', async () => {
    const url = await getImagen('J1ZoQbpMEFkteFvsKuxy475UYEv2ngyw');
    expect(url).toContain('https://')
  });

  test('getImagen debe retornar error si no se puede traer la magen', async () => {
    const url = await getImagen('INVALID_KEY');
    expect(url).toBe('No se econtró la imagen');
  });
});
