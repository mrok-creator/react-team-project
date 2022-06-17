import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import TestModal from '../../components/TestModal';
import Container from '../../shared/components/Container';

import { getQuestions } from '../../shared/services/test';
import { getTypeQuestions } from 'redux/testInfo/testInfo-selector';
import { actions } from 'redux/testInfo/testInfo-slice';

import s from './testPage.module.css';

function TestPage() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const typeOfQuestion = useSelector(getTypeQuestions, shallowEqual);
  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions({
        ...questions,
        loading: true,
        error: null,
      });
      try {
        const type =
          typeOfQuestion === 'QA technical training' ? 'tech' : 'theory';
        // let type = '';
        // switch (typeOfQuestion) {
        //   case 'QA technical training':
        //     type = 'tech';
        //     break;
        //   case 'Testing theory':
        //     type = 'theory';
        //     break;
        //   default:
        //     break;
        // }
        const data = await getQuestions(type);
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

  const backToMain = () => {
    const action = actions.clear();
    dispatch(action);
    // navigate('/');
  };

  const { items, loading, error } = questions;

  return (
    <section className={s.section}>
      <h2 className="visually-hidden">Test page</h2>
      <Container>
        <div className={s.subContainer}>
          <div className={s.meta}>
            <p className={s.type}>
              [ {typeOfQuestion || 'Test did not find'}_ ]
            </p>
            <button type="button" className={s.btn} onClick={backToMain}>
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
