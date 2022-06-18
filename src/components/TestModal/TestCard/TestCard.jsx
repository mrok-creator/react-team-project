import PropTypes from 'prop-types';
import { useMemo } from 'react';

import Radio from './Radio';

import s from './testCard.module.css';

function TestCard({ item, index, getAnswer, data, total }) {
  const { answers, question } = item;

  const allAnswers = useMemo(
    () =>
      answers.map((answer, index) => (
        <Radio
          key={index}
          value={answer}
          selected={data?.answer || ''}
          text={answer}
          onChange={getAnswer}
        />
      )),
    [answers, data?.answer, getAnswer]
  );

  return (
    <div className={s.card}>
      <h3 className={s.title}>
        question <span className={s.active__page}>{index + 1}</span> / {total}
      </h3>
      <h4 className={s.subtitle}>{question}</h4>
      <div className={s.line}></div>
      <div className={s.answers}>{allAnswers}</div>
    </div>
  );
}
export default TestCard;

TestCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  getAnswer: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  data: PropTypes.object,
};
