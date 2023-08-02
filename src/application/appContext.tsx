import { Dispatch, createContext } from "react";
import { TABLE_SIZE } from "./constants";

interface GameContextValue {
  currentPlayer: number;
  setCurrentPlayer: Dispatch<React.SetStateAction<number>>;
  players: Array<{ id: number; score: number }>;
  setPlayers: Dispatch<React.SetStateAction<Array<any>>>;
  playerType: string;
  setPlayerType: Dispatch<React.SetStateAction<string>>;
  currentRow: Array<number>;
  setCurrentRow: Dispatch<React.SetStateAction<Array<number>>>;
  board: Array<Array<number | undefined>>;
  setBoard: Dispatch<
    React.SetStateAction<Array<Array<Array<number | undefined>>>>
  >;
  winner: boolean;
  setWinner: Dispatch<React.SetStateAction<boolean>>;
}

export const emptyRows = Array.from({ length: TABLE_SIZE }, (v, i) => 6);
export const initialBoard = Array.from(Array(TABLE_SIZE), () =>
  Array.from(Array(TABLE_SIZE))
);

export const initialScore = [
  { id: 0, score: 0 },
  { id: 1, score: 0 },
];

export const GameContext = createContext<GameContextValue>({
  players: [],
  setPlayers: () => {},
  currentPlayer: 0,
  setCurrentPlayer: () => {},
  playerType: '',
  setPlayerType: () => {},
  currentRow: [],
  setCurrentRow: () => {},
  board: [],
  setBoard: () => {},
  winner: false,
  setWinner: () => {},
});
