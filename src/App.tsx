import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './ui/Header';
import { Home } from './ui/Home';
import styles from './App.module.css';
import { GameContext, emptyRows, initialBoard, initialScore } from './application/appContext';


function App() {
  const [playerType, setPlayerType] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(false);
  const [players, setPlayers] = useState(initialScore);
  const [currentRow, setCurrentRow] = useState(emptyRows);
  const [board, setBoard] = useState([...initialBoard]);

  return (
    <Router>
      <div className={styles.App}>
        <GameContext.Provider
          value={{
            currentPlayer,
            setCurrentPlayer,
            players,
            setPlayers,
            playerType,
            setPlayerType,
            currentRow,
            setCurrentRow,
            board,
            setBoard,
            winner,
            setWinner,
          }}
        >
          <Header />
          <Home />
        </GameContext.Provider>
      </div>
    </Router>
  );
}

export default App;
