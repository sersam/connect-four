import { useContext, useEffect } from 'react';
import styles from './Game.module.css';
import { checkWinner, setColor } from '../../application/util';
import { PLAYER_TYPE, TABLE_SIZE } from '../../application/constants';
import { GameContext } from '../../application/appContext';

const rows = Array.from({ length: TABLE_SIZE }, (v, i) => i);
const columns = Array.from({ length: TABLE_SIZE }, (v, i) => i);

type GameProps = {
  setWinner: (winner: boolean) => void;
};

export const Game = ({ setWinner }: GameProps) => {
  const gameContext = useContext(GameContext);

  const {
    playerType,
    currentPlayer,
    setCurrentPlayer,
    setPlayers,
    players,
    currentRow,
    setCurrentRow,
    board,
    setBoard,
  } = gameContext;

  useEffect(() => {
    const winner = checkWinner(board, TABLE_SIZE);

    if (winner) {
      setWinner(true);
    } else {
      setCurrentPlayer((currentPlayer + 1) % 2);
    }
  }, [board]);

  useEffect(() => {
    if (playerType === PLAYER_TYPE.IA && currentPlayer === 0) {
      setColor(
        Math.floor(Math.random() * TABLE_SIZE),
        currentPlayer,
        players,
        setPlayers,
        currentRow,
        setCurrentRow,
        board,
        setBoard,
        styles
      );
    }
  }, [currentPlayer]);

  return (
    <div className={styles.gameBoard}>
      {rows.map((row, rowIndex) => {
        return (
          <div
            id={`${rowIndex}`}
            key={`${rowIndex}`}
            className={styles.boardRow}
          >
            {columns.map((column, columnIndex) => {
              return (
                <div
                  id={`${rowIndex}-${columnIndex}`}
                  key={`${rowIndex}-${columnIndex}`}
                  className={`${styles.boardColumn}`}
                  onClick={() => {
                    setColor(
                      columnIndex,
                      currentPlayer,
                      players,
                      setPlayers,
                      currentRow,
                      setCurrentRow,
                      board,
                      setBoard,
                      styles
                    );
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
