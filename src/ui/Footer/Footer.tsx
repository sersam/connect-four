import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { Button } from '../Button/Button';
import { SelectOpponent } from './SelectOpponent';
import playIcon from '../../assets/icon/play_circle_black_24dp.svg';
import { GameScore } from './GameScore';
import { GameContext } from '../../application/appContext';

type FooterProps = {
  startPlay: boolean;
  setStartPlay: (play: boolean) => void;
};

export const Footer = ({ startPlay, setStartPlay }: FooterProps) => {
  const gameContext = useContext(GameContext);

  const { playerType, setPlayerType } = gameContext;

  return (
    <div className={styles.footerCard}>
      {!startPlay && (
        <Button
          text='Start'
          posticon={playIcon}
          onClick={() => setStartPlay(true)}
        />
      )}
      {startPlay && playerType === '' && (
        <SelectOpponent setPlayerType={setPlayerType} />
      )}
      {startPlay && playerType !== '' && (
        <GameScore setStartPlay={setStartPlay} />
      )}
    </div>
  );
};
