import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente "Pokemon.js"', () => {
  it('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');
    const pokeImg = screen.getByRole('img', { name: /sprite/i });
    const pokeLink = screen.getByRole('link', { name: /More details/i });
    const pokeType2 = screen.queryAllByText('Electric');

    expect(pokeName).toBeInTheDocument();
    expect(pokeType2[0]).toBeDefined();
    expect(pokeType).toHaveTextContent('Electric');
    expect(pokeWeight).toBeInTheDocument();
    expect(pokeImg).toBeInTheDocument();
    expect(pokeImg.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokeLink).toBeInTheDocument();
    expect(pokeLink).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(pokeLink);

    const favButton = screen.getByRole('checkbox', { name: /favoritado/i });
    userEvent.click(favButton);
    const startEl = screen.getByRole('img', { name: /as favorite/i });
    expect(startEl).toBeInTheDocument();
    expect(startEl.src).toContain('http://localhost/star-icon.svg');
  });
});
