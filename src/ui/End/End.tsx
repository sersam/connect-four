import { useContext } from 'react';
import styles from './End.module.css';
import { GameContext } from '../../application/appContext';

export const End = () => {
  const gameContext = useContext(GameContext);

  const { players } = gameContext;

  return (
    <div className={styles.showWinner}>
      <div className={styles.finishScore}>
        <h1>You win!</h1>
        {players.map((player) => (
          <div
            id={`player-${player.id}`}
            key={`player-${player.id}`}
          >{`Player ${player.id} score: ${player.score}`}</div>
        ))}
      </div>
    </div>
  );
};
