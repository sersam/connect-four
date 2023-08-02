import styles from './CircleButton.module.css';

type CircleButtonProps = {
  icon: string;
  onClick: () => void;
};

export const CircleButton = ({ icon, onClick }: CircleButtonProps) => {
  return (
    <div className={styles.buttonStyle} onClick={onClick}>
      <img src={icon} className={styles.buttonIcon} />
    </div>
  );
};
