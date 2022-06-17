import { NavLink } from 'react-router-dom';
import s from "./style.module.css"
import { isUserLogin } from "redux/auth/auth-selector"
import { useSelector } from "react-redux"
function NavMenu() {
  // const isUserLoggedIn = useSelector(isUserLogin)
  const isUserLoggedIn = true
  const getActiveLink = ({ isActive }) => isActive ? (s.linkActive + " " + s.link) : s.link;
  return (
    <>
      {isUserLoggedIn && <NavLink className={getActiveLink}
        to="/">Home</NavLink>}
      {isUserLoggedIn && <NavLink className={getActiveLink} to="/materials">Materials</NavLink>}
      <NavLink className={getActiveLink} to="/contacts">Contacts</NavLink>
    </>
  );
}

export default NavMenu;
