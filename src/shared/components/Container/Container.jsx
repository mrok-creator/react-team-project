import PropTypes from 'prop-types';

import s from './container.module.css';

function Container({ title, children }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}

Container.defaultProps = {
  title: '',
};
Container.propTypes = {
  title: PropTypes.string,
};

export default Container;
//
