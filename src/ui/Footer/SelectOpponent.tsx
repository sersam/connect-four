import { Button } from '../Button';
import { PLAYER_TYPE } from '../../application/constants';

import humanIcon from '../../assets/icon/face_black_24dp.svg';
import iaIcon from '../../assets/icon/smart_toy_black_24dp.svg';

type SelectOponentProps = {
  setPlayerType: (playerType: string) => void;
};

export const SelectOpponent = ({ setPlayerType }: SelectOponentProps) => {
  return (
    <>
      <Button
        text='VS'
        preicon={humanIcon}
        posticon={humanIcon}
        onClick={() => setPlayerType(PLAYER_TYPE.HUMAN)}
      />
      <Button
        text='VS'
        preicon={humanIcon}
        posticon={iaIcon}
        onClick={() => setPlayerType(PLAYER_TYPE.IA)}
      />
    </>
  );
};
