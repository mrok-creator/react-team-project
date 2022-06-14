import styles from './resultPage.module.css';
import Results from '../../components/Results';

function ResultPage() {
  return (
    <>
      <h2 className={styles.title}>Results</h2>
      <Results />
      {/* todo result text (with type of test) 
                result diagram (use library)
                result statistics
                common btn 

            */}
    </>
  );
}

export default ResultPage;
