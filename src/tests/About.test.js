import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente "About.js"', () => {
  it('Testa se a página contém o título "About Pokédex"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const titleEl = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(titleEl).toBeInTheDocument();
  });
  it('Testa se a página contem dois paragráfos sobre a pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const p1El = screen.getByText(/This application simulates a Pokédex/i);
    const p2El = screen.getByText(/One can filter Pokémons/i);
    expect(p1El).toBeInTheDocument();
    expect(p2El).toBeInTheDocument();
  });
  it('Testa se a página possui a seguinte imagem da pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const imgEl = screen.getByRole('img', { name: 'Pokédex' });
    expect(imgEl).toBeInTheDocument();
    expect(imgEl.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
