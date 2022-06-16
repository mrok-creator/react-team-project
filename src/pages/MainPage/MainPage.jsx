import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './mainPage.module.css';
import arrow from '../../images/arrow.svg';

import Container from '../../shared/components/Container';
import { actions } from '../../redux/testInfo/testInfo-slice';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <div className={s.wrapper}>
        <blockquote className={s.quote}>
          <p>
            “Regression testing. What is it? If the system compiles, that's
            good, if it boots, that's great!”
          </p>
        </blockquote>
        <p className={s.author}>Linus Torvalds</p>
        <p className={s.authorAbout}>Linux kernel creator, hacker, 1969</p>
        <div className={s.btnWrapper}>
          <button
            className={s.btn}
            onClick={() => {
              dispatch(actions.addType('QA technical training'));
              navigate('/testPage', { replace: true });
            }}
          >
            <span>QA technical training</span>

            <img src={arrow} alt="just arrow" />
          </button>
          <button
            className={`${s.btn} ${s.test}`}
            onClick={() => {
              dispatch(actions.addType('Testing theory'));
              navigate('/testPage', { replace: true });
            }}
          >
            <span>Testing theory</span>

            <img src={arrow} alt="just arrow" />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default MainPage;
