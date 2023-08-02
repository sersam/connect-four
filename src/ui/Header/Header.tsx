import styles from './Header.module.css';
import symbol from '../../assets/logo/symbol.svg';
import { useContext } from 'react';
import { GameContext } from '../../application/appContext';

export function Header() {
  const gameContext = useContext(GameContext);

  const { playerType } = gameContext ?? {};

  return (
    <header className={styles.header}>
      {playerType !== '' && <img src={symbol} />}
    </header>
  );
}
