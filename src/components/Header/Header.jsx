import { Outlet } from 'react-router-dom';
import { useState } from "react"
import s from './style.module.css';
import logo from 'svg/logo1.svg'
import Modal from "shared/components/Modal"
import menu from "svg/menu-24px.svg"
import close from "svg/close-24px.svg"
import NavMenu from "components/Header/NavMenu"
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleClick = () => {
    setMenuStatus(prev => !prev)
  }
  const onClose = () => {
    setMenuStatus(false)
  }
  return (
    <div>
      <img src={logo} alt="" />
      {!menuStatus && <img onClick={handleClick} src={menu} alt="" />}
      {menuStatus && <img onClick={handleClick} src={close} alt="" />}
      {menuStatus && <Modal close={onClose} children={<NavMenu />} />}
    </div>
  )
};

export default Header;
