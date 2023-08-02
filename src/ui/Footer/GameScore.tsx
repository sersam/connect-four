import { Dispatch, useContext } from 'react';
import styles from './Footer.module.css';
import gameStyles from '../Game/Game.module.css';
import { CircleButton } from '../CircleButton';
import { clearBoard } from '../../application/util';

import homeIcon from '../../assets/icon/home_black_24dp.svg';
import restartIcon from '../../assets/icon/restart_alt_black_24dp.svg';
import {
  GameContext,
  emptyRows,
  initialBoard,
  initialScore,
} from '../../application/appContext';

const resetGame = (
  setPlayers: (player: Array<Object>) => void,
  setCurrentRow: (currentRow: Array<number>) => void,
  setBoard: (board: any) => void,
  setWinner: (winner: boolean) => void
) => {
  setPlayers(initialScore);
  setCurrentRow(emptyRows);
  setBoard(initialBoard);
  setWinner(false);
};

type GameScoreProps = {
  setStartPlay: (startPlay: boolean) => void;
};

export type Player = {
  id: number;
  score: number;
};

export const GameScore = ({ setStartPlay }: GameScoreProps) => {
  const gameContext = useContext(GameContext);

  const {
    currentPlayer,
    players,
    setPlayers,
    setCurrentRow,
    setBoard,
    setWinner,
    setPlayerType,
  } = gameContext;

  const playerScore = players.find(
    (player: Player) => player.id === currentPlayer
  );

  return (
    <>
      <div className={styles.footerInfo}>
        <div className={styles.playerInfo}>
          <div
            className={
              currentPlayer === 1 ? styles.redPiece : styles.yellowPiece
            }
          />
          {`Player ${currentPlayer} turn`}
        </div>
        <div className={styles.score}>{`Score ${playerScore?.score}`} </div>
      </div>
      <>
        <CircleButton
          icon={homeIcon}
          onClick={() => {
            setStartPlay(false);
            setPlayerType('');
            resetGame(setPlayers, setCurrentRow, setBoard, setWinner);
          }}
        />
        <CircleButton
          icon={restartIcon}
          onClick={() => {
            resetGame(setPlayers, setCurrentRow, setBoard, setWinner);
            clearBoard(gameStyles);
          }}
        />
      </>
    </>
  );
};
