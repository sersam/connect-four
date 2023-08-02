import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { mockContext } from '../../_mocks_/mockContext';
import styles from './Home.module.css';
import gameStyles from '../Game/Game.module.css';
import endStyles from '../End/End.module.css';
import { GameContext } from '../../application/appContext';

describe('Home component', () => {
  it('Home renders mask game if start game has not been clicked', () => {
    const { container } = render(
      <GameContext.Provider value={mockContext}>
        <Home />
      </GameContext.Provider>
    );

    expect(container.querySelector(`.${styles.mask}`)).toBeTruthy();
    expect(container.querySelector(`.${styles.fullLogo}`)).toBeTruthy();
  });
  it('Home renders game if playerTYpe selected and no winner is present', () => {
    const copyMockContext = { ...mockContext, playerType: 'IA' };

    const { container } = render(
      <GameContext.Provider value={copyMockContext}>
        <Home />
      </GameContext.Provider>
    );

    expect(container.querySelector(`.${gameStyles.gameBoard}`)).toBeTruthy();
  });
  it('Home renders end component if winner is present', () => {
    const copyMockContext = { ...mockContext, playerType: 'IA', winner: true };

    const { container } = render(
      <GameContext.Provider value={copyMockContext}>
        <Home />
      </GameContext.Provider>
    );

    expect(container.querySelector(`.${endStyles.showWinner}`)).toBeTruthy();
  });
});
