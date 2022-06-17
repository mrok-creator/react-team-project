import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './main.module.css';

import { ReactComponent as Arrow } from 'shared/images/arrow.svg';
// import arrow from 'shared/images/arrow.svg';

import { actions } from 'redux/testInfo/testInfo-slice';

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = e => {
    dispatch(actions.addType(e.target.textContent));
    navigate('/testPage');
  };

  return (
    <div className={s.wrapper}>
      <blockquote className={s.quote}>
        <p>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </p>
      </blockquote>
      <p className={s.author}>Linus Torvalds</p>
      <p className={s.authorAbout}>Linux kernel creator, hacker, 1969</p>
      <div className={s.btnWrapper}>
        <button className={s.btn} onClick={handleClick}>
          <span>QA technical training</span>

          {/* <img src={arrow} alt="just arrow" /> */}
          <Arrow />
        </button>
        <button className={`${s.btn} ${s.test}`} onClick={handleClick}>
          <span>Testing theory</span>
          <Arrow />

          {/* <img src={arrow} alt="just arrow" /> */}
        </button>
      </div>
    </div>
  );
}

export default Main;
