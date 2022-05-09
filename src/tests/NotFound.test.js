import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Not Found', () => {
  it('Testa se a página possui o título "Page requested not found"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/random-page');
    const h2Text = 'Page requested not found';
    const titleEl = screen.getByRole('heading', { name: h2Text, level: 2 });
    expect(titleEl).toBeInTheDocument();
  });
  it('Testa se a página mostra a imagem do Pikachu triste', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/random-page');
    const imgEl = screen.getByRole('img', { name: /Pikachu crying/i });
    expect(imgEl.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
