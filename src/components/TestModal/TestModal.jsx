import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { ReactComponent as Result } from '../../images/result.svg';

import TestCard from './TestCard';
import { getTestAnswers } from '../../redux/testInfo/testInfo-selector';
import { actions } from '../../redux/testInfo/testInfo-slice';

import s from './testModal.module.css';

function TestModal({ items }) {
  const [idx, setIdx] = useState(0);
  const [mapAnswers, setMapAnswers] = useState(new Map());
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const activeCard = items.find((_, index) => idx === index);
  const { questionId } = activeCard;

  const getAnswer = answer => {
    const currentMap = new Map(mapAnswers);
    currentMap.set(questionId, { answer, questionId });

    setMapAnswers(currentMap);
  };
  const handelDecrement = () => {
    setIdx(prevIdx => prevIdx - 1);
  };
  const handelIncrement = () => {
    setIdx(prevIdx => prevIdx + 1);
  };
  const handelResult = () => {
    // navigate('/results');
    const action = actions.addAnswers([...mapAnswers.values()]);
    dispatch(action);
  };
  // console.log([...mapAnswers.values()]);
  const isAnswered = mapAnswers.get(questionId);

  return (
    <>
      <TestCard
        item={activeCard}
        index={idx}
        getAnswer={getAnswer}
        data={isAnswered}
      />

      <div className={s.groupe}>
        <button
          disabled={idx === 0}
          className={s.btn}
          type="button"
          onClick={handelDecrement}
        >
          <Arrow className={s.left} />
          <span className={s.btnText}>Previous question</span>
        </button>
        {idx !== items.length - 1 && (
          <button
            className={s.btn}
            type="button"
            onClick={handelIncrement}
            disabled={!isAnswered}
          >
            <span className={s.btnText}>Next question</span>
            <Arrow className={s.right} />
          </button>
        )}
        {idx === items.length - 1 && (
          <button
            className={s.btn}
            disabled={!isAnswered}
            type="button"
            onClick={handelResult}
          >
            <span className={s.btnText}>Show result</span>
            <Result />
          </button>
        )}
      </div>
    </>
  );
}
export default TestModal;

TestModal.defaultProps = {
  items: [],
};
