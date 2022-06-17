import { NavLink } from 'react-router-dom';

import { isUserLogin } from "redux/auth/auth-selector"
import { useSelector } from "react-redux"
function NavMenu() {
  const isUserLoggedIn = useSelector(isUserLogin)
  return (
    <>
      {isUserLoggedIn && <NavLink to="/">Home</NavLink>}
      {isUserLoggedIn && <NavLink to="/materials">Materials</NavLink>}
      <NavLink to="/contacts">Contacts</NavLink>
    </>
  );
}

export default NavMenu;
