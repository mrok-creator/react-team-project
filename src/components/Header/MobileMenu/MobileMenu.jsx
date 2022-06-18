import { useNavigate } from 'react-router-dom';

import NavMenu from '../NavMenu';
import s from './style.module.css';

import out from 'shared/images/svg/sign-out.svg';
import logo from 'shared/images/svg/logo1.svg';
import close from 'shared/images/svg/close-24px.svg';

export default function MobileMenu({ handleClick, isUserLoggedIn, logOut }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
  };
  const goHome = () => {
    handleClick();
    navigate('/');
  };
  const a = () => {
    handleClick();
  };
  return (
    <div className={s.menuContainer}>
      <div className={s.navContainer}>
        <img className={s.logo} src={logo} onClick={goHome} alt="" />
        <img className={s.close} src={close} onClick={a} alt="" />
      </div>
      <NavMenu isUserLoggedIn={isUserLoggedIn} />
      {isUserLoggedIn && (
        <img className={s.out} onClick={handleLogOut} src={out} alt="" />
      )}
    </div>
  );
}
