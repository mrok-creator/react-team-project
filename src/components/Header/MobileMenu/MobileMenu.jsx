import NavMenu from "../NavMenu"
import out from "svg/sign-out.svg"
import logo from "svg/logo1.svg"
import close from "svg/close-24px.svg"
import { useNavigate } from "react-router-dom"
import s from "./style.module.css"
export default function MobileMenu({ handleClick, isUserLoggedIn, logOut }) {
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
    }
    const goHome = () => {
        handleClick()
        navigate("/")
    }
    const a = () => { handleClick() }
    return (
        <div className={s.menuContainer}>
            <div className={s.navContainer}>
                <img className={s.logo} src={logo} onClick={goHome} alt="" />
                <img className={s.close} src={close} onClick={a} alt="" /></div>
            <NavMenu isUserLoggedIn={isUserLoggedIn} />
            {isUserLoggedIn && <img className={s.out} onClick={handleLogOut} src={out} alt="" />}
        </div>
    )
}