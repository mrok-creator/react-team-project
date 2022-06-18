import { useNavigate } from 'react-router-dom';

import s from './style.module.css';
import heart from 'shared/images/svg/heart.svg';
import copy from 'shared/images/svg/copy.svg';

function Footer() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contacts');
  };
  return (
    <div className={s.container}>
      <img className={s.copy} src={copy} alt="" />
      <div className={s.text}>2021</div>
      <div className={s.text}>All Rights Reserved</div>
      <div className={s.authors}>Developed with</div>
      <div className={s.a}>
        {' '}
        <img className={s.img} src={heart} alt="" />
      </div>
      <div>
        by
        <span onClick={handleClick} className={s.students}>
          {' '}
          GoIT Students
        </span>
      </div>
    </div>
  );
}

export default Footer;
