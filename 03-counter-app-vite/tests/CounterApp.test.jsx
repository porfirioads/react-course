import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const value = 100;

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 100"', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(
      value.toString(),
    );
  });

  test('Debe incrementar con el botón +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test('Debe decrementar con el botón -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test('Debe funcionar el botón de reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('-1'));
    
    // Formas de obtener el botón
    fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText(value)).toBeTruthy();
  });
});
