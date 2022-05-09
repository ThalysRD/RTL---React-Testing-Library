import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const { screen } = require('@testing-library/react');

describe('Testa o componente "App.js"', () => {
  it('Testa se o primeiro link possui o texto "Home"', () => {
    renderWithRouter(<App />);
    const homeLinkEl = screen.getByRole('link', { name: 'Home' });
    expect(homeLinkEl).toBeInTheDocument();
  });
  it('Testa se o primeiro link possui o texto "About"', () => {
    renderWithRouter(<App />);
    const AboutLinkEl = screen.getByRole('link', { name: 'About' });
    expect(AboutLinkEl).toBeInTheDocument();
  });
  it('Testa se o primeiro link possui o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />);
    const fvPokeLinkEl = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(fvPokeLinkEl).toBeInTheDocument();
  });
  it('Testa se ao clicar no texto "Home", permanece na página inicial', () => {
    renderWithRouter(<App />);
    const homeLinkEl = screen.getByRole('link', { name: 'Home' });
    expect(homeLinkEl).toBeInTheDocument();
    userEvent.click(homeLinkEl);
    const h2HomeEl = screen.getByRole('heading', {
      name: 'Encountered pokémons',
      level: 2,
    });
    expect(h2HomeEl).toBeInTheDocument();
  });
  it('Testa se ao clicar no texto "About", é redirecionado para página About', () => {
    renderWithRouter(<App />);
    const aboutLinkEl = screen.getByRole('link', { name: 'About' });
    expect(aboutLinkEl).toBeInTheDocument();
    userEvent.click(aboutLinkEl);
    const h2AboutEl = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(h2AboutEl).toBeInTheDocument();
  });
  it(`Testa se ao clicar no texto "Favorite Pokémons",
   é redirecionado para página Favorite Pokémons`, () => {
    renderWithRouter(<App />);
    const fvPokeLinkEl = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    expect(fvPokeLinkEl).toBeInTheDocument();
    userEvent.click(fvPokeLinkEl);
    const h2FvPokeEl = screen.getByRole('heading', {
      name: 'Favorite pokémons',
      level: 2,
    });
    expect(h2FvPokeEl).toBeInTheDocument();
  });
  it(`Testa se a aplicação é redirecionada para a página
   Not Found ao entrar em uma url desconhecida`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-magica');
    const notFoundEl = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });
    expect(notFoundEl).toBeInTheDocument();
  });
});
