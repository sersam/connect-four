import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  preicon?: string;
  posticon: string;
  onClick: () => void;
};

export const Button = ({ text, preicon, posticon, onClick }: ButtonProps) => {
  return (
    <div className={styles.buttonStyle} onClick={onClick}>
      <img src={preicon} className={styles.buttonIcon} />
      <div className={styles.buttonText}>{text}</div>
      <img src={posticon} className={styles.buttonIcon} />
    </div>
  );
};
