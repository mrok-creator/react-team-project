import { NavLink } from 'react-router-dom';
import s from "./style.module.css"
function NavMenu({ isUserLoggedIn }) {
  const getActiveLink = ({ isActive }) => isActive ? (s.linkActive + " " + s.link) : s.link;
  return (
    <>
      {isUserLoggedIn && <NavLink className={getActiveLink}
        to="/">Home</NavLink>}
      {isUserLoggedIn && <NavLink className={getActiveLink} to="/useful-info">Materials</NavLink>}
      <NavLink className={getActiveLink} to="/contacts">Contacts</NavLink>
    </>
  );
}

export default NavMenu;
