import Radio from './Radio';

import s from './testCard.module.css';

function TestCard({ item, index, getAnswer, data }) {
  const { answers, question } = item;

  const allAnswers = answers.map((answer, index) => (
    <Radio
      key={index}
      value={answer}
      selected={data?.answer || ''}
      text={answer}
      onChange={getAnswer}
    />
  ));

  return (
    <div className={s.card}>
      <h3 className={s.title}>
        question <span className={s.active__page}>{index + 1}</span> / 12
      </h3>
      <h4 className={s.subtitle}>{question}</h4>
      <div className={s.line}></div>
      <div className={s.form}>{allAnswers}</div>
    </div>
  );
}
export default TestCard;
