import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente "Favorite Pokemons"', () => {
  it(`Testa se, caso a pessoa não tenha pokemons
   favoritos, aparece a mensagem "No favorite pokemon found"`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const noFavoriteFound = screen.getByText('No favorite pokemon found');
    expect(noFavoriteFound).toBeInTheDocument();
  });
  it('Testa se, são exibidos os cards dos pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const button = screen.getByRole('checkbox', { name: /Favoritado/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    history.push('/pokemons/4');
    userEvent.click(button);
    history.push('/favorites');
    const title = 'Favorite pokémons';
    const favPokeCheck = screen.getByRole('heading', { name: title, level: 2 });
    expect(favPokeCheck).toBeInTheDocument();
    const pikachuCheck = screen.getByText('Pikachu');
    const charmandeCheck = screen.getByText('Charmander');
    expect(pikachuCheck).toBeInTheDocument();
    expect(charmandeCheck).toBeInTheDocument();
  });
});
