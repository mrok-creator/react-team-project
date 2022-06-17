import styles from './results.module.css';
import image from 'shared/images/image.png';
// import rectangleOrange from '../../shared/images/rectangleOrange.png';
// import rectangleGray from '../../shared/images/rectangleGray.png';
import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTestType, getTestAnswers } from 'redux/testInfo/testInfo-selector';
import { getResult } from 'shared/services/test';
import Graffic from './Graffic';
import { actions } from 'redux/testInfo/testInfo-slice';

const Results = () => {
  const [result, setResult] = useState({
    items: { result: '30%' },
    loading: false,
    error: null,
  });
  const navigate = useNavigate();
  const testType = useSelector(getTestType, shallowEqual);
  const testAnswers = useSelector(getTestAnswers, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    const resultFetch = async () => {
      setResult(prevState => ({ ...prevState, loading: true, error: null }));
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
        setResult(prevstate => ({
          ...prevstate,
          loading: false,
          error: error.message,
        }));
      }
    };
    resultFetch();
  }, [testAnswers]);

  const tryAgainClick = () => {
    const action = actions.removeAnswers();
    dispatch(action);
    navigate('/test');
  };

  const { items, loading } = result;

  return (
    <>
      <div className={styles.border}>
        <h3 className={styles.description}>[ {testType}_]</h3>
      </div>
      {loading && <p className={styles.loading}>LOADING...</p>}
      <div>
        <Graffic items={items} />
      </div>
      {/* <ul>
        <li className={styles.answers}>
          <img
            className={styles.rectangle}
            src={rectangleOrange}
            alt="Rectangle Orange"
          />
          {Number.parseInt(items.result)}% Correct..
        </li>
        <li className={styles.answers}>
          <img
            className={styles.rectangle}
            src={rectangleGray}
            alt="Rectangle Gray"
          />
          {100 - Number.parseInt(items.result)}% Incorreсt
        </li>
      </ul> */}
      <ul className={styles.list}>
        <li className={styles.item}>
          Correct answers -{' '}
          <span className={styles.number}>
            {Number.parseInt((12 / 100) * Number.parseFloat(items.result))}
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