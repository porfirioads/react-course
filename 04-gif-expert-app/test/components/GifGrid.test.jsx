import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks');

describe('Pruebas de <GifGrid />', () => {
  const category = 'Naruto';

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    useFetchGifs.mockReturnValue({
      images: [
        {
          id: 'abcde',
          title: `${category} gifs`,
          url: `https://images.com/${category}_1.jpg`,
        },
      ],
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
