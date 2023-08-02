import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import buttonStyles from '../Button/Button.module.css';
import styles from './Footer.module.css';
import { mockContext } from '../../_mocks_/mockContext';
import { GameContext } from '../../application/appContext';

describe('Footer component', () => {
  it('Footer component should render "Start" button at the beginning', () => {
    const { container } = render(
      <Footer startPlay={false} setStartPlay={() => {}} />
    );

    expect(screen.getByText('Start')).toBeTruthy();
    expect(container.querySelector(`.${buttonStyles.buttonIcon}`)).toBeTruthy();
  });
  it('Footer component should render buttons to select game before game starts', () => {
    const { container } = render(
      <GameContext.Provider value={mockContext}>
        <Footer startPlay={true} setStartPlay={() => {}} />
      </GameContext.Provider>
    );

    expect(screen.getAllByText('VS')).toBeTruthy();
    expect(container.querySelector(`.${buttonStyles.buttonIcon}`)).toBeTruthy();
  });
  it('Footer component should render score footer when game starts', () => {
    const copyMockContext = { ...mockContext, playerType: 'IA' };
    const { container } = render(
      <GameContext.Provider value={copyMockContext}>
        <Footer startPlay={true} setStartPlay={() => {}} />
      </GameContext.Provider>
    );

    expect(container.querySelector(`.${styles.footerInfo}`)).toBeTruthy();
  });
});
