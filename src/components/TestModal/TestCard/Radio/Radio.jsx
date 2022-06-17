import PropTypes from 'prop-types';

import s from './radio.module.css';

const Radio = ({ selected, onChange, text, value }) => {
  return (
    <div
      className={s.container}
      onClick={() => {
        onChange(value);
      }}
    >
      <div className={`${s.outer} ${value !== selected && s.unselected}`}>
        <div
          className={`${s.inner} ${value !== selected && s.unselectedCircle}`}
        />
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
};
export default Radio;

Radio.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
