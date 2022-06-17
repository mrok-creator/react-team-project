import { Outlet } from 'react-router-dom';
import { useState } from "react"
import s from './style.module.css';
import logo from 'svg/logo1.svg'
import logOut from "svg/sign-out.svg"
import Modal from "shared/components/Modal"
import menu from "svg/menu-24px.svg"
import NavMenu from "components/Header/NavMenu"
import LetteredAvatar from 'react-lettered-avatar';
import MobileMenu from './MobileMenu/MobileMenu';
import { getUser } from "redux/auth/auth-selector"
import { isUserLogin } from "redux/auth/auth-selector"
import { useSelector } from "react-redux"
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleClick = () => {
    setMenuStatus(prev => !prev)
  }
  // const user = getUser()
  // console.log(user)
  // const isUserLoggedIn = useSelector(isUserLogin)
  const isUserLoggedIn = true
  const onClose = () => {
    setMenuStatus(false)
  }
  return (
    <div className={s.navContainer}>
      <img src={logo} alt="" className={s.logo} />
      <div className={s.menu}><NavMenu /></div>
      {isUserLoggedIn && <div className={s.letter}><LetteredAvatar
        name="D"
        size={30}
      /> </div >}
      <div className={s.name}>dimama</div>
      <img className={s.logOut} src={logOut} alt="" />
      {!menuStatus && <img className={s.menuButton} onClick={handleClick} src={menu} alt="" />}
      {menuStatus && <Modal close={onClose} children={<MobileMenu handleClick={handleClick} />} />}
    </div>
  )
};

export default Header;
