import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokedex.js', () => {
  it('Testa se a página possui o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const h2El = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    expect(h2El).toBeInTheDocument();
  });
  it('Testa se é exibido o próximo pokemon da lista, quando o botão for clicado', () => {

  });
});
