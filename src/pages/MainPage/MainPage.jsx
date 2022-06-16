import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './mainPage.module.css';

import { actions } from '../../redux/testInfo/testInfo-slice';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <blockquote className={s.quote}>
        “Regression testing. What is it? If the system compiles, that's good, if
        it boots, that's great!”
      </blockquote>
      <button
        className={s.btn}
        onClick={() => {
          dispatch(actions.addType('QA technical training'));
          navigate('/testPage', { replace: true });
        }}
      >
        QA technical training
      </button>
      <button
        className={s.btn}
        onClick={() => {
          dispatch(actions.addType('Testing theory'));
          navigate('/testPage', { replace: true });
        }}
      >
        Testing theory
      </button>
    </>
  );
}

export default MainPage;
