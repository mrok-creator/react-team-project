import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import TestModal from '../../components/TestModal';
import Container from '../../shared/components/Container';

import { getQuestions } from '../../shared/services/test';
import { getTypeQuestions } from 'redux/testInfo/testInfo-selector';

import s from './testPage.module.css';

function TestPage() {
  // const navigate = useNavigate();
  const [questions, setQuestions] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const typeOfQuestion = useSelector(getTypeQuestions, shallowEqual);
  console.log(typeOfQuestion);
  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions({
        ...questions,
        loading: true,
        error: null,
      });
      try {
        // const type =
        const data = await getQuestions('tech');
        setQuestions(prevState => ({
          ...prevState,
          items: data,
          loading: false,
        }));
      } catch (error) {
        setQuestions({
          ...questions,
          loading: false,
          error: error.message,
        });
      }
    };
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { items, loading, error } = questions;

  return (
    <section className={s.section}>
      <h2 className="visually-hidden">Test page</h2>
      <Container>
        <div className={s.subContainer}>
          <div className={s.meta}>
            <p className={s.type}>[ Testing theory_ ]</p>
            <button
              type="button"
              className={s.btn}
              // onClick={navigate('/')}
            >
              Finish test
            </button>
          </div>
          {error && !Boolean(items.length) && (
            <div>Sorry...Problem with server... Try again later...</div>
          )}
          {loading && <Loader />}
          {Boolean(items.length) && <TestModal items={items} />}
        </div>
      </Container>
    </section>
  );
}

export default TestPage;
