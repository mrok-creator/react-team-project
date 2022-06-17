import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../shared/images/arrow.svg';
import { ReactComponent as Result } from '../../shared/images/result.svg';

import TestCard from './TestCard';
import SliderButton from 'shared/components/SliderButton/SliderButton';
import { actions } from '../../redux/testInfo/testInfo-slice';

import s from './testModal.module.css';

function TestModal({ items }) {
  const [idx, setIdx] = useState(0);
  const [mapAnswers, setMapAnswers] = useState(new Map());
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate('/results');
    const action = actions.addAnswers({ answers: [...mapAnswers.values()] });
    dispatch(action);
  };

  const isAnswered = mapAnswers.get(questionId);
  const isDisabled = idx === 0;

  return (
    <>
      <TestCard
        item={activeCard}
        index={idx}
        getAnswer={getAnswer}
        data={isAnswered}
      />

      <div className={s.groupe}>
        <SliderButton
          isDisabled={isDisabled}
          handelMover={handelDecrement}
          text={'Previous question'}
          Icon={Arrow}
        >
          <Arrow className={s.left} />
          <span className={s.btnText}>Previous question</span>
        </SliderButton>
        {idx !== items.length - 1 && (
          <SliderButton
            isDisabled={!isAnswered}
            handelMover={handelIncrement}
            text={'Next question'}
            Icon={Arrow}
          >
            <span className={s.btnText}>Next question</span>
            <Arrow />
          </SliderButton>
        )}
        {idx === items.length - 1 && (
          <SliderButton
            isDisabled={!isAnswered}
            handelMover={handelResult}
            text={'Next question'}
            Icon={Arrow}
          >
            <span className={s.btnText}>Show result</span>
            <Result />
          </SliderButton>
        )}
      </div>
    </>
  );
}
export default TestModal;

TestModal.defaultProps = {
  items: [],
};

TestModal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      answers: PropTypes.array.isRequired,
      question: PropTypes.string.isRequired,
      questionId: PropTypes.number.isRequired,
    })
  ),
};
