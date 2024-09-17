import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas de <GifItem />', () => {
  const title = 'Naruto';
  const url = 'https://naruto.com/image.jpg';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con la URL Y ALT', () => {
    render(<GifItem title={title} url={url} />);
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrar el título de la imagen', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()
  });
});
