/* eslint-disable react-hooks/exhaustive-deps */
import styles from './results.module.css';
import image from '../../shared/images/image.png';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTestType, getTestAnswers } from 'redux/testInfo/testInfo-selector';
import { getResult } from 'shared/services/test';
// import { actions } from 'redux/testInfo/testInfo-slice';

const Results = () => {
  const [result, setResult] = useState({
    items: { result: '84%' },
    loading: false,
    error: null,
  });
  // const navigate = useNavigate();
  const testType = useSelector(getTestType, shallowEqual);
  const testAnswers = useSelector(getTestAnswers, shallowEqual);
  // const dispatch = useDispatch();

  useEffect(() => {
    const resultFetch = async () => {
      setResult({ ...result, loading: true, error: null });
      try {
        const type =
          getTestType === 'QA technical training' ? 'tech' : 'theory';
        const data = await getResult(type, testAnswers);
        setResult(prevState => ({
          ...prevState,
          items: data,
          loading: false,
        }));
      } catch (error) {
        setResult(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    resultFetch();
  }, []);

  const tryAgainClick = () => {
    // const action = actions.remove();
    // dispatch(action);
    // Navigate('/test');
  };

  const { items, loading } = result;

  return (
    <>
      <div className={styles.border}>
        <h3 className={styles.description}>[ {testType}_]</h3>
      </div>
      {loading && <p className={styles.loading}>LOADING...</p>}
      <div className={styles.graffic}>{/* <Graffic /> */}</div>
      <ul>
        <li className={styles.answers}>
          {Number.parseInt(items.result)}% Correct
        </li>

        <li className={styles.answers}>
          {100 - Number.parseFloat(items.result)}% Incorrect
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          Correct answers -{' '}
          <span className={styles.number}>
            {(12 / 100) * Number.parseFloat(items.result)}
          </span>
        </li>
        <span className={styles.decoration}>|</span>
        <li className={styles.item}>
          Total questions - <span className={styles.number}>12</span>
        </li>
      </ul>
      <img className={styles.image} src={image} alt="Cat" />
      <p className={styles.mainMessage}>Not bad!{items.mainMessage}</p>
      <p className={styles.secondaryMessage}>
        But you still need to learn some materials.{items.secondaryMessage}
      </p>
      <button className={styles.button} type="button" onClick={tryAgainClick}>
        Try again
      </button>
    </>
  );
};

export default Results;
