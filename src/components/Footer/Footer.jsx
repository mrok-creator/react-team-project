import s from "./style.module.css"
import heart from "svg/heart.svg"
import copy from "svg/copy.svg"
import { useNavigate } from "react-router-dom"
function Footer() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/contacts")
  }
  return <div className={s.container}>
    <img className={s.copy} src={copy} alt="" />
    <div className={s.text}>2021</div>
    <div className={s.text}>All Rights Reserved</div>
    <div className={s.authors}>Developed with</div>
    <div className={s.a}> <img className={s.img} src={heart} alt="" /></div>
    <div>by<span onClick={handleClick} className={s.students}> GoIT Students</span></div>

  </div>
}

export default Footer;
