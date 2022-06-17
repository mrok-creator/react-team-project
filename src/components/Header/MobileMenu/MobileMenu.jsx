import NavMenu from "../NavMenu"
import out from "svg/sign-out.svg"
import logo from "svg/logo1.svg"
import close from "svg/close-24px.svg"
import { useNavigate } from "react-router-dom"
import { isUserLogin } from "redux/auth/auth-selector"
import { useSelector } from "react-redux"
export default function MobileMenu({ handleClick }) {
    const navigate = useNavigate()
    const isUserLoggedIn = useSelector(isUserLogin)
    const goHome = () => { navigate("/") }
    const a = () => { handleClick() }
    return (
        <div>
            <img src={logo} onClick={goHome} alt="" />
            <img src={close} onClick={a} alt="" />
            <NavMenu />
            {isUserLoggedIn && <img src={out} alt="" />}
        </div>
    )
}