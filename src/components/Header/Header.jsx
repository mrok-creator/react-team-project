import { Outlet, useNavigate } from 'react-router-dom';
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
import useLogin from 'shared/hooks/useLogin';
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setMenuStatus(prev => !prev)
  }
  const logOutAction = () => {
    return
  }
  const goHome = () => {
    navigate("/")
  }
  // const user = getUser()
  // console.log(user)
  // const isUserLoggedIn = useLogin()
  // console.log(isUserLoggedIn)
  const isUserLoggedIn = true
  const onClose = () => {
    setMenuStatus(false)
  }
  return (
    <div className={s.navContainer}>
      <img src={logo} onClick={goHome} alt="" className={s.logo} />
      <div className={s.linkContainer}><div className={s.menu}><NavMenu isUserLoggedIn={isUserLoggedIn} /></div>
        {isUserLoggedIn && <div className={s.letter}><LetteredAvatar
          name="D"
          size={30}
          backgroundColor="#eee"
        /> </div >}
        {isUserLoggedIn && <div className={s.name}>dimama</div>}
        {isUserLoggedIn && <img className={s.logOut} src={logOut} alt="" />}</div>
      {!menuStatus && <img className={s.menuButton} onClick={handleClick} src={menu} alt="" />}
      {menuStatus && <Modal close={onClose} children={<MobileMenu handleClick={handleClick} isUserLoggedIn={isUserLoggedIn} logOut={logOutAction} />} />}
    </div>
  )
};

export default Header;
