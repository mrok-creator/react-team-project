import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import LetteredAvatar from 'react-lettered-avatar';
import useLogin from 'shared/hooks/useLogin';
import { logOut } from 'redux/auth/auth-operation';
import useGetUserData from 'shared/hooks/useGetUserData';

import MobileMenu from './MobileMenu/MobileMenu';
import NavMenu from 'components/Header/NavMenu';
import Modal from 'shared/components/Modal';
import ToggleTheme from 'components/ToggleTheme';
import s from './style.module.css';

import logo from 'shared/images/svg/logo1.svg';
import logOutIcon from 'shared/images/svg/sign-out.svg';
import menu from 'shared/images/svg/menu-24px.svg';

const Header = () => {
  const dispatch = useDispatch();
  const [menuStatus, setMenuStatus] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setMenuStatus(prev => !prev);
  };
  const logOutAction = () => {
    dispatch(logOut());
  };
  const goHome = () => {
    navigate('/');
  };
  const onClose = () => {
    setMenuStatus(false);
  };

  const isUserLoggedIn = useLogin();
  const user = useGetUserData();
  let data = [];
  if (user?.email) {
    data = user.email.split('');
    let i = '';
    for (let index = 1; index < data.length; index++) {
      const element = data[index];

      if (
        element.toUpperCase() === element &&
        element !== element.toLowerCase()
      ) {
        i = index;
        break;
      }
    }
    if (!i) {
      data = data.join('').split('@')[0];
    } else {
      data = data.join('').split(data[i])[0];
    }
  }

  return (
    <div className={s.navContainer}>
      <img src={logo} onClick={goHome} alt="" className={s.logo} />
      <div className={s.linkContainer}>
        <div className={s.menu}>
          <NavMenu isUserLoggedIn={isUserLoggedIn} />
        </div>
        {isUserLoggedIn && (
          <div className={s.letter}>
            <LetteredAvatar name={data[0]} size={30} backgroundColor="#eee" />{' '}
          </div>
        )}
        {isUserLoggedIn && <div className={s.name}>{data}</div>}
        {isUserLoggedIn && (
          <img
            onClick={logOutAction}
            className={s.logOut}
            src={logOutIcon}
            alt=""
          />
        )}
      </div>
      {!menuStatus && (
        <img className={s.menuButton} onClick={handleClick} src={menu} alt="" />
      )}
      {menuStatus && (
        <Modal
          close={onClose}
          children={
            <MobileMenu
              handleClick={handleClick}
              isUserLoggedIn={isUserLoggedIn}
              logOut={logOutAction}
            />
          }
        />
      )}
      <ToggleTheme />
    </div>
  );
};

export default Header;
