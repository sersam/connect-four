import { useContext, useState } from 'react';
import styles from './Home.module.css';
import maskGame from '../../assets/game/mask.png';
import fullLogo from '../../assets/logo/full@1x.png';
import { Footer } from '../Footer/Footer';
import { Game } from '../Game';
import { End } from '../End/End';
import { GameContext } from '../../application/appContext';

export function Home() {
  const [startPlay, setStartPlay] = useState(false);
  const gameContext = useContext(GameContext);

  const { playerType, setWinner, winner } = gameContext ?? {};

  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <div className={styles.homeImages}>
          {playerType === '' ? (
            <>
              <img src={fullLogo} className={styles.fullLogo} />
              <img src={maskGame} className={styles.mask} />
            </>
          ) : playerType !== '' && !winner ? (
            <Game setWinner={setWinner} />
          ) : (
            <End />
          )}
        </div>
        <Footer startPlay={startPlay} setStartPlay={setStartPlay} />
      </div>
    </div>
  );
}
