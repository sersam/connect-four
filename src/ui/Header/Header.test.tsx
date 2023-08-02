import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { mockContext } from '../../_mocks_/mockContext';
import { GameContext } from '../../application/appContext';

describe('Header component', () => {
  it('Header does not render logo while selecting game', () => {
    render(
      <GameContext.Provider value={mockContext}>
        <Header />
      </GameContext.Provider>
    );

    const headerLogo = screen.queryByRole('img');
    expect(headerLogo).toBeNull();
  });

  it('Header renders logo only when game has started', () => {
    const copyMockContext = { ...mockContext, playerType: 'IA' };
    
    render(
      <GameContext.Provider value={copyMockContext}>
        <Header />
      </GameContext.Provider>
    );

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
