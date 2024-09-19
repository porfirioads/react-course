import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas de <GifExpertApp />', () => {
  const newCategory = 'Naruto';
  const defaultCategory = 'Dragon Ball';

  test('Debe mostrar el título "GifExpertApp"', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  });

  test('Debe mostrar una categoría por defecto', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Dragon Ball')).toBeTruthy();
  });

  test('Debe añadir una nueva categoría al llamar onAddCategory', () => {
    render(<GifExpertApp />);

    // Simulate user add new category
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    // Check new category was added
    expect(screen.getByText(newCategory)).toBeTruthy();
  });

  test('No debe añadir una categoría existente', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Try add a existent category
    fireEvent.input(input, { target: { value: defaultCategory } });
    fireEvent.submit(form);

    // Category must exist only once
    const categories = screen.getAllByText(defaultCategory);
    expect(categories.length).toBe(1);
  });
});
