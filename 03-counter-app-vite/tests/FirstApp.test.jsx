import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  // test('Debe hacer match con el snapshot', () => {
  //   const title = 'Hola, soy Goku';
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el título en un h1', () => {
    const title = 'Hola, soy Goku';

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />,
    );

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toBe(title); // Exact match
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe mostrar el subtítulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Hola, soy un subtítulo';

    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />,
    );

    expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(1);
  });
});
