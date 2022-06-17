import { Outlet } from 'react-router-dom';
import { useState } from "react"
import s from './style.module.css';
import logo from 'svg/logo1.svg'
import Modal from "shared/components/Modal"
import menu from "svg/menu-24px.svg"
import NavMenu from "components/Header/NavMenu"
import MobileMenu from './MobileMenu/MobileMenu';
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
      <span>D</span>
      {!menuStatus && <img onClick={handleClick} src={menu} alt="" />}
      {menuStatus && <Modal close={onClose} children={<MobileMenu handleClick={handleClick} />} />}
    </div>
  )
};

export default Header;
