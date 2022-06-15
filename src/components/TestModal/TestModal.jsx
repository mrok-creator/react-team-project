import { useState } from 'react';

import TestCard from './TestCard';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

import s from './testModal.module.css';

function TestModal({ items }) {
  const [idx, setIdx] = useState(0);
  const [arrAnswers, setArrAnswers] = useState(new Map());

  const activeCard = items.find((_, index) => idx === index);
  const { questionId } = activeCard;

  const getAnswer = answer => {
    const currentMap = new Map(arrAnswers);

    currentMap.set(questionId, { answer, questionId });
    setArrAnswers(currentMap);
  };
  const handelDecrement = () => {
    setIdx(prevIdx => prevIdx - 1);
  };
  const handelIncrement = () => {
    setIdx(prevIdx => prevIdx + 1);
  };

  return (
    <>
      <TestCard
        item={activeCard}
        index={idx}
        getAnswer={getAnswer}
        data={arrAnswers.get(questionId)}
      />

      <div className={s.groupe}>
        <button
          disabled={idx === 0}
          className={s.btn}
          type="button"
          onClick={handelDecrement}
        >
          <Arrow className={s.left} />
        </button>
        <button
          disabled={idx === items.length - 1}
          className={s.btn}
          type="button"
          onClick={handelIncrement}
        >
          <Arrow className={s.right} />
        </button>
      </div>
    </>
  );
}
export default TestModal;

TestModal.defaultProps = {
  items: [],
};
