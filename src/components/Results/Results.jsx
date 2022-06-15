import styles from './results.module.css';
import image from '../../images/image.png';

const Results = () => {
  return (
    <>
      <div className={styles.border}>
        <h3 className={styles.description}>[ Testing Theory_]</h3>
      </div>
      <div className={styles.graffic}></div>
      <ul className={styles.list}>
        <li className={styles.item}>
          Correct answers - <span className={styles.number}>9</span>
        </li>
        <span className={styles.decoration}>|</span>
        <li className={styles.item}>
          Total questions - <span className={styles.number}>12</span>
        </li>
      </ul>
      <img className={styles.image} src={image} alt="Cat" />
      <p className={styles.mainMessage}>Not bad!</p>
      <p className={styles.secondaryMessage}>
        But you still need to learn some materials.
      </p>
      <button className={styles.button} type="button">
        Try again
      </button>
    </>
  );
};

export default Results;
