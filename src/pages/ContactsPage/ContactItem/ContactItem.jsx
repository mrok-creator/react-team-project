import PropTypes from 'prop-types';

import s from './contactItem.module.css';

const ContactItem = ({ avatar, descr, name, surename, posn }) => {
  return (
    <li className={s.card}>
      <div className={s.imgWrap}>
        <img src={avatar} alt="" className={s.img} />
        <p className={s.description}>{descr}</p>
      </div>
      <div className={s.descriptionContainer}>
        <h2 className={s.name}>
          {name} <br /> {surename}
        </h2>
        <p className={s.position}>{posn}</p>
      </div>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posn: PropTypes.string.isRequired,
};
