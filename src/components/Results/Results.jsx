import styles from '.results.module.css';

const Results = () => {
  return (
    <>
      <h3 className={styles.description}>[]</h3>
      <ul className={styles.list}>
        <li className={styles.item}>Correct answers - </li>
        <span className={styles.decoration}>|</span>
        <li className={styles.item}>Total questions - </li>
      </ul>
      <p className={styles.mainMessage}></p>
      <p className={styles.secondaryMessage}></p>
    </>
  );
};

export default Results;
