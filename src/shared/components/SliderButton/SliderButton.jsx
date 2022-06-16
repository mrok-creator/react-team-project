import PropTypes from 'prop-types';

import s from './sliderButton.module.css';

const SliderButton = ({ isDisabled, handelMover, children }) => {
  return (
    <button
      disabled={isDisabled}
      className={s.btn}
      type="button"
      onClick={handelMover}
    >
      {children}
    </button>
  );
};
export default SliderButton;

SliderButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handelMover: PropTypes.func.isRequired,
};
