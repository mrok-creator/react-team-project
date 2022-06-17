import styles from './resultsPage.module.css';
import Results from '../../components/Results';
import Container from '../../shared/components/Container';

function ResultPage() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Results</h2>
        <Results />
        {/* todo result text (with type of test) 
                result diagram (use library)
                result statistics
                common btn 

            */}
      </Container>
    </section>
  );
}

export default ResultPage;
