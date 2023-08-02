import _ from 'lodash';
import { Player } from '../ui/Footer/GameScore';

function checkWinner(board: Array<Array<any>>, tableSize: number): boolean {
  // horizontal
  for (let r = 0; r < tableSize; r++) {
    for (let c = 0; c < tableSize - 3; c++) {
      if (board[r][c] != undefined) {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          return true;
        }
      }
    }
  }

  // vertical
  for (let c = 0; c < tableSize; c++) {
    for (let r = 0; r < tableSize - 3; r++) {
      if (board[r][c] != undefined) {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          return true;
        }
      }
    }
  }

  // anti diagonal
  for (let r = 0; r < tableSize - 3; r++) {
    for (let c = 0; c < tableSize - 3; c++) {
      if (board[r][c] != undefined) {
        if (
          board[r][c] == board[r + 1][c + 1] &&
          board[r + 1][c + 1] == board[r + 2][c + 2] &&
          board[r + 2][c + 2] == board[r + 3][c + 3]
        ) {
          return true;
        }
      }
    }
  }

  // diagonal
  for (let r = 3; r < tableSize; r++) {
    for (let c = 0; c < tableSize - 3; c++) {
      if (board[r][c] != undefined) {
        if (
          board[r][c] == board[r - 1][c + 1] &&
          board[r - 1][c + 1] == board[r - 2][c + 2] &&
          board[r - 2][c + 2] == board[r - 3][c + 3]
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

const setColor = (
  columnIndex: number,
  currentPlayer: number | undefined,
  players: Array<Player>,
  setPlayers: (players: Array<Player>) => void,
  currentRow: Array<number>,
  setCurrentRow: (row: Array<number>) => void,
  board: any,
  setBoard: (board: any) => void,
  styles: any
) => {
  const currentRowCopy = [...currentRow];
  const copyBoard = _.cloneDeep(board);
  const rowPlace = currentRowCopy[columnIndex];
  const place = document.getElementById(`${rowPlace}-${columnIndex}`);
  if (place != null && currentPlayer != null) {
    place.classList.add(
      currentPlayer === 1 ? styles.redPiece : styles.yellowPiece
    );
    const score = _.cloneDeep(players);
    const playerScore = score.find(
      (player: any) => player.id === currentPlayer
    ) ?? { id: -1, score: -1 };
    currentRowCopy[columnIndex] = rowPlace - 1;
    playerScore.score = playerScore.score + 100;
    copyBoard[rowPlace][columnIndex] = currentPlayer;
    setBoard(copyBoard);
    setCurrentRow(currentRowCopy);
    setPlayers(score);
  }
};

const clearBoard = (gameStyles: any) => {
  const redPieces = document.getElementsByClassName(gameStyles.redPiece);

  Array.from(redPieces).forEach((element: any) => {
    element.classList.remove(gameStyles.redPiece);
  });

  const yellowPieces = document.getElementsByClassName(gameStyles.yellowPiece);

  Array.from(yellowPieces).forEach((element: any) => {
    element.classList.remove(gameStyles.yellowPiece);
  });
};

export { checkWinner, setColor, clearBoard };
